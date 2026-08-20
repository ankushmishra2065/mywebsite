const DATA={
11:[
['Physics','Science','⚛','Mechanics, heat, optics, electricity and modern physics.',['Physical Quantities & Measurement','Vectors','Kinematics','Dynamics','Work, Energy & Power','Circular Motion','Gravitation','Elasticity','Heat & Temperature','Thermal Expansion','Quantity of Heat','Rate of Heat Flow','Ideal Gas','Reflection at Curved Mirrors','Refraction','Prism','Lenses','Dispersion','Electromagnetic Waves','Electric Circuits','Thermoelectricity']],
['Chemistry','Science','🧪','Atomic structure, bonding, states of matter, reactions and organic foundations.',['Foundation & Stoichiometry','Atomic Structure','Periodic Classification','Chemical Bonding','Oxidation & Reduction','States of Matter','Gases','Liquid & Solutions','Chemical Equilibrium','Acids, Bases & Salts','Organic Chemistry Basics','Hydrocarbons','Environmental Chemistry']],
['Biology','Science','🧬','Cell biology, diversity, plant and animal biology and physiology.',['Biomolecules','Cell Biology','Cell Division','Classification of Living Organisms','Plant Anatomy','Plant Physiology','Animal Tissue','Earthworm','Frog','Human Biology & Health','Genetics Basics','Ecology']],
['Mathematics','Science','∑','Algebra, trigonometry, coordinate geometry, calculus, vectors and statistics.',['Sets','Functions','Logic & Mathematical Reasoning','Sequence & Series','Quadratic Equations','Complex Numbers','Matrices & Determinants','Permutation & Combination','Binomial Theorem','Coordinate Geometry','Trigonometry','Limits & Continuity','Derivatives','Vectors','Statistics','Probability']],
['Computer Science','Science','💻','Programming, data representation, hardware, databases and web foundations.',['Computer System','Number System & Boolean Logic','Software & Operating System','Programming Fundamentals','C Programming','Control Statements','Functions','Arrays & Strings','Structures','Files','Database Management System','SQL','Web Technology']],
['English','Common','A','Reading, writing, grammar, literature and communication skills.',['Reading Comprehension','Writing Skills','Grammar & Vocabulary','Literary Texts','Essays & Articles','Reports & Letters','Critical Reading']],
['Nepali','Common','न','भाषा, व्याकरण, साहित्य, लेखन र पठन सीप।',['भाषिक संरचना','व्याकरण','निबन्ध लेखन','पठन बोध','कथा तथा गद्य','कविता','नाटक/संवाद','सिर्जनात्मक लेखन']],
['Social Studies & Life Skills','Common','🌏','Social studies, life skills, civic awareness and practical decision making.',['Society & Socialisation','Family, Community & Social Institutions','Culture & Diversity','Geography & Environment','History & Heritage','Governance & Citizenship','Economy & Development','Life Skills','Research & Presentation']],
['Accountancy','Management','📒','Accounting fundamentals, journal, ledger, financial statements and business records.',['Introduction to Accounting','Accounting Equation','Double Entry System','Journal & Ledger','Trial Balance','Cash Book','Bank Reconciliation','Depreciation','Bills of Exchange','Final Accounts','Rectification of Errors','Company & Partnership Basics']],
['Economics','Management','📈','Basic microeconomics, macroeconomics, Nepalese economy and quantitative tools.',['Basic Concepts of Economics','Demand, Supply & Market','Elasticity','Consumer Behaviour','Production','Cost & Revenue','Market Structures','National Income','Money & Banking','Public Finance','International Trade','Nepalese Economy']],
['Business Studies','Management','🏢','Business concepts, forms of ownership, management, entrepreneurship and business environment.',['Nature of Business','Forms of Business Ownership','Business Environment','Entrepreneurship','Management','Planning & Organising','Staffing','Leadership & Motivation','Communication','Control','Business Finance','Marketing']],
],
12:[
['Physics','Science','⚛','Advanced mechanics, waves, optics, electricity, magnetism and modern physics.',['Rotational Dynamics','Periodic Motion','Fluid Mechanics','First Law of Thermodynamics','Second Law of Thermodynamics','Waves','Mechanical Waves','Sound & Acoustics','Stationary Waves','Interference','Diffraction','Polarisation','Electrical Circuits','Magnetic Field','Current Electricity','Electromagnetic Induction','Alternating Current','Electrons','Photons','Semiconductors']],
['Chemistry','Science','🧪','Physical, inorganic and organic chemistry with quantitative and analytical concepts.',['Volumetric Analysis','Ionic Equilibrium','Chemical Kinetics','Thermodynamics','Electrochemistry','Solutions','Transition Elements','Coordination Compounds','Haloalkanes','Alcohols','Phenols & Ethers','Aldehydes & Ketones','Carboxylic Acids','Nitrogen Compounds','Polymers','Chemistry in Everyday Life']],
['Biology','Science','🧬','Genetics, physiology, reproduction, evolution, ecology and biotechnology.',['Genetics','Molecular Biology','Biotechnology','Reproduction','Human Development','Human Physiology','Plant Physiology','Animal Diversity','Evolution','Ecology','Environment & Conservation','Applied Biology']],
['Mathematics','Science','∑','Advanced algebra, calculus, vectors, coordinate geometry, statistics and probability.',['Algebra','Matrices & Systems','Complex Numbers','Sequences & Series','Analytical Geometry','Vectors','Limits & Continuity','Differentiation','Applications of Derivatives','Integration','Differential Equations','Statistics','Probability','Linear Programming']],
['Computer Science','Science','💻','Object-oriented concepts, data structures, databases, networking and web/database applications.',['Data Representation','Object Oriented Concepts','Data Structures','C++ Programming','Searching & Sorting','File Processing','Database Concepts','SQL & Queries','DBMS Design','Computer Networks','Internet & Web Technology','Cyber Security Basics']],
['English','Common','A','Advanced reading, writing, literature, grammar and critical communication.',['Critical Reading','Literary Analysis','Essay Writing','Report Writing','Professional Writing','Grammar & Editing','Research & Presentation']],
['Nepali','Common','न','उन्नत गद्य, पद्य, निबन्ध, व्याकरण र सिर्जनात्मक लेखन।',['गद्य','पद्य','निबन्ध','व्याकरण','पठन तथा विश्लेषण','सिर्जनात्मक लेखन','व्यावहारिक लेखन']],
['Social Studies & Life Skills','Common','🌏','Social studies, civic life, development, research and practical life skills.',['Social Change & Development','Democracy & Governance','Economy & Development','Geography & Population','Nepal in Global Context','Social Inclusion','Life Skills & Wellbeing','Research, Project & Presentation']],
['Accountancy','Management','📒','Company, partnership, financial analysis, costing and advanced accounting.',['Company Accounting','Share & Debenture','Financial Statements','Cash Flow','Ratio Analysis','Accounting for Partnership','Cost Accounting Basics','Budgeting','Accounting for Non-profit Entities','Computerised Accounting']],
['Economics','Management','📈','Macroeconomics, monetary policy, development, international economics and Nepal.',['National Income Accounting','Money & Banking','Inflation','Monetary & Fiscal Policy','Economic Growth & Development','Public Finance','International Trade','Foreign Exchange','Balance of Payments','Poverty & Unemployment','Nepalese Economy']],
['Business Studies','Management','🏢','Business environment, functions of management, marketing, finance and entrepreneurship.',['Nature & Scope of Management','Planning','Organising','Staffing','Directing','Controlling','Marketing Management','Financial Management','Entrepreneurship Development','Business Ethics','International Business']],
]};

