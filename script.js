// NAV SCROLL
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>60)});

// MOBILE MENU
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}

// SCROLL REVEAL
const revealEls=document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
revealEls.forEach(el=>observer.observe(el));

// HERO IMMEDIATE REVEAL
document.querySelectorAll('#hero .reveal,#hero .reveal-left,#hero .reveal-right').forEach((el,i)=>{
  setTimeout(()=>el.classList.add('visible'),200+i*120);
});

// SMOOTH ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});