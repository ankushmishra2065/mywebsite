const express=require("express");
const mysql=require("mysql2/promise");
const bcrypt=require("bcryptjs");
const session=require("express-session");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(session({secret:process.env.SESSION_SECRET||"change-this-secret",resave:false,saveUninitialized:false,cookie:{httpOnly:true,sameSite:"lax",secure:false,maxAge:7*24*60*60*1000}}));
const pool=mysql.createPool({host:process.env.DB_HOST||"localhost",user:process.env.DB_USER||"root",password:process.env.DB_PASSWORD||"",database:process.env.DB_NAME||"mishraankush",waitForConnections:true,connectionLimit:10});
app.use(express.static("public"));

app.post("/api/auth/signup",async(req,res)=>{
 try{const {name,email,password}=req.body;if(!name||!email||!password)return res.status(400).json({error:"Name, email and password are required."});
 if(password.length<8)return res.status(400).json({error:"Password must be at least 8 characters."});
 const [old]=await pool.execute("SELECT id FROM users WHERE email=?",[email.toLowerCase().trim()]);
 if(old.length)return res.status(409).json({error:"An account with this email already exists."});
 const hash=await bcrypt.hash(password,12);
 const [r]=await pool.execute("INSERT INTO users(name,email,password_hash) VALUES(?,?,?)",[name.trim(),email.toLowerCase().trim(),hash]);
 req.session.user={id:r.insertId,name:name.trim(),email:email.toLowerCase().trim()};
 res.status(201).json({message:"Account created successfully."});
 }catch(e){console.error(e);res.status(500).json({error:"Server/database error."})}
});
app.post("/api/auth/login",async(req,res)=>{
 try{const {email,password}=req.body;if(!email||!password)return res.status(400).json({error:"Email and password are required."});
 const [rows]=await pool.execute("SELECT id,name,email,password_hash,premium FROM users WHERE email=?",[email.toLowerCase().trim()]);
 if(!rows.length||!(await bcrypt.compare(password,rows[0].password_hash)))return res.status(401).json({error:"Invalid email or password."});
 req.session.user={id:rows[0].id,name:rows[0].name,email:rows[0].email,premium:!!rows[0].premium};
 res.json({message:"Signed in successfully."});
 }catch(e){console.error(e);res.status(500).json({error:"Server/database error."})}
});
app.post("/api/auth/logout",(req,res)=>req.session.destroy(()=>res.json({message:"Logged out."})));
app.get("/api/me",(req,res)=>res.json({user:req.session.user||null}));
app.listen(process.env.PORT||3000,()=>console.log(`Mishraankush running on http://localhost:${process.env.PORT||3000}`));