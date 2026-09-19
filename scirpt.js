// Hati mengambang di halaman pertama
const heartsField = document.getElementById('heartsField');
const heartChars = ['♥', '❤', '♡'];

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  const size = Math.random() * 16 + 14;
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = size + 'px';
  heart.style.color = Math.random() > 0.5 ? 'rgba(232,160,176,0.8)' : 'rgba(217,166,92,0.7)';
  heart.style.setProperty('--drift', Math.random() * 60 - 30 + 'px');
  heart.style.animationDuration = Math.random() * 6 + 9 + 's';
  heartsField.appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}

for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 400);
setInterval(spawnHeart, 900);

// Scroll ke galeri
document.getElementById('scrollCue').addEventListener('click', () => {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});

// Animasi muncul saat scroll (polaroid & penutup)
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i % 6) * 0.08 + 's';
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);
revealEls.forEach((el) => io.observe(el));

// Tombol kembali ke atas
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.6);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
