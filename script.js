const b=document.querySelector('.menu-button');
const n=document.querySelector('.nav-links');
if(b&&n){
  b.addEventListener('click',()=>{
    const open=n.classList.toggle('open');
    b.setAttribute('aria-expanded',String(open));
  });
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    n.classList.remove('open');
    b.setAttribute('aria-expanded','false');
  }));
}
document.getElementById('year').textContent=new Date().getFullYear();
