export class Typewriter {
  #el;
  #phrases;
  #phraseIndex = 0;
  #charIndex   = 0;
  #deleting    = false;

  static TYPING_SPEED  = 95;
  static DELETING_SPEED = 55;
  static PAUSE_END     = 1500;
  static PAUSE_START   = 350;

  constructor(selector, phrases) {
    this.#el      = document.querySelector(selector);
    this.#phrases = phrases;
  }

  start() {
    if (!this.#el) return;
    this.#tick();
  }

  #tick() {
    const phrase = this.#phrases[this.#phraseIndex];

    this.#el.textContent = this.#deleting
      ? phrase.slice(0, this.#charIndex--) + '_'
      : phrase.slice(0, this.#charIndex++) + '_';

    let delay = this.#deleting ? Typewriter.DELETING_SPEED : Typewriter.TYPING_SPEED;

    if (!this.#deleting && this.#charIndex > phrase.length) {
      delay          = Typewriter.PAUSE_END;
      this.#deleting = true;
    } else if (this.#deleting && this.#charIndex < 0) {
      this.#deleting    = false;
      this.#charIndex   = 0;
      this.#phraseIndex = (this.#phraseIndex + 1) % this.#phrases.length;
      delay             = Typewriter.PAUSE_START;
    }

    setTimeout(() => this.#tick(), delay);
  }
}