const extraNotes={
'Dynamics':['Force changes the state of motion. Newton’s second law links net force and acceleration through F = ma. Always choose a system and draw a free-body diagram before solving.','Net force','Inertia','Momentum','Free-body diagram'],
'SQL':['SELECT retrieves rows or expressions from tables. A WHERE clause filters rows, ORDER BY sorts output, and JOIN combines related tables. Use clear conditions and aliases when queries grow.','SELECT','WHERE','JOIN','ORDER BY'],
'Chemical Bonding':['Ionic bonding involves electrostatic attraction after electron transfer; covalent bonding involves shared electron pairs. Molecular shape is affected by electron-pair repulsion and lone pairs.','Ionic bond','Covalent bond','Valence electrons','Electronegativity'],
'Cell Biology':['The cell is the basic structural and functional unit of life. Prokaryotic cells lack a membrane-bound nucleus, while eukaryotic cells contain a nucleus and membrane-bound organelles.','Organelle','Nucleus','Prokaryote','Eukaryote'],
'Demand, Supply & Market':['Demand describes the quantity buyers are willing and able to purchase at different prices, while supply describes the quantity sellers are willing to offer. Market equilibrium occurs where demand and supply intersect.','Demand','Supply','Equilibrium price','Market'],
'Final Accounts':['Final accounts summarize financial performance and position. Trading results help determine gross profit/loss, profit and loss statements determine net profit/loss, and the balance sheet reports assets, liabilities and capital.','Gross profit','Net profit','Assets','Liabilities'],
'Planning':['Planning sets objectives and decides actions, resources and timelines before work begins. Good plans are specific, realistic, measurable and aligned with organizational goals.','Objective','Strategy','Policy','Programme']};

