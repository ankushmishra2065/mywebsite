const state={
  view:"dashboard", theme:localStorage.getItem("ash-theme")||"dark",
  course:"Class 12", subject:"Economics", quizScore:72, completed:68,
  notes:[
    {title:"Scarcity, Choice & Allocation of Resources",subject:"Economics",progress:68},
    {title:"Demand and Supply",subject:"Economics",progress:42},
    {title:"Final Accounts",subject:"Accountancy",progress:31},
    {title:"Database Management System",subject:"Computer",progress:18}
  ],
  bookmarks:["Opportunity Cost — Economics","Final Accounts — Accountancy"]
};
const app=document.querySelector("#app");
document.body.classList.toggle("light",state.theme==="light");

const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const pct=n=>`<div class="progress"><i style="width:${n}%"></i></div>`;

function layout(){
  document.querySelectorAll(".nav-item,.mobile-nav button").forEach(b=>{
    b.classList.toggle("active",b.dataset.view===state.view);
  });
}
function render(){layout();({dashboard,courses,notes,practice,ai,music,progress,bookmarks,admin,profile}[state.view]||dashboard)();}

function dashboard(){
app.innerHTML=`
<section class="hero card">
 <div class="hero-content">
  <div class="eyebrow">ANKUSH STUDY HUB</div>
  <h1>Learn smarter. Practice better.</h1>
  <p>Your complete study workspace for notes, questions, quizzes, progress and AI-powered learning — designed for students.</p>
  <div class="hero-actions"><button class="btn primary" onclick="openChapter()">Continue learning →</button><button class="btn ghost" onclick="go('practice')">Take a quiz</button></div>
 </div>
</section>
<div class="grid grid-4" style="margin-top:16px">
 ${stat("🔥","Study streak","7 days","Keep it going","purple")}
 ${stat("⏱","Study time","1h 24m","Today","accent")}
 ${stat("🎯","Quiz accuracy","72%","Last 30 days","green")}
 ${stat("📚","Chapters","8 / 24","Completed","purple")}
</div>
<div class="grid grid-2" style="margin-top:16px">
 <div class="card"><div class="row"><div><div class="eyebrow">CONTINUE</div><h2 style="margin:7px 0">Scarcity, Choice & Allocation</h2><p class="subtitle">Economics · Class 12</p></div><span class="tag">68%</span></div><div style="margin:20px 0">${pct(68)}</div><button class="btn primary" onclick="openChapter()">Open chapter</button></div>
 <div class="card"><div class="row"><div><div class="eyebrow">WEAK TOPICS</div><h2 style="margin:7px 0">Needs practice</h2></div><button class="btn ghost" onclick="go('progress')">View all</button></div><div class="list" style="margin-top:14px">
  ${["Demand elasticity","Final accounts adjustments","DBMS normalization"].map((x,i)=>`<div class="list-item"><div class="icon-tile">⚡</div><div class="grow"><h4>${x}</h4><p>${["Economics","Accountancy","Computer"][i]}</p></div><span class="tag">${[43,51,37][i]}%</span></div>`).join("")}
 </div></div>
</div>
<div class="page-head" style="margin-top:28px"><div><div class="eyebrow">YOUR COURSES</div><h2 class="title" style="font-size:23px">Continue learning</h2></div><button class="btn ghost" onclick="go('courses')">View all</button></div>
<div class="grid grid-3">${courseCard("📈","Economics","Class 12","24 chapters",68)}${courseCard("🧾","Accountancy","Class 12","20 chapters",31)}${courseCard("💻","Computer","Class 12","18 chapters",18)}</div>`;
}
function stat(icon,label,value,sub,color){return `<div class="card stat"><div class="stat-top"><span>${icon} ${label}</span><span class="${color}">●</span></div><div class="stat-value">${value}</div><small class="muted">${sub}</small></div>`}
function courseCard(icon,name,grade,chapters,progress){return `<div class="card course-card" onclick="openChapter()"><div class="course-icon">${icon}</div><span class="tag">${grade}</span><h3>${name}</h3><p>${chapters} · Complete notes, questions and quizzes</p><div class="row"><small class="muted">${progress}% complete</small></div>${pct(progress)}</div>`}

