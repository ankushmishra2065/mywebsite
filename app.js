const DESTINATION_EMAIL = "YOUR_EMAIL@example.com";

window.addEventListener("load",()=>{setTimeout(()=>document.getElementById("loader").style.display="none",650)});
const menuBtn=document.getElementById("menuBtn"), navLinks=document.getElementById("navLinks");
menuBtn?.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const themeBtn=document.getElementById("themeBtn");
themeBtn?.addEventListener("click",()=>{document.body.classList.toggle("light");themeBtn.textContent=document.body.classList.contains("light")?"☀":"☾";});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll("[data-count]").forEach(el=>{
  const target=Number(el.dataset.count);
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){let n=0;const step=Math.max(1,Math.ceil(target/35));const t=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(t)}el.textContent=n+(target===99?"%":"+")},25);io.disconnect()}});
  io.observe(el);
});

const tilt=document.getElementById("tilt");
if(tilt && window.matchMedia("(pointer:fine)").matches){
  document.addEventListener("mousemove",e=>{
    const x=(e.clientX/innerWidth-.5)*10, y=(e.clientY/innerHeight-.5)*-7;
    tilt.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
  });
}
document.getElementById("contactForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  if(DESTINATION_EMAIL==="YOUR_EMAIL@example.com"){alert("Before publishing, open app.js and replace YOUR_EMAIL@example.com with your business email.");return;}
  const f=new FormData(e.target);
  const subject=encodeURIComponent(`New website project request — ${f.get("name")}`);
  const body=encodeURIComponent(`Name: ${f.get("name")}\nBusiness: ${f.get("business")}\nEmail: ${f.get("email")}\nService: ${f.get("service")}\nBudget: ${f.get("budget")}\n\nProject details:\n${f.get("message")}`);
  location.href=`mailto:${DESTINATION_EMAIL}?subject=${subject}&body=${body}`;
});