const QUESTIONS={
'Dynamics':['State Newton’s laws of motion and explain one practical example.','Derive the relation between force, mass and acceleration.','Solve a numerical problem using a free-body diagram.'],
'SQL':['Write a query to select records satisfying two conditions.','Differentiate WHERE and ORDER BY with examples.','Explain an INNER JOIN and give a suitable use case.'],
'Chemical Bonding':['Differentiate ionic and covalent bonding.','Explain factors affecting molecular shape.','What is electronegativity and why does it matter in bond polarity?'],
'Cell Biology':['Compare prokaryotic and eukaryotic cells.','Explain the functions of major cell organelles.','Describe the fluid mosaic model.'],
'Demand, Supply & Market':['Define demand and explain its determinants.','Explain market equilibrium with a diagram.','Differentiate movement along demand curve and shift in demand.'],
'Final Accounts':['What are final accounts? Explain their components.','Differentiate gross profit and net profit.','Prepare a simple statement of financial position from given data.'],
'Planning':['Define planning and explain its importance.','Differentiate strategic and operational planning.','Explain the major steps of planning.']};

const state=JSON.parse(localStorage.getItem('edunexa_curr_v3')||'null')||{activity:{},results:[],notes:[],done:0,theme:'dark'};

let currentSubject=null,currentChapter=null,qIndex=0,qSel=null,qScore=[];

function save(){
  localStorage.setItem('edunexa_curr_v3',JSON.stringify(state))
}

function dateKey(d=new Date()){
  return d.toISOString().slice(0,10)
}

function mark(){
  state.activity[dateKey()]=(state.activity[dateKey()]||0)+1;
  save()
}

function streak(){
  let n=0,d=new Date();
  while(state.activity[dateKey(d)]){
    n++;
    d.setDate(d.getDate()-1)
  }
  return n
}

function avg(){
  return state.results.length
    ? Math.round(state.results.reduce((a,b)=>a+b.score,0)/state.results.length)
    : 0
}

function esc(v){
  return String(v).replace(/[&<>"']/g,c=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#039;'
  }[c]))
}

function toast(m){
  const t=document.querySelector('#toast');
  t.textContent=m;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t=setTimeout(()=>t.classList.remove('show'),2100)
}

function allSubjects(){
  return Object.entries(DATA).flatMap(([g,ss])=>
    ss.map(s=>({
      grade:g,
      stream:s[1],
      icon:s[2],
      title:s[0],
      desc:s[3],
      chapters:s[4]
    }))
  )
}

function renderStats(){
  document.querySelector('#subjects').textContent=allSubjects().length;
  document.querySelector('#chapters').textContent=allSubjects().reduce((a,s)=>a+s.chapters.length,0);
  document.querySelector('#streak').textContent=streak();
  document.querySelector('#streakBig').textContent=streak()+' day'+(streak()===1?'':'s');
  document.querySelector('#avg').textContent=avg()+'%'
}

function renderLibrary(){
  let g=document.querySelector('#grade').value,
      s=document.querySelector('#stream').value,
      q=document.querySelector('#search').value.toLowerCase().trim();

  let list=allSubjects().filter(x=>
    (g==='all'||x.grade===g)&&
    (s==='all'||x.stream===s)&&
    (`${x.title} ${x.desc} ${x.chapters.join(' ')}`.toLowerCase().includes(q))
  );

  document.querySelector('#subjectGrid').innerHTML=list.map(x=>`
    <article class="subject-card">
      <div class="subject-top">
        <div class="subject-icon">${x.icon}</div>
        <span class="tag">Class ${x.grade}</span>
      </div>
      <h3>${x.title}</h3>
      <p>${x.desc}</p>
      <div>
        ${x.chapters.slice(0,4).map(c=>`<span class="tag">${esc(c)}</span>`).join(' ')}
      </div>
      <button class="primary full" data-sub="${x.grade}|${esc(x.title)}">Open chapters →</button>
    </article>
  `).join('')||`
    <div class="panel">
      <h2>No match</h2>
      <p class="muted">Try another class, stream or search term.</p>
    </div>`
}

