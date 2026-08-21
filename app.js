const SUBJECTS={"11":[{"title":"Physics","stream":"Science","icon":"⚛","desc":"Mechanics, heat, optics, electricity and modern physics.","chapters":["Physical Quantities & Measurement","Vectors","Kinematics","Dynamics","Work, Energy & Power","Circular Motion","Gravitation","Elasticity","Heat & Temperature","Thermal Expansion","Quantity of Heat","Rate of Heat Flow","Ideal Gas","Reflection at Curved Mirrors","Refraction","Prism","Lenses","Dispersion","Electromagnetic Waves","Electric Circuits","Thermoelectricity"]},{"title":"Chemistry","stream":"Science","icon":"🧪","desc":"Atomic structure, bonding, states of matter, reactions and organic foundations.","chapters":["Foundation & Stoichiometry","Atomic Structure","Periodic Classification","Chemical Bonding","Oxidation & Reduction","States of Matter","Gases","Liquid & Solutions","Chemical Equilibrium","Acids, Bases & Salts","Organic Chemistry Basics","Hydrocarbons","Environmental Chemistry"]},{"title":"Biology","stream":"Science","icon":"🧬","desc":"Cell biology, diversity, plant and animal biology and physiology.","chapters":["Biomolecules","Cell Biology","Cell Division","Classification of Living Organisms","Plant Anatomy","Plant Physiology","Animal Tissue","Earthworm","Frog","Human Biology & Health","Genetics Basics","Ecology"]},{"title":"Mathematics","stream":"Science","icon":"∑","desc":"Algebra, trigonometry, coordinate geometry, calculus, vectors and statistics.","chapters":["Sets","Functions","Logic & Mathematical Reasoning","Sequence & Series","Quadratic Equations","Complex Numbers","Matrices & Determinants","Permutation & Combination","Binomial Theorem","Coordinate Geometry","Trigonometry","Limits & Continuity","Derivatives","Vectors","Statistics","Probability"]},{"title":"Computer Science","stream":"Science","icon":"💻","desc":"Programming, data representation, hardware, databases and web foundations.","chapters":["Computer System","Number System & Boolean Logic","Software & Operating System","Programming Fundamentals","C Programming","Control Statements","Functions","Arrays & Strings","Structures","Files","Database Management System","SQL","Web Technology"]},{"title":"English","stream":"Common","icon":"A","desc":"Reading, writing, grammar, literature and communication skills.","chapters":["Reading Comprehension","Writing Skills","Grammar & Vocabulary","Literary Texts","Essays & Articles","Reports & Letters","Critical Reading"]},{"title":"Nepali","stream":"Common","icon":"न","desc":"भाषा, व्याकरण, साहित्य, लेखन र पठन सीप।","chapters":["भाषिक संरचना","व्याकरण","निबन्ध लेखन","पठन बोध","कथा तथा गद्य","कविता","नाटक/संवाद","सिर्जनात्मक लेखन"]},{"title":"Social Studies & Life Skills","stream":"Common","icon":"🌏","desc":"Social studies, life skills, civic awareness and practical decision making.","chapters":["Society & Socialisation","Family, Community & Social Institutions","Culture & Diversity","Geography & Environment","History & Heritage","Governance & Citizenship","Economy & Development","Life Skills","Research & Presentation"]},{"title":"Accountancy","stream":"Management","icon":"📒","desc":"Accounting fundamentals, journal, ledger, financial statements and business records.","chapters":["Introduction to Accounting","Accounting Equation","Double Entry System","Journal & Ledger","Trial Balance","Cash Book","Bank Reconciliation","Depreciation","Bills of Exchange","Final Accounts","Rectification of Errors","Company & Partnership Basics"]},{"title":"Economics","stream":"Management","icon":"📈","desc":"Basic microeconomics, macroeconomics, Nepalese economy and quantitative tools.","chapters":["Basic Concepts of Economics","Demand, Supply & Market","Elasticity","Consumer Behaviour","Production","Cost & Revenue","Market Structures","National Income","Money & Banking","Public Finance","International Trade","Nepalese Economy"]},{"title":"Business Studies","stream":"Management","icon":"🏢","desc":"Business concepts, forms of ownership, management, entrepreneurship and business environment.","chapters":["Nature of Business","Forms of Business Ownership","Business Environment","Entrepreneurship","Management","Planning & Organising","Staffing","Leadership & Motivation","Communication","Control","Business Finance","Marketing"]}],"12":[{"title":"Physics","stream":"Science","icon":"⚛","desc":"Advanced mechanics, waves, optics, electricity, magnetism and modern physics.","chapters":["Rotational Dynamics","Periodic Motion","Fluid Mechanics","First Law of Thermodynamics","Second Law of Thermodynamics","Waves","Mechanical Waves","Sound & Acoustics","Stationary Waves","Interference","Diffraction","Polarisation","Electrical Circuits","Magnetic Field","Current Electricity","Electromagnetic Induction","Alternating Current","Electrons","Photons","Semiconductors"]},{"title":"Chemistry","stream":"Science","icon":"🧪","desc":"Physical, inorganic and organic chemistry with quantitative and analytical concepts.","chapters":["Volumetric Analysis","Ionic Equilibrium","Chemical Kinetics","Thermodynamics","Electrochemistry","Solutions","Transition Elements","Coordination Compounds","Haloalkanes","Alcohols","Phenols & Ethers","Aldehydes & Ketones","Carboxylic Acids","Nitrogen Compounds","Polymers","Chemistry in Everyday Life"]},{"title":"Biology","stream":"Science","icon":"🧬","desc":"Genetics, physiology, reproduction, evolution, ecology and biotechnology.","chapters":["Genetics","Molecular Biology","Biotechnology","Reproduction","Human Development","Human Physiology","Plant Physiology","Animal Diversity","Evolution","Ecology","Environment & Conservation","Applied Biology"]},{"title":"Mathematics","stream":"Science","icon":"∑","desc":"Advanced algebra, calculus, vectors, coordinate geometry, statistics and probability.","chapters":["Algebra","Matrices & Systems","Complex Numbers","Sequences & Series","Analytical Geometry","Vectors","Limits & Continuity","Differentiation","Applications of Derivatives","Integration","Differential Equations","Statistics","Probability","Linear Programming"]},{"title":"Computer Science","stream":"Science","icon":"💻","desc":"Object-oriented concepts, data structures, databases, networking and web/database applications.","chapters":["Data Representation","Object Oriented Concepts","Data Structures","C++ Programming","Searching & Sorting","File Processing","Database Concepts","SQL & Queries","DBMS Design","Computer Networks","Internet & Web Technology","Cyber Security Basics"]},{"title":"English","stream":"Common","icon":"A","desc":"Advanced reading, writing, literature, grammar and critical communication.","chapters":["Critical Reading","Literary Analysis","Essay Writing","Report Writing","Professional Writing","Grammar & Editing","Research & Presentation"]},{"title":"Nepali","stream":"Common","icon":"न","desc":"उन्नत गद्य, पद्य, निबन्ध, व्याकरण र सिर्जनात्मक लेखन।","chapters":["गद्य","पद्य","निबन्ध","व्याकरण","पठन तथा विश्लेषण","सिर्जनात्मक लेखन","व्यावहारिक लेखन"]},{"title":"Social Studies & Life Skills","stream":"Common","icon":"🌏","desc":"Social studies, civic life, development, research and practical life skills.","chapters":["Social Change & Development","Democracy & Governance","Economy & Development","Geography & Population","Nepal in Global Context","Social Inclusion","Life Skills & Wellbeing","Research, Project & Presentation"]},{"title":"Accountancy","stream":"Management","icon":"📒","desc":"Company, partnership, financial analysis, costing and advanced accounting.","chapters":["Company Accounting","Share & Debenture","Financial Statements","Cash Flow","Ratio Analysis","Accounting for Partnership","Cost Accounting Basics","Budgeting","Accounting for Non-profit Entities","Computerised Accounting"]},{"title":"Economics","stream":"Management","icon":"📈","desc":"Macroeconomics, monetary policy, development, international economics and Nepal.","chapters":["National Income Accounting","Money & Banking","Inflation","Monetary & Fiscal Policy","Economic Growth & Development","Public Finance","International Trade","Foreign Exchange","Balance of Payments","Poverty & Unemployment","Nepalese Economy"]},{"title":"Business Studies","stream":"Management","icon":"🏢","desc":"Business environment, functions of management, marketing, finance and entrepreneurship.","chapters":["Nature & Scope of Management","Planning","Organising","Staffing","Directing","Controlling","Marketing Management","Financial Management","Entrepreneurship Development","Business Ethics","International Business"]}]};
let STUDY=null,currentSubject=null,currentChapter=null,qIndex=0,qSel=null,qScore=[];
const STORAGE="edunexa_v4_state";
const state=JSON.parse(localStorage.getItem(STORAGE)||"null")||{activity:{},results:[],notes:[],done:0,theme:"dark"};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const save=()=>localStorage.setItem(STORAGE,JSON.stringify(state));
const dateKey=(d=new Date())=>d.toISOString().slice(0,10);
const mark=()=>{state.activity[dateKey()]=(state.activity[dateKey()]||0)+1;save()};
const streak=()=>{let n=0,d=new Date();while(state.activity[dateKey(d)]){n++;d.setDate(d.getDate()-1)}return n};
const avg=()=>state.results.length?Math.round(state.results.reduce((a,b)=>a+b.score,0)/state.results.length):0;
const allSubjects=()=>Object.entries(SUBJECTS).flatMap(([grade,ss])=>ss.map(s=>({...s,grade})));
const allChapters=()=>allSubjects().flatMap(s=>s.chapters.map((chapter,index)=>({...s,chapter,index})));
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),1800)}
function renderStats(){$("#subjects").textContent=allSubjects().length;$("#chapters").textContent=allChapters().length;$("#streak").textContent=streak();$("#avg").textContent=avg()+"%"}
function renderLibrary(){
 const g=$("#grade").value,s=$("#stream").value,q=$("#search").value.toLowerCase().trim();
 const list=allSubjects().filter(x=>(g==="all"||x.grade===g)&&(s==="all"||x.stream===s)&&(`${x.title} ${x.desc} ${x.chapters.join(" ")}`.toLowerCase().includes(q)));
 $("#subjectGrid").innerHTML=list.map(x=>`<article class="subject-card"><div class="subject-top"><div class="subject-icon">${x.icon}</div><span class="tag">Class ${x.grade}</span></div><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p><div>${x.chapters.slice(0,5).map(c=>`<span class="tag">${esc(c)}</span>`).join("")}</div><button class="primary full" data-sub="${x.grade}|${esc(x.title)}">Open chapters →</button></article>`).join("")||`<div class="panel"><h2>No match</h2><p class="muted">Try another class, stream or search term.</p></div>`;
}
function openView(v){$$(".view").forEach(x=>x.classList.add("hidden"));$("#"+v).classList.remove("hidden");$$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));$("#side").classList.remove("open");window.scrollTo(0,0);if(v==="quiz")startQuiz()}
function openSubject(key){
 const [grade,title]=key.split("|");currentSubject=allSubjects().find(x=>x.grade===grade&&x.title===title);if(!currentSubject)return;
 $("#subjectMeta").textContent=`CLASS ${grade} • ${currentSubject.stream}`;$("#subjectTitle").textContent=currentSubject.title;$("#subjectDesc").textContent=currentSubject.desc;$("#chapterCount").textContent=currentSubject.chapters.length+" chapters";
 $("#chapterList").innerHTML=currentSubject.chapters.map((c,i)=>`<article class="chapter-card"><span class="tag">Chapter ${i+1}</span><h3>${esc(c)}</h3><p>Summary • key points • answered questions</p><button class="secondary" data-ch="${i}">Study chapter →</button></article>`).join("");openView("subject");
}
async function loadStudy(){
 if(STUDY)return STUDY;
 try{const r=await fetch("study.json",{cache:"force-cache"});if(!r.ok)throw Error();STUDY=await r.json();return STUDY}
 catch(e){toast("Study pack could not load.");return null}
}
async function openChapter(i){
 currentChapter={name:currentSubject.chapters[i],index:i};$("#chMeta").textContent=`CLASS ${currentSubject.grade} • ${currentSubject.title} • CHAPTER ${i+1}`;$("#chTitle").textContent=currentChapter.name;$("#loadingStudy").classList.remove("hidden");$("#studyPack").classList.add("hidden");openView("chapter");
 const pack=await loadStudy();if(!pack)return;
 const d=pack[`${currentSubject.grade}|${currentSubject.title}|${currentChapter.name}`];if(!d)return;
 $("#chNotes").innerHTML=d.summary.map(x=>`<div class="note-line">${esc(x)}</div>`).join("");$("#chTerms").innerHTML=d.key.map(x=>`<span class="term">${esc(x)}</span>`).join("");
 $("#chQuestions").innerHTML=d.qas.map((qa,i)=>`<div class="question"><b>Q${i+1}. ${esc(qa[0])}</b><div class="answer"><b>Answer:</b> ${esc(qa[1])}</div></div>`).join("");
 $("#loadingStudy").classList.add("hidden");$("#studyPack").classList.remove("hidden");
}
function renderNotes(){$("#myNotes").innerHTML=state.notes.length?state.notes.slice().reverse().map(n=>`<article class="note-card"><span class="tag">${esc(n.subject||"General")}</span><h3>${esc(n.title)}</h3><p>${esc(n.body)}</p><small class="muted">${n.date}</small></article>`).join(""):`<div class="empty">No personal notes yet.</div>`}
function renderResults(){$("#results").innerHTML=state.results.length?state.results.slice().reverse().map(r=>`<div class="question"><b>${esc(r.topic)}</b> — ${r.score}%<small class="muted"> ${esc(r.type)} • ${r.date}</small></div>`).join(""):`<div class="empty">No results yet.</div>`}
function renderAnalytics(){
 const a=avg();$("#ring").style.setProperty("--value",a+"%");$("#ringText").textContent=a+"%";$("#scoreTitle").textContent=!state.results.length?"No data yet":a>=80?"Excellent progress":a>=60?"Good progress":"Needs more revision";$("#scoreCopy").textContent=state.results.length?`Based on ${state.results.length} recorded result(s).`:"Complete a quiz or record a result.";
 const weak={};state.results.filter(r=>r.score<60).forEach(r=>weak[r.topic]=(weak[r.topic]||0)+1);
 $("#weak").innerHTML=Object.keys(weak).length?Object.entries(weak).map(([t,n])=>`<div class="question"><b>${esc(t)}</b><small class="muted"> needs review • ${n} result(s)</small></div>`).join(""):`<div class="empty">No weak topic below 60% yet.</div>`;
}
function startQuiz(){
 const pool=allChapters(),chosen=[],used=new Set();while(chosen.length<5&&used.size<pool.length){const i=Math.floor(Math.random()*pool.length);if(!used.has(i)){used.add(i);chosen.push(pool[i])}}
 window.quizPool=chosen;qIndex=0;qSel=null;qScore=[];renderQuiz();
}
function renderQuiz(){
 const item=window.quizPool[qIndex];if(!item)return;const q=`Which approach is most useful when revising ${item.chapter}?`;const opts=["Memorise the chapter title only","Understand the concept, review key points, then practise questions","Skip examples and practise only on exam morning","Read unrelated topics instead"];
 $("#qcount").textContent=`${qIndex+1} / ${window.quizPool.length}`;$("#quizbox").innerHTML=`<span class="eyebrow">QUESTION ${qIndex+1}</span><h2>${esc(q)}</h2>${opts.map((o,i)=>`<button class="qopt ${qSel===i?"sel":""}" data-opt="${i}">${esc(o)}</button>`).join("")}<button class="primary full" id="next">${qIndex===4?"Finish quiz":"Next →"}</button>`;
}
function addAi(text,who="bot"){const box=$("#aiMessages"),d=document.createElement("div");d.className="ai-msg "+who;d.innerHTML=who==="bot"?text:esc(text);box.appendChild(d);box.scrollTop=box.scrollHeight}

