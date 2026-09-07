const QUESTION_VERSION="v3";
const SEED_QUESTIONS=COURSE_DATA.flatMap(c=>c.chapters.flatMap(ch=>ch.questions.map(q=>({...q,course:c.id,chapter:ch.name}))));
let savedQuestions=JSON.parse(localStorage.getItem("nexoraQuestions_"+QUESTION_VERSION)||"null");
let state={course:null,chapter:null,view:"dashboard",questions:savedQuestions||SEED_QUESTIONS};
if(!savedQuestions)localStorage.setItem("nexoraQuestions_"+QUESTION_VERSION,JSON.stringify(SEED_QUESTIONS));
function save(){localStorage.setItem("nexoraQuestions_"+QUESTION_VERSION,JSON.stringify(state.questions))}
const app=document.getElementById("app"), modal=document.getElementById("modal");
function courseById(id){return COURSE_DATA.find(c=>c.id===id)}
function qs(courseId){return state.questions.filter(q=>q.course===courseId)}
function render(){
 document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===state.view));
 if(state.view==="dashboard") dashboard();
 if(state.view==="study") study();
 if(state.view==="questions") questionManager();
 if(state.view==="notices") notices();
 if(state.view==="gallery") gallery();
 if(state.view==="notes") notes();
 if(state.view==="exams") exams();
 if(state.view==="profile") profile();
 if(state.view==="admin") admin();
}
function dashboard(){
 let total=state.questions.length;
 app.innerHTML=`<div class="hero"><div><h1>Good evening, Ankush 👋</h1><p>Your personal IT learning workspace — learn, practice and track your progress.</p></div><button class="btn" onclick="state.view='study';render()">Start Learning →</button></div>
 <div class="cards"><div class="card stat"><b>${COURSE_DATA.length}</b><span>Courses</span></div><div class="card stat"><b>${total}</b><span>Questions</span></div><div class="card stat"><b>${COURSE_DATA.reduce((a,c)=>a+c.chapters.length,0)}</b><span>Chapters</span></div><div class="card stat"><b>7 🔥</b><span>Study streak</span></div></div>
 <div class="section-title"><h2>IT Courses</h2><button class="btn secondary" onclick="state.view='questions';render()">Manage Questions</button></div>
 <div class="grid">${COURSE_DATA.map(c=>`<div class="card course"><span class="tag">${c.short}</span><h3>${c.name}</h3><p class="muted">${c.chapters.length} chapters • ${qs(c.id).length} questions</p><button class="btn" onclick="openCourse('${c.id}')">Open Course</button></div>`).join("")}</div>`;
}
function openCourse(id){state.course=id;state.view="study";render()}
function study(){
 let c=state.course?courseById(state.course):COURSE_DATA[0];
 app.innerHTML=`<div class="section-title"><div><span class="tag">${c.short}</span><h1>${c.name}</h1><p class="muted">Choose a chapter for notes, summaries, important questions and MCQs.</p></div><button class="btn secondary" onclick="state.view='dashboard';render()">← Dashboard</button></div>
 <div class="grid">${c.chapters.map((ch,i)=>`<div class="card course"><span class="tag">Chapter ${i+1}</span><h3>${ch.name}</h3><p class="muted">${ch.summary}</p><p><b>Important:</b> ${ch.important.length} questions</p><button class="btn" onclick="openChapter('${c.id}',${i})">Open Chapter</button></div>`).join("")}</div>`;
}
function openChapter(cid,i){
 let c=courseById(cid),ch=c.chapters[i],arr=state.questions.filter(q=>q.course===cid&&q.chapter===ch.name);
 app.innerHTML=`<div class="section-title"><div><span class="tag">${c.short}</span><h1>${ch.name}</h1><p class="muted">Complete chapter study area: notes, exam questions and MCQ practice.</p></div><button class="btn secondary" onclick="study()">← Chapters</button></div>
 <div class="panel"><h2>Chapter Summary</h2><p>${ch.summary}</p><h2>Chapter Notes</h2><ul>${ch.notes.map(n=>`<li>${n}</li>`).join("")}</ul><h2>Important / Theory Questions</h2><div class="list">${ch.important.map(q=>`<button>${q}</button>`).join("")}</div></div>
 <div class="section-title"><div><h2>Complete Question Bank</h2><p class="muted">${arr.length} practice questions in this chapter.</p></div><button class="btn" onclick="startQuiz('${cid}',${i})">Start Full Quiz</button></div>
 <div class="panel"><div class="list">${arr.map((q,n)=>`<div class="card"><span class="tag">Question ${n+1} • MCQ</span><h3>${q.q}</h3><p class="muted">${q.a}</p><details><summary>Show options</summary><ol>${q.options.map((o,k)=>`<li>${String.fromCharCode(65+k)}. ${o}${k===q.correct?' ✓':''}</li>`).join("")}</ol></details></div>`).join("")}</div></div>`;
}
function startQuiz(cid,i){
 let c=courseById(cid),ch=c.chapters[i], arr=state.questions.filter(q=>q.course===cid&&q.chapter===ch.name);
 if(!arr.length){alert("No questions in this chapter yet.");return}
 let idx=0,score=0;
 function qrender(){let q=arr[idx];app.innerHTML=`<div class="panel"><div class="row"><span>${c.name} • ${ch.name}</span><span>${idx+1}/${arr.length}</span></div><div class="progress" style="margin:15px 0"><i style="width:${idx/arr.length*100}%"></i></div><div class="question">${q.q}</div><div class="options">${q.options.map((o,n)=>`<button onclick="answer(${n})">${String.fromCharCode(65+n)}. ${o}</button>`).join("")}</div><p class="muted">Score: ${score}</p></div>`}
 window.answer=(n)=>{let q=arr[idx], buttons=document.querySelectorAll(".options button");buttons.forEach(b=>b.disabled=true);buttons[q.correct].classList.add("correct");if(n!==q.correct)buttons[n].classList.add("wrong");else score++;setTimeout(()=>{idx++;if(idx<arr.length)qrender();else app.innerHTML=`<div class="panel"><h1>Quiz Complete 🎉</h1><p>You scored <b>${score}/${arr.length}</b>.</p><button class="btn" onclick="study()">Back to Course</button></div>`},700)}
 qrender();
}
function questionManager(){
 let cid=state.course||COURSE_DATA[0].id,c=courseById(cid), arr=qs(cid);
 app.innerHTML=`<div class="section-title"><div><h1>Question Manager</h1><p class="muted">Add, edit, hide or delete questions without changing your website code.</p></div><button class="btn" onclick="editQuestion()">＋ Add Question</button></div>
 <div class="cards"><div class="card stat"><b>${state.questions.length}</b><span>Total Questions</span></div><div class="card stat"><b>${COURSE_DATA.length}</b><span>Courses</span></div><div class="card stat"><b>${c.chapters.length}</b><span>Chapters</span></div><div class="card stat"><b>${arr.length}</b><span>${c.short} Questions</span></div></div>
 <div class="panel"><div class="row"><select id="qcourse" onchange="state.course=this.value;questionManager()">${COURSE_DATA.map(x=>`<option value="${x.id}" ${x.id===cid?"selected":""}>${x.name}</option>`).join("")}</select><input id="qsearch" placeholder="Search questions..." oninput="filterQuestions()" style="padding:10px;border:1px solid #d8e1ee;border-radius:8px;width:45%"></div><div id="qtable" class="list" style="margin-top:15px">${arr.map((q,i)=>`<div class="card row"><div><span class="tag">${q.chapter}</span><h3>${q.q}</h3><small class="muted">${q.a}</small></div><div><button class="btn secondary" onclick="editQuestion(${i})">Edit</button> <button class="btn" style="background:#e85b63" onclick="deleteQuestion(${i})">Delete</button></div></div>`).join("")}</div></div>`;
}
function filterQuestions(){let term=document.getElementById("qsearch").value.toLowerCase();document.querySelectorAll("#qtable .card").forEach(x=>x.style.display=x.innerText.toLowerCase().includes(term)?"":"none")}
function editQuestion(i=null){
 let cid=state.course||COURSE_DATA[0].id,q=i==null?null:qs(cid)[i];
 modal.classList.remove("hidden");modal.innerHTML=`<div class="dialog"><div class="row"><h2>${q?"Edit":"Add"} Question</h2><button onclick="modal.classList.add('hidden')">✕</button></div>
 <div class="field"><label>Course</label><select id="fCourse">${COURSE_DATA.map(c=>`<option value="${c.id}" ${c.id===cid?"selected":""}>${c.name}</option>`).join("")}</select></div>
 <div class="field"><label>Chapter</label><select id="fChapter">${courseById(cid).chapters.map(ch=>`<option>${ch.name}</option>`).join("")}</select></div>
 <div class="field"><label>Question</label><textarea id="fQ" rows="3">${q?q.q:""}</textarea></div>
 ${["A","B","C","D"].map((x,n)=>`<div class="field"><label>Option ${x}</label><input id="f${x}" value="${q?q.options[n]:""}"></div>`).join("")}
 <div class="field"><label>Correct answer (A-D)</label><select id="fCorrect">${["A","B","C","D"].map((x,n)=>`<option value="${n}" ${q&&q.correct===n?"selected":""}>${x}</option>`).join("")}</select></div>
 <div class="field"><label>Answer explanation</label><textarea id="fA" rows="3">${q?q.a:""}</textarea></div>
 <button class="btn" onclick="saveQuestion(${i==null?"null":i})">Save Question</button></div>`;
}
document.addEventListener("change",e=>{if(e.target.id==="fCourse"){let c=courseById(e.target.value),s=document.getElementById("fChapter");s.innerHTML=c.chapters.map(x=>`<option>${x.name}</option>`).join("")}});
function saveQuestion(i){
 let cid=document.getElementById("fCourse").value,q={course:cid,chapter:document.getElementById("fChapter").value,q:document.getElementById("fQ").value.trim(),options:["A","B","C","D"].map(x=>document.getElementById("f"+x).value.trim()),correct:+document.getElementById("fCorrect").value,a:document.getElementById("fA").value.trim()};
 if(!q.q||q.options.some(x=>!x)){alert("Fill the question and all four options.");return}
 if(i===null)state.questions.push(q);else{let old=qs(state.course)[i],idx=state.questions.indexOf(old);state.questions[idx]=q}
 save();modal.classList.add("hidden");questionManager();
}
function deleteQuestion(i){if(confirm("Delete this question?")){let old=qs(state.course||COURSE_DATA[0].id)[i];state.questions.splice(state.questions.indexOf(old),1);save();questionManager()}}
function notices(){app.innerHTML=`<div class="section-title"><h1>Notices</h1><button class="btn" onclick="alert('Connect this page to your database later for live college notices.')">＋ Add Notice</button></div><div class="list"><div class="card notice"><b>Internal Examination</b><p class="muted">Check your college notice board for the official routine and instructions.</p></div><div class="card notice"><b>Assignment Reminder</b><p class="muted">Keep your IT assignments organized and submit them before the official deadline.</p></div></div>`}
function gallery(){app.innerHTML=`<div class="section-title"><h1>Gallery</h1><button class="btn" onclick="alert('Replace these placeholders with your uploaded images or connect cloud storage.')">＋ Add Picture</button></div><div class="grid">${["College Memories","Projects","Certificates","Events","Coding","Achievements"].map((x,i)=>`<div class="card" style="min-height:170px;display:flex;align-items:end;background:linear-gradient(135deg,#102b56,#3d7edb);color:#fff"><div><span class="tag">${i+1}</span><h2>${x}</h2><p>Photo album</p></div></div>`).join("")}</div>`}
function notes(){app.innerHTML=`<div class="section-title"><h1>My Notes</h1><button class="btn" onclick="alert('Add personal notes here; connect to database/localStorage for persistence.')">＋ New Note</button></div><div class="panel"><h3>Quick Notes</h3><p class="muted">Use the Study section for course notes. This area is reserved for your personal notes, reminders and saved explanations.</p></div>`}
function exams(){app.innerHTML=`<div class="section-title"><h1>Exams & Mock Tests</h1></div><div class="grid">${COURSE_DATA.slice(0,6).map(c=>`<div class="card"><span class="tag">${c.short}</span><h3>${c.name} Mock Test</h3><p class="muted">${qs(c.id).length} available questions</p><button class="btn" onclick="state.course='${c.id}';questionManager()">Practice</button></div>`).join("")}</div>`}
function profile(){app.innerHTML=`<div class="hero"><div><h1>Ankush</h1><p>IT Student • Learner • Developer</p></div><button class="btn secondary">Edit Profile</button></div><div class="cards"><div class="card stat"><b>8</b><span>Courses</span></div><div class="card stat"><b>∞</b><span>Learning potential</span></div><div class="card stat"><b>7 🔥</b><span>Current streak</span></div><div class="card stat"><b>2026</b><span>Learning year</span></div></div>`}

