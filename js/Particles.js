export class Particles {
  #bits;
  #count;

  constructor({
    bits  = ['✦', '💎', '🌸', '⭐', '✨', '❤️'],
    count = 8,
  } = {}) {
    this.#bits  = bits;
    this.#count = count;
  }

  attach(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', e => this.#burst(e));
    });
  }

  #burst(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    for (let i = 0; i < this.#count; i++) {
      setTimeout(() => this.#spawn(rect), i * 70);
    }
  }

  #spawn(rect) {
    const p = document.createElement('div');
    p.className   = 'particle';
    p.textContent = this.#bits[Math.floor(Math.random() * this.#bits.length)];

    p.style.left              = `${rect.left + Math.random() * rect.width}px`;
    p.style.top               = `${rect.top + window.scrollY + rect.height * 0.3}px`;
    p.style.fontSize          = `${14 + Math.random() * 10}px`;
    p.style.animationDuration = `${0.7 + Math.random() * 0.6}s`;

    document.body.appendChild(p);
    p.addEventListener('animationend', () => p.remove());
  }
}