function courses(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">COURSES</div><h1 class="title">Your learning library</h1><p class="subtitle">Choose a class and subject, then study chapter by chapter.</p></div><button class="btn primary" onclick="toast('Course enrollment is ready for your backend.')">+ Add course</button></div>
<div class="tabs"><button class="tab active">Class 12</button><button class="tab">Class 11</button><button class="tab">Entrance</button><button class="tab">Bachelor</button></div>
<div class="grid grid-3">${courseCard("📈","Economics","Class 12","24 chapters",68)}${courseCard("🧾","Accountancy","Class 12","20 chapters",31)}${courseCard("💻","Computer","Class 12","18 chapters",18)}${courseCard("📊","Business Studies","Class 12","15 chapters",12)}${courseCard("🌐","English","Class 12","18 chapters",26)}${courseCard("⚖️","Social Studies","Class 12","12 chapters",9)}</div>`;
}

function notes(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">NOTES</div><h1 class="title">Complete chapter notes</h1><p class="subtitle">Original, syllabus-aligned learning material with summaries and exam practice.</p></div></div>
<div class="grid grid-2">${state.notes.map(n=>`<div class="card"><div class="row"><div><span class="tag">${n.subject}</span><h3>${n.title}</h3><p class="subtitle">Full explanation · summary · definitions · questions · MCQs</p></div><span class="tag">${n.progress}%</span></div><div style="margin:17px 0">${pct(n.progress)}</div><button class="btn primary" onclick="openChapter()">Study chapter</button> <button class="btn ghost" onclick="toast('Saved to bookmarks')">☆</button></div>`).join("")}</div>`;
}

