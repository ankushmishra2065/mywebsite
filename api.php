<?php
declare(strict_types=1);
session_start();
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") exit;

$config = require __DIR__ . "/config.php";
function out($ok, $data=[], $error=null){ echo json_encode(["ok"=>$ok] + $data + ($error?["error"=>$error]:[]), JSON_UNESCAPED_UNICODE); exit; }
function db(){
  global $config;
  static $pdo=null;
  if($pdo) return $pdo;
  try{
    $pdo=new PDO("mysql:host=".$config["db_host"].";dbname=".$config["db_name"].";charset=utf8mb4",$config["db_user"],$config["db_pass"],[
      PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC
    ]);
    return $pdo;
  }catch(Throwable $e){ out(false,[], "Database is not configured yet. Update config.php and import database.sql."); }
}
function body(){ $raw=file_get_contents("php://input"); $j=json_decode($raw,true); return is_array($j)?$j:$_POST; }
function safeUser($u){
  unset($u["password"]);
  $u["notes"]=json_decode($u["notes_json"]??"[]",true) ?: [];
  $u["performance"]=json_decode($u["performance_json"]??"{}",true) ?: [];
  unset($u["notes_json"],$u["performance_json"]);
  return $u;
}
function mailOwner($subject,$message){
  global $config;
  $to=$config["owner_email"];
  $headers="From: EduNexa <noreply@".($_SERVER["HTTP_HOST"]??"localhost").">\r\n";
  $headers.="Content-Type: text/plain; charset=UTF-8\r\n";
  @mail($to,$subject,$message,$headers);
}
$d=body(); $action=$d["action"]??"";
if(!$action) out(false,[],"Missing action.");

if($action==="signup"){
  $name=trim($d["name"]??""); $email=strtolower(trim($d["email"]??"")); $pass=$d["password"]??"";
  if(strlen($name)<2 || !filter_var($email,FILTER_VALIDATE_EMAIL) || strlen($pass)<6) out(false,[],"Enter a valid full name, email and password of at least 6 characters.");
  $pdo=db();
  $st=$pdo->prepare("SELECT id FROM users WHERE email=?");$st->execute([$email]);if($st->fetch())out(false,[],"An account with this email already exists.");
  $hash=password_hash($pass,PASSWORD_DEFAULT);
  $st=$pdo->prepare("INSERT INTO users(name,email,password,streak,last_active,created_at) VALUES(?,?,?,0,CURDATE(),NOW())");
  $st->execute([$name,$email,$hash]);$id=(int)$pdo->lastInsertId();
  $_SESSION["uid"]=$id;
  mailOwner("EduNexa — New sign-in/account created","A new EduNexa account was created.\n\nFull name: $name\nEmail: $email\nTime: ".date("c")."\nIP: ".($_SERVER["REMOTE_ADDR"]??"unknown")."\n\nDo not reply to this automated notification.");
  $st=$pdo->prepare("SELECT * FROM users WHERE id=?");$st->execute([$id]);out(true,["user"=>safeUser($st->fetch())]);
}
if($action==="login"){
  $email=strtolower(trim($d["email"]??""));$pass=$d["password"]??"";$pdo=db();
  $st=$pdo->prepare("SELECT * FROM users WHERE email=?");$st->execute([$email]);$u=$st->fetch();
  if(!$u || !password_verify($pass,$u["password"]))out(false,[],"Incorrect email or password.");
  $today=new DateTime("today");$last=new DateTime($u["last_active"]);$diff=(int)$last->diff($today)->format("%r%a");
  $streak=(int)$u["streak"]; if($diff===1)$streak++; elseif($diff>1)$streak=1;
  $pdo->prepare("UPDATE users SET streak=?,last_active=CURDATE() WHERE id=?")->execute([$streak,$u["id"]]);
  $_SESSION["uid"]=(int)$u["id"];
  mailOwner("EduNexa — User signed in","A user signed in.\n\nFull name: ".$u["name"]."\nEmail: ".$u["email"]."\nTime: ".date("c")."\nIP: ".($_SERVER["REMOTE_ADDR"]??"unknown")."\n\nDo not reply to this automated notification.");
  $st=$pdo->prepare("SELECT * FROM users WHERE id=?");$st->execute([$u["id"]]);out(true,["user"=>safeUser($st->fetch())]);
}
if($action==="logout"){session_destroy();out(true);}
if($action==="me"){
  if(empty($_SESSION["uid"]))out(true,["user"=>null]);
  $pdo=db();$st=$pdo->prepare("SELECT * FROM users WHERE id=?");$st->execute([$_SESSION["uid"]]);$u=$st->fetch();out(true,["user"=>$u?safeUser($u):null]);
}
if($action==="progress" || $action==="study"){
  if(empty($_SESSION["uid"]))out(false,[],"Sign in to save this progress.");
  $pdo=db();$id=$_SESSION["uid"];$st=$pdo->prepare("SELECT * FROM users WHERE id=?");$st->execute([$id]);$u=$st->fetch();
  $solved=(int)$u["solved"]+($action==="progress"?(int)($d["solved"]??0):0);$correct=(int)$u["correct"]+($action==="progress"?(int)($d["correct"]??0):0);$mins=(int)$u["study_minutes"]+($action==="study"?(int)($d["minutes"]??0):(int)($d["studyMinutes"]??0));
  $pdo->prepare("UPDATE users SET solved=?,correct=?,study_minutes=? WHERE id=?")->execute([$solved,$correct,$mins,$id]);
  $st=$pdo->prepare("SELECT * FROM users WHERE id=?");$st->execute([$id]);out(true,["user"=>safeUser($st->fetch())]);
}
if($action==="note"){
  if(empty($_SESSION["uid"]))out(false,[],"Sign in to save notes to your account.");
  $pdo=db();$id=$_SESSION["uid"];$title=trim($d["title"]??"");$body=trim($d["body"]??"");if(!$title||!$body)out(false,[],"Note is empty.");
  $pdo->prepare("INSERT INTO notes(user_id,title,body,created_at) VALUES(?,?,?,NOW())")->execute([$id,$title,$body]);
  $st=$pdo->prepare("SELECT * FROM users WHERE id=?");$st->execute([$id]);out(true,["user"=>safeUser($st->fetch())]);
}
if($action==="feedback"){
  $name=trim($d["name"]??"");$email=trim($d["email"]??"");$type=trim($d["type"]??"Suggestion");$message=trim($d["message"]??"");
  if(strlen($message)<3)out(false,[],"Please write some feedback.");
  if($email && !filter_var($email,FILTER_VALIDATE_EMAIL))out(false,[],"Please enter a valid email.");
  $pdo=db();$uid=$_SESSION["uid"]??null;
  $pdo->prepare("INSERT INTO feedback(user_id,name,email,type,message,created_at) VALUES(?,?,?,?,?,NOW())")->execute([$uid,$name,$email,$type,$message]);
  mailOwner("EduNexa — New feedback [$type]","New feedback received.\n\nName: ".($name?: "Not provided")."\nEmail: ".($email?: "Not provided")."\nType: $type\nMessage:\n$message\n\nTime: ".date("c")."\nIP: ".($_SERVER["REMOTE_ADDR"]??"unknown"));
  out(true);
}
out(false,[],"Unknown action.");
?>