function normalizeText(s){return s.toLowerCase().normalize("NFKD").replace(/[^\w\s]/g," ").replace(/\s+/g," ").trim()}
function findChapterSmart(query){
 const q=normalizeText(query);
 const chapters=allChapters();
 let exact=chapters.find(x=>q.includes(normalizeText(x.chapter)));
 if(exact)return exact;
 let best=null,bestScore=0;
 for(const x of chapters){
   const words=normalizeText(x.chapter).split(" ").filter(w=>w.length>2);
   const score=words.reduce((n,w)=>n+(q.includes(w)?1:0),0)/Math.max(words.length,1);
   if(score>bestScore){bestScore=score;best=x}
 }
 return bestScore>=0.45?best:null;
}
function aiChapterList(query){
 const q=normalizeText(query);
 const grade=q.match(/\b(11|12)\b/)?.[1];
 const subs=allSubjects().filter(s=>!grade||s.grade===grade);
 return subs.flatMap(s=>s.chapters.slice(0,0).map(()=>null)).length ? "" : subs.map(s=>`<b>Class ${s.grade} • ${esc(s.title)}</b><br>${s.chapters.map((c,i)=>`${i+1}. ${esc(c)}`).join(" • ")}`).join("<br><br>");
}
function randomStudyQuestions(pack,count=5){
 const pool=[];
 for(const [key,d] of Object.entries(pack||{})){
   (d.qas||[]).forEach(qa=>pool.push({key,qa}));
 }
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
 return pool.slice(0,count);
}
async function aiReply(input){
 const raw=input.trim();if(!raw)return;
 addAi(raw,"user");
 const q=normalizeText(raw), pack=await loadStudy();
 if(!pack){addAi("The study pack is unavailable right now. Please try again.");return}

 if(/\b(hello|hi|hey|namaste)\b/.test(q)){
   addAi("<b>Nexa AI V5</b><br>I can search all chapters, explain topics, show summaries, key points, answered questions, create random practice questions, and open chapters.");
   return;
 }
 if(/\b(list|show|all)\b.*\b(chapter|chapters|subjects|subject)\b/.test(q) || /\bchapters of\b/.test(q)){
   addAi(aiChapterList(q)); return;
 }
 if(/\b(random|mixed)\b.*\b(question|questions|quiz|practice)\b/.test(q)){
   const qs=randomStudyQuestions(pack,5);
   addAi("<b>Random practice set</b><br><br>"+qs.map((x,i)=>`<b>Q${i+1}.</b> ${esc(x.qa[0])}<br><span class="muted"><b>Answer:</b> ${esc(x.qa[1])}</span>`).join("<br><br>"));
   return;
 }

 let match=findChapterSmart(q);
 if(!match){
   const sub=allSubjects().find(x=>q.includes(normalizeText(x.title)));
   if(sub) match={grade:sub.grade,title:sub.title,chapter:sub.chapters[0],index:0};
 }
 if(match){
   const d=pack[`${match.grade}|${match.title}|${match.chapter}`];
   if(d){
     if(/\b(open|study|go to)\b/.test(q)){
       openSubject(`${match.grade}|${match.title}`);
       setTimeout(()=>openChapter(match.index),80);
       addAi(`Opening <b>${esc(match.title)} → ${esc(match.chapter)}</b>.`);
       return;
     }
     if(/\b(summary|summar|note|notes|revise|revision|explain)\b/.test(q)){
       addAi(`<b>${esc(match.title)} • ${esc(match.chapter)}</b><br><br>${d.summary.map(esc).join("<br><br>")}`);
       return;
     }
     if(/\b(question|answer|practice|important|mcq)\b/.test(q)){
       addAi(`<b>Questions & answers — ${esc(match.chapter)}</b><br><br>${d.qas.map((x,i)=>`<b>Q${i+1}.</b> ${esc(x[0])}<br><b>Answer:</b> ${esc(x[1])}`).join("<br><br>")}`);
       return;
     }
     if(/\b(key|point|keyword|formula)\b/.test(q)){
       addAi(`<b>Key points — ${esc(match.chapter)}</b><br><br>• ${d.key.map(esc).join("<br>• ")}`);
       return;
     }
     addAi(`<b>${esc(match.chapter)}</b><br><br>${esc(d.summary[0])}<br><br><b>Key points:</b> ${d.key.slice(0,4).map(esc).join(" • ")}<br><br>Ask for <b>summary</b>, <b>questions</b>, <b>key points</b>, or <b>open</b>.`);
     return;
   }
 }
 addAi("I can help with any EduNexa chapter. Try <b>“Summarize Kinematics”</b>, <b>“Questions from Chemical Bonding”</b>, <b>“Open SQL”</b>, or <b>“Give me random questions”</b>.");
}