function getStudents(){
  return JSON.parse(localStorage.getItem("nexoraStudents_v1")||"[]");
}
function saveStudents(students){
  localStorage.setItem("nexoraStudents_v1",JSON.stringify(students));
}
function registerStudent(){
  app.innerHTML=`<div class="section-title"><div><h1>Student Registration</h1><p class="muted">Create your NEXORA student profile.</p></div></div>
  <div class="panel" style="max-width:720px">
    <form onsubmit="submitRegistration(event)">
      <div class="field"><label>Full Name *</label><input id="regName" required maxlength="80" autocomplete="name" placeholder="Enter your name"></div>
      <div class="field"><label>Email *</label><input id="regEmail" required maxlength="120" type="email" autocomplete="email" placeholder="student@example.com"></div>
      <div class="field"><label>Class / Level</label><input id="regClass" maxlength="60" placeholder="e.g. Class 11"></div>
      <div class="field"><label>Course / Stream</label><input id="regCourse" maxlength="80" placeholder="e.g. Management / Computer Science"></div>
      <div class="field"><label>Phone <span class="muted">(optional)</span></label><input id="regPhone" maxlength="25" type="tel" autocomplete="tel" placeholder="Optional"></div>
      <label style="display:flex;gap:8px;align-items:flex-start;margin:12px 0;font-size:13px">
        <input id="regConsent" type="checkbox" required style="margin-top:3px">
        <span>I understand that the information I submit will be used for NEXORA student registration and administration.</span>
      </label>
      <button class="btn" type="submit">Create Student Profile</button>
      <p id="regStatus" class="muted" style="margin-top:12px"></p>
    </form>
  </div>`;
}
async function submitRegistration(e){
  e.preventDefault();
  const status=document.getElementById("regStatus");
  const student={
    id:"STU-"+Date.now().toString(36).toUpperCase(),
    name:document.getElementById("regName").value.trim(),
    email:document.getElementById("regEmail").value.trim().toLowerCase(),
    classLevel:document.getElementById("regClass").value.trim(),
    course:document.getElementById("regCourse").value.trim(),
    phone:document.getElementById("regPhone").value.trim(),
    registeredAt:new Date().toISOString()
  };
  if(!student.name||!student.email){return}
  const students=getStudents();
  if(students.some(s=>s.email===student.email)){
    status.textContent="A student with this email is already registered on this device.";
    return;
  }
  students.unshift(student); saveStudents(students);
  let online="saved on this device";
  const endpoint=(window.NEXORA_CONFIG&&NEXORA_CONFIG.REGISTRATION_ENDPOINT)||"";
  if(endpoint){
    try{
      const r=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(student)});
      if(!r.ok) throw new Error("Registration endpoint returned an error");
      online="saved and sent to your registration backend";
    }catch(err){online="saved on this device; online delivery failed"}
  }
  status.textContent="Registration successful — "+online+".";
  setTimeout(()=>admin(),700);
}
function admin(){
  const students=getStudents();
  app.innerHTML=`<div class="section-title"><div><h1>Admin Dashboard</h1><p class="muted">Registered students</p></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn secondary" onclick="exportStudents()">Export CSV</button><button class="btn" onclick="registerStudent()">＋ Register Student</button></div></div>
  <div class="cards">
    <div class="card stat"><b>${students.length}</b><span>Registered Students</span></div>
    <div class="card stat"><b>${students.filter(s=>s.registeredAt&&new Date(s.registeredAt).toDateString()===new Date().toDateString()).length}</b><span>Registered Today</span></div>
  </div>
  <div class="panel" style="margin-top:18px;overflow:auto">
    ${students.length?`<table style="width:100%;border-collapse:collapse;min-width:720px">
      <thead><tr><th style="text-align:left;padding:10px;border-bottom:1px solid #d8e1ee">Name</th><th style="text-align:left;padding:10px;border-bottom:1px solid #d8e1ee">Email</th><th style="text-align:left;padding:10px;border-bottom:1px solid #d8e1ee">Class</th><th style="text-align:left;padding:10px;border-bottom:1px solid #d8e1ee">Course</th><th style="text-align:left;padding:10px;border-bottom:1px solid #d8e1ee">Registered</th><th style="padding:10px;border-bottom:1px solid #d8e1ee"></th></tr></thead>
      <tbody>${students.map(s=>`<tr><td style="padding:10px;border-bottom:1px solid #edf1f7">${escapeHtml(s.name)}</td><td style="padding:10px;border-bottom:1px solid #edf1f7">${escapeHtml(s.email)}</td><td style="padding:10px;border-bottom:1px solid #edf1f7">${escapeHtml(s.classLevel||"—")}</td><td style="padding:10px;border-bottom:1px solid #edf1f7">${escapeHtml(s.course||"—")}</td><td style="padding:10px;border-bottom:1px solid #edf1f7">${new Date(s.registeredAt).toLocaleString()}</td><td style="padding:10px;border-bottom:1px solid #edf1f7"><button class="btn" style="background:#e85b63" onclick="removeStudent('${s.id}')">Delete</button></td></tr>`).join("")}</tbody>
    </table>`:`<div class="empty"><h3>No students registered yet</h3><p class="muted">Use the Register page to add the first student.</p></div>`}
  </div>`;
}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function removeStudent(id){
  if(!confirm("Remove this student from this device?")) return;
  saveStudents(getStudents().filter(s=>s.id!==id)); admin();
}
function exportStudents(){
  const rows=getStudents();
  if(!rows.length){alert("No students to export.");return;}
  const cols=["id","name","email","classLevel","course","phone","registeredAt"];
  const csv=[cols.join(","),...rows.map(s=>cols.map(k=>`"${String(s[k]??"").replace(/"/g,'""')}"`).join(","))].join("\n");
  const blob=new Blob([csv],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="nexora-students.csv"; a.click(); URL.revokeObjectURL(a.href);
}

document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{state.view=b.dataset.view;render()});
document.getElementById("theme").onclick=()=>document.body.classList.toggle("dark");
document.getElementById("search").oninput=e=>{let t=e.target.value.toLowerCase();if(!t)return;state.view="questions";render();document.getElementById("qsearch").value=t;filterQuestions()};
render();
