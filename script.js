const WA="https://wa.me/212662091412?text=";
const U="https://greenpalms-transport.com/wp-content/uploads/";

const cards = document.querySelectorAll("#cards .card");


// Activity details are now individual pages in /to_book/<slug>/.

function filterCards(category) {
  cards.forEach(card => {
    card.hidden = card.dataset.category !== category;
  });
}

filterCards("tour");

document.getElementById("tabs").addEventListener("click", e => {
  const button = e.target.closest(".tab");
  if (!button) return;

  document.querySelectorAll(".tab").forEach(tab => {
    const active = tab === button;
    tab.classList.toggle("on", active);
    tab.setAttribute("aria-pressed", String(active));
  });

  filterCards(button.dataset.c);
});

document.addEventListener("click",e=>{

 const h=e.target.closest(".heart");if(h)h.classList.toggle("on");

 const m=e.target.closest("[data-msg]");if(m){document.getElementById("msg").value=m.dataset.msg}

 if(e.target.closest("#menu a")){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}

});

const dest=[["Marrakech","2023/02/steptodown.com484693-1.jpg","#c8553d","#6b2316"],["Agafay","2025/08/steptodown.com630256.webp","#d9a441","#8a5a1c"],["Essaouira","2025/08/steptodown.com581284-1-1.jpg","#4aa3c7","#1b5873"],["Atlas Mountains","2025/08/steptodown.com543417-1.jpg","#5c9a5a","#1f4d2c"],["Ait Ben Haddou","2025/08/steptodown.com982982-1.jpg","#d08a4a","#7d3a1b"],["Casablanca","2025/08/hans-jurgen-weinhardt-xijil3cOsis-unsplash.webp","#6c7a89","#2a3440"]];

document.getElementById("dest").innerHTML=dest.map(d=>`<a class="d rv" href="#contact" data-msg="I’d like to visit ${d[0]}." style="--g1:${d[2]};--g2:${d[3]};--img:url(${U+d[1]})">${d[0]}</a>`).join("");

const bars=[["Reliable & comfortable transfers",98],["Seamless itinerary execution",99],["Personalized & stress-free travel",99],["Transparent & inclusive experience",99]];

document.getElementById("bars").innerHTML=bars.map(b=>`<div class="bar" style="--w:${b[1]}%"><div><span>${b[0]}</span><span>${b[1]}%</span></div><i></i></div>`).join("");

const burger=document.getElementById("burger"),menu=document.getElementById("menu");

burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};

document.getElementById("search").onsubmit=e=>{e.preventDefault();

 const v=id=>document.getElementById(id).value;

 window.open(WA+encodeURIComponent(`Hello Green Palms! I’m looking for: ${v("sType")} in ${v("sDest")}, date: ${v("sDate")||"flexible"}, ${v("sGuests")} guest(s).`),"_blank");};

document.getElementById("form").onsubmit=e=>{e.preventDefault();

 const f=new FormData(e.target);document.getElementById("ok").hidden=false;

 window.open(WA+encodeURIComponent(`Hello, I’m ${f.get("n")} (${f.get("e")}). Interested in: ${f.get("s")}. ${f.get("m")}`),"_blank");};

const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;

 const t=en.target;t.classList.add("in");io.unobserve(t);

 const n=t.querySelector("[data-n]");if(n){const end=+n.dataset.n,s=n.dataset.s||"";let k=0;

  const st=setInterval(()=>{k+=end/40;if(k>=end){k=end;clearInterval(st)}n.textContent=(end%1?k.toFixed(1):Math.round(k))+s},30)}

 t.querySelectorAll&&t.classList.contains("about")&&0;

}),{threshold:.15});

document.querySelectorAll(".rv").forEach(el=>io.observe(el));

const bo=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.querySelectorAll(".bar").forEach(b=>b.classList.add("in"))}}),{threshold:.3});

bo.observe(document.getElementById("bars"));

const links=[...document.querySelectorAll("nav a")],secs=links.map(a=>document.querySelector(a.getAttribute("href")));

addEventListener("scroll",()=>{let cur=0;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<200)cur=i});links.forEach((a,i)=>a.classList.toggle("on",i===cur))},{passive:true});