document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-view]");if(nav){openView(nav.dataset.view);return}
 const sg=e.target.closest("[data-grade]");if(sg){openView("library");$("#grade").value=sg.dataset.grade;renderLibrary();return}
 const s=e.target.closest("[data-sub]");if(s){openSubject(s.dataset.sub);return}
 const ch=e.target.closest("[data-ch]");if(ch){openChapter(Number(ch.dataset.ch));return}
 const opt=e.target.closest("[data-opt]");if(opt){qSel=Number(opt.dataset.opt);renderQuiz();return}
 const ai=e.target.closest("[data-ai]");if(ai){aiReply(ai.dataset.ai);return}
 if(e.target.id==="next"){if(qSel===null){toast("Choose an answer first.");return}qScore.push(qSel===1);if(qIndex<4){qIndex++;qSel=null;renderQuiz()}else{const score=Math.round(qScore.filter(Boolean).length/5*100);state.results.push({topic:"V5 Revision Quiz",score,type:"Quiz",date:dateKey()});mark();save();renderStats();renderResults();renderAnalytics();$("#quizbox").innerHTML=`<span class="eyebrow">QUIZ COMPLETE</span><h2>${score}%</h2><p class="muted">Your result was saved locally.</p><button class="primary" data-view="analytics">View analytics →</button>`;toast("Quiz result saved.")}}
 if(e.target.id==="markDone"){state.done++;mark();save();renderStats();toast("Chapter marked as studied.")}
 if(e.target.id==="menu")$("#side").classList.toggle("open");
 if(e.target.id==="theme"){state.theme=state.theme==="light"?"dark":"light";save();document.documentElement.classList.toggle("light",state.theme==="light")}
 if(e.target.id==="aiFab"){$("#aiPanel").classList.add("open");$("#aiInput").focus()}
 if(e.target.id==="aiClose")$("#aiPanel").classList.remove("open")
 if(e.target.id==="askAiHome"){$("#aiPanel").classList.add("open");$("#aiInput").focus()}
});
$("#grade").addEventListener("change",renderLibrary);$("#stream").addEventListener("change",renderLibrary);$("#search").addEventListener("input",renderLibrary);
$("#backSubject").addEventListener("click",()=>openView("subject"));
$("#noteForm").addEventListener("submit",e=>{e.preventDefault();state.notes.push({title:nt.value,subject:ns.value,body:nb.value,date:dateKey()});mark();save();e.target.reset();renderNotes();toast("Note saved.")});
$("#resultForm").addEventListener("submit",e=>{e.preventDefault();const score=Number(rs.value);if(score<0||score>100)return;state.results.push({topic:rt.value,score,type:rtype.value,date:dateKey()});mark();save();e.target.reset();renderStats();renderResults();renderAnalytics();toast("Result saved.")});
$("#aiForm").addEventListener("submit",e=>{e.preventDefault();const v=$("#aiInput").value;$("#aiInput").value="";aiReply(v)});
document.documentElement.classList.toggle("light",state.theme==="light");
renderStats();renderLibrary();renderNotes();renderResults();renderAnalytics();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));

/* V9 Full Chapter Study API — every chapter exposes topics, notes, checklist and answers */
window.MishraAnkushStudy = {
  getChapter: function(key){
    return window.STUDY_DATA && window.STUDY_DATA[key] ? window.STUDY_DATA[key] : null;
  },
  search: function(query){
    const q=(query||'').toLowerCase();
    const data=window.STUDY_DATA||{};
    return Object.entries(data).filter(([k,v]) =>
      k.toLowerCase().includes(q) ||
      (v.topics||[]).some(x=>x.toLowerCase().includes(q)) ||
      (v.notes||[]).some(x=>x.toLowerCase().includes(q))
    );
  }
};
