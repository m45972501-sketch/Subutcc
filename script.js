const header=document.getElementById("header");
const menu=document.getElementById("menu");
const links=document.getElementById("links");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>25));
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".links a");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(section=>{if(window.scrollY>=section.offsetTop-180)current=section.id});
navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});