function openChapter(){
state.view="chapter";renderChapter();
}
function renderChapter(){
document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
app.innerHTML=`<div class="chapter">
<div class="chapter-nav"><button class="btn ghost" onclick="go('notes')">← Back to notes</button><button class="btn primary" onclick="toast('Chapter marked complete')">✓ Mark complete</button></div>
<div class="card"><div class="eyebrow">CLASS 12 · ECONOMICS</div><h1 class="title">Scarcity, Choice & Allocation of Resources</h1><p class="subtitle">Complete chapter learning pack · 68% completed</p><div style="margin-top:16px">${pct(68)}</div></div>
<div class="tabs" style="margin-top:16px"><button class="tab active">Full Notes</button><button class="tab">Summary</button><button class="tab">Questions</button><button class="tab">MCQs</button><button class="tab">Quick Revision</button></div>
<article class="card chapter-content">
<h2>1. Chapter Overview</h2>
<p>Human wants are unlimited while the resources available to satisfy those wants are limited and have alternative uses. This basic economic condition creates the central problem of choice. Economics studies how individuals and societies allocate scarce resources among competing uses.</p>
<div class="definition"><b>Key idea:</b> Scarcity makes choice necessary, and every choice involves an opportunity cost.</div>
<h2>2. Scarcity of Resources</h2>
<p>Scarcity means that available resources are insufficient to satisfy all human wants at the same time. Land, labour, capital and entrepreneurship are limited in relation to the wants they can satisfy. Scarcity is therefore relative to wants and available resources.</p>
<h3>Characteristics</h3><ul><li>Human wants are unlimited.</li><li>Resources are limited.</li><li>Resources have alternative uses.</li><li>Scarcity requires prioritisation and choice.</li></ul>
<h2>3. Choice</h2>
<p>Choice is the process of selecting one alternative from several available alternatives. Because resources cannot satisfy every want simultaneously, individuals, firms and governments must decide which wants to satisfy first.</p>
<h3>Example</h3><p>If a student has limited time and chooses to study Economics for two hours instead of watching a movie, the decision reflects allocation of a scarce resource: time.</p>
<h2>4. Opportunity Cost</h2>
<p>Opportunity cost is the value of the next best alternative forgone when a choice is made. It is not necessarily the total of all rejected alternatives; it is the most valuable alternative that was given up.</p>
<div class="definition"><b>Exam definition:</b> Opportunity cost is the value of the next best alternative sacrificed as a result of making a choice.</div>
<h2>5. Allocation of Resources</h2>
<p>Allocation of resources means distributing scarce resources among alternative uses. Efficient allocation attempts to direct resources toward uses that provide greater benefit while considering the needs and priorities of the economy.</p>
<h3>Basic economic questions</h3><ul><li><b>What to produce?</b> Which goods and services should be produced?</li><li><b>How to produce?</b> Which techniques and combinations of resources should be used?</li><li><b>For whom to produce?</b> How should the produced goods and services be distributed?</li></ul>
<h2>6. Problem of Choice</h2>
<p>The problem of choice arises because resources are scarce, wants are unlimited, and resources have alternative uses. A decision-maker must rank wants and select the most important uses of available resources.</p>
<h3>Causes</h3><ul><li>Unlimited wants</li><li>Limited resources</li><li>Alternative uses of resources</li><li>Different priorities</li></ul>
<h2>7. Chapter Summary</h2>
<p>Scarcity is the fundamental economic problem created by limited resources and unlimited wants. Since resources have alternative uses, people must make choices. Every choice involves an opportunity cost represented by the next best alternative forgone. Resource allocation is the process of deciding how scarce resources should be distributed among competing uses. These ideas lead to the basic questions of what, how and for whom to produce.</p>
<h2>8. Important Questions</h2>
<div class="question"><b>1. What is scarcity? Explain its major characteristics.</b><p>Write the definition first, then explain limited resources, unlimited wants and alternative uses with a suitable example.</p></div>
<div class="question"><b>2. Define opportunity cost and explain with an example.</b><p>Give the definition and show clearly which alternative is the next best alternative forgone.</p></div>
<div class="question"><b>3. Mention the causes of the problem of choice.</b><p>Unlimited wants, limited resources and alternative uses of resources are the core causes.</p></div>
<h2>9. Quick Revision</h2>
<div class="formula">Scarcity → Choice → Opportunity Cost → Resource Allocation</div>
<p><b>Remember:</b> Scarcity is the reason choice is necessary; opportunity cost is the cost of the choice in terms of the next best alternative.</p>
<h2>10. Chapter MCQ</h2>
<div id="chapterQuiz"></div>
</article></div>`;
chapterQuiz();
}
function chapterQuiz(){
const qs=[
["The fundamental economic problem arises because:","Resources are scarce and wants are unlimited",["Resources are unlimited","Wants are limited","Resources are scarce and wants are unlimited","There is no choice"]],
["Opportunity cost refers to:","The next best alternative forgone",["All rejected alternatives","Money price only","The next best alternative forgone","Total expenditure"]]
];
document.querySelector("#chapterQuiz").innerHTML=qs.map((q,idx)=>`<div class="question"><b>${idx+1}. ${q[0]}</b>${q[2].map(o=>`<button class="option" onclick="checkOption(this,'${o===q[1]}')">${o}</button>`).join("")}</div>`).join("");
}
function checkOption(el,ok){el.classList.add(ok?"correct":"wrong"); if(ok) toast("Correct!");}
function practice(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">PRACTICE</div><h1 class="title">Practice & mock exams</h1><p class="subtitle">Build confidence with chapter quizzes and timed exams.</p></div></div>
<div class="grid grid-3">${[
["⚡","Daily Quiz","10 questions · 10 min","Start quiz"],
["🧠","Economics Chapter Test","25 questions · 30 min","Start test"],
["🏆","Full Mock Exam","75 questions · 90 min","Start mock"]
].map(x=>`<div class="card"><div class="course-icon">${x[0]}</div><span class="tag">Recommended</span><h3>${x[1]}</h3><p class="subtitle">${x[2]}</p><button class="btn primary" onclick="startQuiz('${x[1]}')">${x[3]} →</button></div>`).join("")}</div>
<div class="card" style="margin-top:16px"><div class="row"><div><div class="eyebrow">RECENT</div><h2>Quiz history</h2></div><span class="tag">72% avg.</span></div><div class="list"><div class="list-item"><div class="icon-tile">✓</div><div class="grow"><h4>Economics — Chapter 1</h4><p>Yesterday · 18/25 correct</p></div><b class="green">72%</b></div><div class="list-item"><div class="icon-tile">✓</div><div class="grow"><h4>Computer — DBMS</h4><p>2 days ago · 14/20 correct</p></div><b class="green">70%</b></div></div></div>`;
}
function startQuiz(name){openModal(`<button class="modal-close btn" onclick="closeModal()">×</button><div class="eyebrow">QUIZ MODE</div><h2>${esc(name)}</h2><p class="subtitle">This demo starts a timed practice session. Connect your question database to serve your full question bank.</p><div class="card" style="margin:16px 0"><div class="row"><b>Questions</b><span>10</span></div><div class="row"><b>Time</b><span>10 minutes</span></div><div class="row"><b>Mode</b><span>Exam</span></div></div><button class="btn primary" onclick="closeModal();toast('Quiz session started')">Start now</button>`)}
function ai(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">AI STUDY</div><h1 class="title">Your study copilot</h1><p class="subtitle">Ask, practise, explain, research and prepare for exams.</p></div></div>
<div class="grid grid-4">${["Ask from Course","Ask Anything","Coding","Exam Mode"].map((x,i)=>`<button class="card" style="text-align:left;border:1px solid var(--line)" onclick="aiMode('${x}')"><div class="course-icon">${["📚","✦","⌨","🎯"][i]}</div><h3>${x}</h3><p class="subtitle">${["Answers grounded in selected course content.","General academic assistance.","Code explanations and practice.","Exam-focused questions and revision."][i]}</p></button>`).join("")}</div>
<div class="card ai-box" style="margin-top:16px"><div class="eyebrow">AI ASSISTANT</div><div class="chat" id="chat"><div class="bubble">Hi! I'm your Ankush Study Hub assistant. Select a mode above, then ask me anything about your studies.</div></div><div class="chat-input"><input id="aiInput" placeholder="Ask about your current chapter..."><button class="btn primary" onclick="sendAI()">Send</button></div></div>`;
}
function aiMode(mode){const input=document.querySelector("#aiInput");if(input){input.placeholder=`${mode}: ask your question...`;input.focus()}toast(`${mode} selected`)}
function sendAI(){const i=document.querySelector("#aiInput"),chat=document.querySelector("#chat");if(!i?.value.trim())return;chat.innerHTML+=`<div class="bubble me">${esc(i.value)}</div><div class="bubble">Demo response: connect your server-side AI endpoint to generate a grounded answer from the selected course and chapter.</div>`;i.value=""}
function music(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">STUDY MUSIC</div><h1 class="title">Focus soundtrack</h1><p class="subtitle">Keep your study session focused with playlists and Spotify-connected discovery.</p></div></div>
<div class="music-hero"><div class="card"><div class="music-cover">♫</div><div class="row" style="margin-top:14px"><div><h2 style="margin:0">Deep Focus</h2><p class="subtitle">Instrumental · 50 min</p></div><button class="btn primary" onclick="toast('Connect a permitted playback provider to enable playback')">▶ Play</button></div></div>
<div class="card"><div class="spotify"><div class="eyebrow">SPOTIFY</div><h2>Connect your music</h2><p class="subtitle">Use Spotify for account-aware playlists and music discovery. Playback must follow Spotify's current developer and commercial-use rules.</p><button class="btn primary" onclick="toast('Spotify OAuth endpoint placeholder — add credentials server-side')">Connect Spotify</button></div><div style="margin-top:15px"><h3>Study playlists</h3><div class="playlist">${["Deep Focus","Lo-fi Study","Coding Flow","Pomodoro 50/10"].map(x=>`<div class="track"><span>🎵</span><div class="grow"><b>${x}</b><small class="muted" style="display:block">Study playlist</small></div><button class="icon-btn play" onclick="toast('Open playlist through your music provider')">▶</button></div>`).join("")}</div></div></div></div>`;
}
function progress(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">ANALYTICS</div><h1 class="title">Your progress</h1><p class="subtitle">Track real learning activity, not vanity numbers.</p></div></div>
<div class="grid grid-4">${stat("📚","Chapters","8","Completed","purple")}${stat("⏱","This week","6h 42m","Study time","accent")}${stat("🎯","Accuracy","72%","Quiz average","green")}${stat("🔥","Streak","7 days","Current","purple")}</div>
<div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="eyebrow">WEEKLY STUDY TIME</div><h2>6h 42m</h2><div class="bar-chart">${[32,54,40,72,61,84,48].map((h,i)=>`<div class="bar" style="height:${h}%"></div>`).join("")}</div><div class="row muted"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div><div class="card"><div class="eyebrow">SUBJECT PROGRESS</div><div class="list">${[["Economics",68],["Accountancy",31],["Computer",18],["English",26]].map(x=>`<div><div class="row"><b>${x[0]}</b><span class="muted">${x[1]}%</span></div><div style="margin-top:8px">${pct(x[1])}</div></div>`).join("")}</div></div></div>`;
}
function bookmarks(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">SAVED</div><h1 class="title">Bookmarks</h1><p class="subtitle">Keep important topics one tap away.</p></div></div><div class="card list">${state.bookmarks.map(x=>`<div class="list-item"><div class="icon-tile">☆</div><div class="grow"><h4>${x}</h4><p>Saved resource</p></div><button class="btn ghost" onclick="toast('Opened bookmark')">Open</button></div>`).join("")}</div>`;
}
function admin(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">ADMIN CONSOLE</div><h1 class="title">Platform overview</h1><p class="subtitle">Production dashboard shell — connect these widgets to Supabase for live metrics.</p></div><span class="tag">Admin only</span></div>
<div class="admin-kpi">${stat("👥","Students","2,481","Registered","purple")}${stat("🟢","Active today","386","Real users","green")}${stat("📚","Resources","1,248","Published","accent")}${stat("💳","Premium","142","Active","purple")}</div>
<div class="grid grid-2" style="margin-top:16px"><div class="card"><div class="row"><div><div class="eyebrow">STUDENT ACTIVITY</div><h2>Weekly users</h2></div><span class="tag">Live DB</span></div><div class="bar-chart">${[44,58,51,72,66,90,78].map(h=>`<div class="bar" style="height:${h}%"></div>`).join("")}</div></div><div class="card"><div class="eyebrow">CONTENT MANAGEMENT</div><div class="list" style="margin-top:12px">${["Courses","Chapters","Questions","MCQs","Mock exams"].map((x,i)=>`<div class="list-item"><div class="icon-tile">▣</div><div class="grow"><h4>${x}</h4><p>Manage, publish and edit</p></div><button class="btn ghost" onclick="toast('Open ${x} manager')">Manage</button></div>`).join("")}</div></div></div>`;
}
function profile(){
app.innerHTML=`<div class="page-head"><div><div class="eyebrow">PROFILE</div><h1 class="title">Ankush</h1><p class="subtitle">Student account</p></div></div><div class="grid grid-2"><div class="card"><div class="row"><div class="avatar" style="width:70px;height:70px;font-size:25px">A</div><div class="grow"><h2 style="margin:0">Ankush</h2><p class="subtitle">Class 12 · Management</p></div><button class="btn ghost">Edit</button></div></div><div class="card"><div class="eyebrow">PREFERENCES</div><div class="list" style="margin-top:12px"><div class="list-item"><div class="grow"><h4>Theme</h4><p>Switch between dark and light</p></div><button class="btn" onclick="toggleTheme()">Toggle</button></div><div class="list-item"><div class="grow"><h4>Notifications</h4><p>Study reminders and announcements</p></div><span class="tag">On</span></div></div></div></div>`;
}
function go(v){state.view=v;render();window.scrollTo({top:0,behavior:"smooth"})}
function openModal(html){document.querySelector("#modalContent").innerHTML=html;document.querySelector("#modal").classList.add("open")}
function closeModal(){document.querySelector("#modal").classList.remove("open")}
function toast(msg){let t=document.createElement("div");t.textContent=msg;t.style="position:fixed;right:18px;bottom:84px;z-index:80;background:#141b2c;border:1px solid #313c55;color:#fff;padding:12px 15px;border-radius:11px;box-shadow:0 15px 40px #0008";document.body.appendChild(t);setTimeout(()=>t.remove(),2300)}
function toggleTheme(){state.theme=state.theme==="dark"?"light":"dark";document.body.classList.toggle("light",state.theme==="light");localStorage.setItem("ash-theme",state.theme)}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.view)));
document.querySelector("#themeBtn").onclick=toggleTheme;
document.querySelector("#menuBtn").onclick=()=>document.querySelector("#sidebar").classList.toggle("open");
document.querySelector("#profileBtn").onclick=()=>go("profile");
document.querySelector("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.value.trim()){toast("Search endpoint ready — connect full-text search to Supabase");}});
document.querySelector("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
render();