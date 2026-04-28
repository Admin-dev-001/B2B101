// PARTICLES
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * 1920, y: Math.random() * 1080,
    r: Math.random() * 1.5 + .2,
    vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
    o: Math.random() * .45 + .1,
    c: ['0,229,255','123,47,255','255,45,120'][Math.floor(Math.random()*3)]
  });
}

// Draw connection lines between nearby particles
function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.c},${p.o})`;
    ctx.fill();

    // Connect nearby particles
    for (let j = i + 1; j < particles.length; j++) {
      const dx = p.x - particles[j].x;
      const dy = p.y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,229,255,${.08 * (1 - dist/120)})`;
        ctx.lineWidth = .5;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// 3D CARD TILT
const card = document.getElementById('holoCard');
const scene = document.getElementById('cardScene');
if (scene && card) {
  scene.addEventListener('mousemove', e => {
    const r = scene.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / (r.width/2);
    const y = (e.clientY - r.top - r.height/2) / (r.height/2);
    card.style.animation = 'none';
    card.style.transform = `rotateY(${x*22}deg) rotateX(${-y*16}deg) scale(1.04)`;
    card.style.transition = 'transform .08s ease';
  });
  scene.addEventListener('mouseleave', () => {
    card.style.animation = '';
    card.style.transform = '';
    card.style.transition = '';
  });
}

// SCROLL FADE
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      obs.unobserve(e.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// NAVBAR SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 20 ? 'rgba(2,8,22,.98)' : 'rgba(2,8,22,.85)';
}, { passive: true });

// HAMBURGER
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('mobile-open');
});

// LANG BUTTONS
document.querySelectorAll('.lang-btn, .fls button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (btn.classList.contains('lang-btn')) btn.classList.add('active');
  });
});