function openSubject(key){
  const [grade,title]=key.split('|');

  currentSubject=allSubjects().find(x=>
    x.grade===grade&&x.title===title
  );

  if(!currentSubject)return;

  document.querySelector('#subjectMeta').textContent=
    `CLASS ${grade} • ${currentSubject.stream}`;

  document.querySelector('#subjectTitle').textContent=
    currentSubject.title;

  document.querySelector('#subjectDesc').textContent=
    currentSubject.desc;

  document.querySelector('#chapterCount').textContent=
    currentSubject.chapters.length+' chapters';

  document.querySelector('#chapterList').innerHTML=
    currentSubject.chapters.map((c,i)=>`
      <article class="chapter-card">
        <span class="tag">Chapter ${i+1}</span>
        <h3>${esc(c)}</h3>
        <p>Quick notes, key terms and important questions.</p>
        <button class="secondary" data-ch="${i}">
          Study chapter →
        </button>
      </article>
    `).join('');

  openView('subject')
}

function openChapter(i){
  currentChapter={
    name:currentSubject.chapters[i],
    index:i
  };

  document.querySelector('#chMeta').textContent=
    `CLASS ${currentSubject.grade} • ${currentSubject.title} • CHAPTER ${i+1}`;

  document.querySelector('#chTitle').textContent=
    currentChapter.name;

  const note=extraNotes[currentChapter.name]||
    `${currentChapter.name} is a curriculum study unit. Use the quick points below as an original revision framework, then cross-check detailed definitions, derivations and examples against your prescribed CDC textbook and teacher materials.`;

  document.querySelector('#chNotes').innerHTML=`
    <div class="note-line">${esc(note)}</div>
    <div class="note-line">
      Focus on definitions, core principles, worked examples,
      diagrams/formulas where applicable, and practice questions.
    </div>
    <div class="note-line">
      For exam preparation, revise the concept first, then solve
      at least one short-answer and one application question.
    </div>`;

  const terms=extraNotes[currentChapter.name]
    ?extraNotes[currentChapter.name].slice(2)
    :['Definition','Principle','Application','Revision'];

  document.querySelector('#chTerms').innerHTML=
    terms.map(t=>`<span class="term">${esc(t)}</span>`).join('');

  const qs=QUESTIONS[currentChapter.name]||
    [
      `Define ${currentChapter.name} and state its main features.`,
      `Explain the most important concept from ${currentChapter.name} with a suitable example.`,
      `Write a long-answer response on ${currentChapter.name} with clear points, diagram/calculation where relevant.`
    ];

  document.querySelector('#chQuestions').innerHTML=
    qs.map((q,i)=>`
      <div class="question">
        <b>Q${i+1}.</b> ${esc(q)}
      </div>
    `).join('');

  openView('chapter')
}

function renderNotes(){
  document.querySelector('#myNotes').innerHTML=
    state.notes.length
      ?state.notes.slice().reverse().map(n=>`
        <article class="note-card">
          <span class="tag">${esc(n.subject||'General')}</span>
          <h3>${esc(n.title)}</h3>
          <p>${esc(n.body)}</p>
          <small class="muted">${n.date}</small>
        </article>
      `).join('')
      :'<div class="empty">No personal notes yet.</div>'
}

function renderResults(){
  document.querySelector('#results').innerHTML=
    state.results.length
      ?state.results.slice().reverse().map(r=>`
        <div class="question">
          <b>${esc(r.topic)}</b> — ${r.score}%
          <small class="muted">
            ${esc(r.type)} • ${r.date}
          </small>
        </div>
      `).join('')
      :'<div class="empty">No results yet.</div>'
}

function renderAnalytics(){
  const a=avg();

  document.querySelector('#ring').style.setProperty('--value',a+'%');
  document.querySelector('#ringText').textContent=a+'%';

  document.querySelector('#scoreTitle').textContent=
    !state.results.length
      ?'No data yet'
      :a>=80
        ?'Excellent progress'
        :a>=60
          ?'Good progress'
          :'Needs more revision';

  document.querySelector('#scoreCopy').textContent=
    state.results.length
      ?`Based on ${state.results.length} real recorded result(s).`
      :'Complete a quiz or record a result to start.';

  const weak={};

  state.results
    .filter(r=>r.score<60)
    .forEach(r=>weak[r.topic]=(weak[r.topic]||0)+1);

  document.querySelector('#weak').innerHTML=
    Object.entries(weak).length
      ?Object.entries(weak).map(([t,n])=>`
        <div class="question">
          <b>${esc(t)}</b>
          <small class="muted">
            needs review • ${n} result(s)
          </small>
        </div>
      `).join('')
      :'<div class="empty">No weak topic below 60% yet.</div>'
}

function openView(v){
  document.querySelectorAll('.view')
    .forEach(x=>x.classList.add('hidden'));

  document.querySelector('#'+v)
    .classList.remove('hidden');

  document.querySelectorAll('.nav')
    .forEach(x=>
      x.classList.toggle('active',x.dataset.view===v)
    );

  document.querySelector('#side')
    .classList.remove('open');

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

  if(v==='quiz')startQuiz()
}

