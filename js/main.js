import { Typewriter } from './Typewriter.js';
import { Particles  } from './Particles.js';

const phrases = [
  'product manager',
  'software engineer',
  'data analyst',
  'project manager',
  'gamer'
];

const typewriter = new Typewriter('#typewriter', phrases);
const particles  = new Particles();

document.addEventListener('DOMContentLoaded', () => {
  typewriter.start();
  particles.attach('[data-burst]');

  const slides   = document.querySelectorAll('.gallery-slide');
  const cap      = document.getElementById('gallery-cap');
  const dotsWrap = document.getElementById('gallery-dots');
  let current    = 0;
  let timer;

  slides.forEach((s, i) => {
    const dot = document.createElement('div');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
    cap.textContent = slides[current].alt;
    clearInterval(timer);
    timer = setInterval(next, 3500);
  }

  function next() { goTo((current + 1) % slides.length); }

  timer = setInterval(next, 3500);

  const toggle = document.getElementById('dayNightToggle');
  const stars  = document.createElement('div');
  stars.className = 'stars';

  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 1;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 60}%;
      left: ${Math.random() * 100}%;
      animation-duration: ${1.5 + Math.random() * 2.5}s;
      animation-delay: ${Math.random() * 2}s;
    `;
    stars.appendChild(star);
  }
  document.body.appendChild(stars);

  toggle.addEventListener('click', () => {
    const isNight = document.body.classList.toggle('night');
    toggle.textContent = isNight ? '☀️ LIGHT MODE' : '🌙 DARK MODE';
  
  const walker = document.getElementById('walker');
  walker.addEventListener('animationiteration', () => {
    walker.style.animationDuration = (14 + Math.random() * 8) + 's';
  });
  });

});