const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const subjects=[
{name:"Physics",icon:"⚛️",progress:82,chapters:["Physical Quantities","Vectors","Kinematics","Dynamics","Current Electricity"]},
{name:"Chemistry",icon:"🧪",progress:64,chapters:["Atomic Structure","Chemical Bonding","Thermodynamics","Organic Basics","Aldehydes & Ketones"]},
{name:"Mathematics",icon:"📐",progress:91,chapters:["Sets & Functions","Trigonometry","Coordinate Geometry","Calculus","Vectors"]},
{name:"Biology",icon:"🧬",progress:72,chapters:["Cell Biology","Genetics","Human Physiology","Ecology","Evolution"]},
{name:"English",icon:"📚",progress:68,chapters:["Grammar","Vocabulary","Reading","Writing","Comprehension"]},
{name:"Computer",icon:"💻",progress:58,chapters:["Programming","Data Structures","Database","Networking","Web Technology"]}
];
const questions=[
["Physics","What is the SI unit of electric current?","Ampere","Volt","Ohm","Watt",0],
["Physics","Which quantity is a vector?","Speed","Distance","Velocity","Time",2],
["Physics","Newton's second law relates force to...","Mass and acceleration","Mass only","Velocity only","Energy",0],
["Chemistry","The atomic number represents the number of...","Neutrons","Protons","Nucleons","Isotopes",1],
["Chemistry","A solution with pH 3 is...","Neutral","Basic","Acidic","Salt",2],
["Chemistry","Which bond involves sharing electrons?","Ionic","Covalent","Metallic","Hydrogen",1],
["Mathematics","Derivative of x² is...","x","2x","x²","2",1],
["Mathematics","sin²θ + cos²θ equals...","0","2","1","tanθ",2],
["Biology","The powerhouse of the cell is...","Nucleus","Ribosome","Mitochondria","Golgi body",2],
["Biology","DNA stands for...","Deoxyribonucleic acid","Dinitrogen acid","Double nucleic acid","Dynamic nitrogen acid",0],
["Physics","Work done is zero when force and displacement are...","Parallel","Perpendicular","Same direction","Opposite",1],
["Mathematics","If A={1,2,3}, number of elements is...","1","2","3","4",2]
];
const perf=[["Physics",82],["Chemistry",64],["Mathematics",91],["Biology",72],["English",68]];
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
function go(id){$$(".section").forEach(s=>s.classList.remove("active-section"));const el=$("#"+id);if(el)el.classList.add("active-section");$$(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.section===id));window.scrollTo({top:0,behavior:"smooth"});if(innerWidth<801)$("#sidebar").classList.remove("open")}
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
$$(".nav-item").forEach(b=>b.addEventListener("click",()=>go(b.dataset.section)));
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.add("open"));
$("#closeSidebar").addEventListener("click",()=>$("#sidebar").classList.remove("open"));
$("#themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("edunexaTheme",document.body.classList.contains("dark")?"dark":"light")});
if(localStorage.getItem("edunexaTheme")==="dark")document.body.classList.add("dark");
function renderContinue(){const box=$("#continueList");box.innerHTML=subjects.slice(0,3).map((s,i)=>`<div class="learn-row"><span class="subject-icon">${s.icon}</span><div><b>${s.name}</b><small>${s.chapters[i+1]||s.chapters[0]}</small></div><span class="continue">${s.progress}%</span></div>`).join("")}
function renderPerformance(){const box=$("#performanceList");box.innerHTML=perf.map(([n,p])=>`<div class="analytics-bar"><div><span>${n}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div></div>`).join("")}
function renderSubjects(){const q=($("#subjectSearch")?.value||"").toLowerCase(), f=$("#subjectFilter")?.value||"all";const data=subjects.filter(s=>(f==="all"||s.name===f)&&(s.name+" "+s.chapters.join(" ")).toLowerCase().includes(q));$("#subjectGrid").innerHTML=data.map(s=>`<article class="subject-card"><div class="subhead"><span class="subicon">${s.icon}</span><div><h3>${s.name}</h3><small>${s.chapters.length*16}+ lessons • ${s.progress}% progress</small></div></div>${s.chapters.map((c,i)=>`<div class="chapter"><b>${i+1}. ${c}</b><span>${i<Math.ceil(s.progress/20)?"Study":"Start"} →</span></div>`).join("")}</article>`).join("")}
function renderEntrance(id,names){$("#"+id).innerHTML=names.map((n,i)=>`<div><span>📘 ${n}</span><b>${[82,67,74,59,43][i%5]}%</b></div>`).join("")}
function renderAnalytics(){ $("#analyticsBars").innerHTML=perf.map(([n,p])=>`<div class="analytics-bar"><div><span>${n}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%;--bar:${["#0b4de8","#f59e0b","#13a36f","#7656ee","#e85b9a"][perf.findIndex(x=>x[0]===n)]}"></i></div></div>`).join("")}
renderContinue();renderPerformance();renderSubjects();renderEntrance("ceeSubjects",["Physics","Chemistry","Biology","English"]);renderEntrance("ioeSubjects",["Mathematics","Physics","Chemistry","English","Aptitude"]);renderAnalytics();
$("#subjectSearch").addEventListener("input",renderSubjects);$("#subjectFilter").addEventListener("change",renderSubjects);
let quiz=[],qi=0,score=0;
function startQuiz(){let sub=$("#practiceSubject").value;let count=+$("#practiceCount").value;let pool=questions.filter(q=>sub==="All Subjects"||q[0]===sub);quiz=[...pool].sort(()=>Math.random()-.5).slice(0,Math.min(count,pool.length));qi=0;score=0;renderQuestion()}
function renderQuestion(){if(qi>=quiz.length){$("#quizArea").innerHTML=`<div class="quiz-card" style="text-align:center"><div style="font-size:50px">🏆</div><h2>Practice Complete!</h2><p class="muted">You scored <b>${score}/${quiz.length}</b> (${Math.round(score/quiz.length*100)}%).</p><button class="primary" id="again">Try Another Set →</button></div>`;$("#again").onclick=startQuiz;$("#statSolved").textContent=(420+quiz.length);return}const q=quiz[qi];$("#quizArea").innerHTML=`<div class="quiz-card"><div class="quiz-top"><span>Question ${qi+1} of ${quiz.length}</span><span>${q[0]}</span></div><h2>${q[1]}</h2><div class="quiz-options">${q.slice(2,6).map((o,i)=>`<button class="quiz-option" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div><p class="muted">Choose one answer.</p></div>`;$$(".quiz-option").forEach(b=>b.onclick=()=>{const chosen=+b.dataset.i;$$(".quiz-option").forEach(x=>x.disabled=true);if(chosen===q[6]){b.classList.add("correct");score++;toast("Correct! 🎉")}else{b.classList.add("wrong");$$(".quiz-option")[q[6]].classList.add("correct");toast("Keep going — review this one.")}setTimeout(()=>{qi++;renderQuestion()},650)})}
$("#startQuiz").onclick=startQuiz;
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"){const v=e.target.value.toLowerCase();const found=subjects.find(s=>(s.name+" "+s.chapters.join(" ")).toLowerCase().includes(v));if(found){go("learn");$("#subjectFilter").value=found.name;renderSubjects()}else toast("No matching content found yet.")}});
let notes=JSON.parse(localStorage.getItem("edunexaNotes")||"[]");
function renderNotes(){const box=$("#notesGrid");box.innerHTML=notes.length?notes.map((n,i)=>`<article class="note"><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.body)}</p><small class="muted">${n.date}</small><br><button onclick="deleteNote(${i})">Delete</button></article>`).join(""):`<div class="panel"><h2>No notes yet</h2><p class="muted">Create your first personal study note above.</p></div>`}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
window.deleteNote=i=>{notes.splice(i,1);localStorage.setItem("edunexaNotes",JSON.stringify(notes));renderNotes();toast("Note deleted")};
$("#saveNote").onclick=()=>{const title=$("#noteTitle").value.trim(),body=$("#noteBody").value.trim();if(!title||!body)return toast("Add a title and note first.");notes.unshift({title,body,date:new Date().toLocaleDateString()});localStorage.setItem("edunexaNotes",JSON.stringify(notes));$("#noteTitle").value="";$("#noteBody").value="";renderNotes();toast("Note saved ✓")};renderNotes();
$$(".ai-prompts button").forEach(b=>b.onclick=()=>{$("#aiInput").value=b.dataset.prompt;$("#aiSend").click()});
function sendAI(){const input=$("#aiInput"),text=input.value.trim();if(!text)return;$("#chatMessages").insertAdjacentHTML("beforeend",`<div class="user-msg"><p>${escapeHtml(text)}</p></div>`);input.value="";const reply=text.toLowerCase().includes("mcq")?"Sure — I can help you build a randomized MCQ set. Open Practice and choose your subject, question count and difficulty.":text.toLowerCase().includes("plan")?"Try this: 2 focused chapters + 30 MCQs + 25 minutes revision each day. Increase the target after you maintain a 7-day streak.":"Study tip: break the topic into concept → example → practice → revision. If you share the exact question or topic, I can explain it step by step.";setTimeout(()=>{$("#chatMessages").insertAdjacentHTML("beforeend",`<div class="bot"><b>EduNexa AI 🤖</b><p>${reply}</p></div>`);$("#chatMessages").scrollTop=99999},300)}
$("#aiSend").onclick=sendAI;$("#aiInput").addEventListener("keydown",e=>{if(e.key==="Enter")sendAI()});
let timer=1500,timerRun=false,timerInt;function drawTimer(){let m=Math.floor(timer/60),s=timer%60;$("#timerDisplay").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`};drawTimer();
$("#timerStart").onclick=()=>{if(timerRun)return;timerRun=true;timerInt=setInterval(()=>{timer--;drawTimer();if(timer<=0){clearInterval(timerInt);timerRun=false;toast("Focus session complete! 🎉");timer=1500;drawTimer()}},1000);toast("Focus timer started")};
$("#timerReset").onclick=()=>{clearInterval(timerInt);timerRun=false;timer=1500;drawTimer();toast("Timer reset")};$("#focusTimer").onclick=()=>{go("planner");$("#timerStart").click()};
