 
// Mobile nav toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
if(navToggle && navMenu){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
    navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
  })
}
 
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  })
})
 
// Fake form submit
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name || 'there'}! We'll reach out to ${data.email || 'your inbox'} soon.`);
    form.reset();
  });
}
 
(function(){
  const path = window.location.pathname;
 
  const isIndex  = path === '/' || path.endsWith('/index.html');
  const islander = path.endsWith('/lander.html');
 
  if (!isIndex && !islander) return;
 
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
     <div class="modal">
      <h3>Age Confirmation Required</h3>
      <p>You must be 18 years of age or older to access this website.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" id="age-yes">Yes, Continue</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>`;
 
  document.body.appendChild(bd);
  bd.style.display = 'flex';
 
  function closeGate(){
    bd.remove();
  }
 
  const yes = bd.querySelector('#age-yes');
  const no  = bd.querySelector('#age-no');
 
  if (isIndex) {
    // ✅ INDEX → just close modal
    if (yes) yes.addEventListener('click', closeGate);
    if (no)  no.addEventListener('click', closeGate);
  }
 
  if (islander) {
    // ✅ lander → redirect
    const redirectUrl = "https://boosthive.site/"; // always use full URL
 
    if (yes) yes.addEventListener('click', () => {
      window.location.href = redirectUrl;
    });
 
    if (no) no.addEventListener('click', () => {
      window.location.href = redirectUrl;
    });
  }
 
})();