function startQuiz(){
  qIndex=0;
  qSel=null;
  qScore=[];
  renderQuiz()
}

function renderQuiz(){
  const qs=allSubjects()
    .flatMap(s=>s.chapters)
    .filter(Boolean)
    .slice(0,5)
    .map((c,i)=>({
      q:`Which study approach is most useful for revising ${c}?`,
      opts:[
        'Memorise the title only',
        'Understand the concept, then practise questions',
        'Skip examples completely',
        'Study only on exam morning'
      ],
      a:1,
      topic:c
    }));

  const q=qs[qIndex];

  document.querySelector('#qcount').textContent=
    `${qIndex+1} / ${qs.length}`;

  document.querySelector('#quizbox').innerHTML=`
    <span class="eyebrow">QUESTION ${qIndex+1}</span>
    <h2>${esc(q.q)}</h2>

    ${q.opts.map((o,i)=>`
      <button class="qopt ${qSel===i?'sel':''}" data-opt="${i}">
        ${esc(o)}
      </button>
    `).join('')}

    <button class="primary full" id="next">
      ${qIndex===qs.length-1?'Finish quiz':'Next →'}
    </button>`
}

document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-view]');

  if(nav){
    openView(nav.dataset.view);
    return
  }

  const s=e.target.closest('[data-sub]');

  if(s){
    openSubject(s.dataset.sub);
    return
  }

  const ch=e.target.closest('[data-ch]');

  if(ch){
    openChapter(Number(ch.dataset.ch));
    return
  }

  const opt=e.target.closest('[data-opt]');

  if(opt){
    qSel=Number(opt.dataset.opt);
    renderQuiz();
    return
  }

  if(e.target.id==='next'){
    if(qSel===null){
      toast('Choose an answer first.');
      return
    }

    qScore.push(qSel===1);

    if(qIndex<4){
      qIndex++;
      qSel=null;
      renderQuiz()
    }else{
      const score=
        Math.round(qScore.filter(Boolean).length/5*100);

      state.results.push({
        topic:'Revision Strategy Quiz',
        score,
        type:'Quiz',
        date:dateKey()
      });

      mark();
      save();
      renderStats();
      renderResults();
      renderAnalytics();

      document.querySelector('#quizbox').innerHTML=`
        <span class="eyebrow">QUIZ COMPLETE</span>
        <h2>${score}%</h2>
        <p class="muted">
          Your result was saved to local activity.
          Keep practising and compare future attempts.
        </p>
        <button class="primary" data-view="analytics">
          View analytics →
        </button>`;

      toast('Quiz result saved.')
    }
  }

  if(e.target.id==='markDone'){
    state.done++;
    mark();
    save();
    renderStats();
    toast('Chapter marked as studied.')
  }
});

document.querySelectorAll('.nav')
  .forEach(b=>
    b.addEventListener('click',()=>openView(b.dataset.view))
  );

document.querySelector('#grade')
  .addEventListener('change',renderLibrary);

document.querySelector('#stream')
  .addEventListener('change',renderLibrary);

document.querySelector('#search')
  .addEventListener('input',renderLibrary);

document.querySelector('#backSubject')
  .addEventListener('click',()=>openView('subject'));

document.querySelector('#menu')
  .addEventListener('click',()=>
    document.querySelector('#side').classList.toggle('open')
  );

document.querySelector('#theme')
  .addEventListener('click',()=>{
    state.theme=state.theme==='light'?'dark':'light';
    save();
    document.documentElement.classList.toggle(
      'light',
      state.theme==='light'
    )
  });

document.querySelector('#noteForm')
  .addEventListener('submit',e=>{
    e.preventDefault();

    state.notes.push({
      title:nt.value,
      subject:ns.value,
      body:nb.value,
      date:dateKey()
    });

    mark();
    save();
    e.target.reset();
    renderNotes();
    toast('Note saved.')
  });

document.querySelector('#resultForm')
  .addEventListener('submit',e=>{
    e.preventDefault();

    const score=Number(rs.value);

    if(score<0||score>100)return;

    state.results.push({
      topic:rt.value,
      score,
      type:rtype.value,
      date:dateKey()
    });

    mark();
    save();
    e.target.reset();
    renderStats();
    renderResults();
    renderAnalytics();
    toast('Result saved.')
  });

document.documentElement.classList.toggle(
  'light',
  state.theme==='light'
);

renderStats();
renderLibrary();
renderNotes();
renderResults();
renderAnalytics();
openView('home');
