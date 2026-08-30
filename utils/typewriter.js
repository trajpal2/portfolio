/**
 * Cycles through phrases with a type / delete animation.
 * @param {HTMLElement} element
 * @param {string[]} phrases
 * @param {{ typeSpeed?: number, deleteSpeed?: number, holdDelay?: number, pauseDelay?: number }} [options]
 * @returns {() => void}
 */
export function startTypewriter(element, phrases, options = {}) {
  if (!element || !phrases?.length) return () => {};

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    element.textContent = phrases[0];
    return () => {};
  }

  const typeSpeed = options.typeSpeed ?? 85;
  const deleteSpeed = options.deleteSpeed ?? 35;
  const holdDelay = options.holdDelay ?? 1800;
  const pauseDelay = options.pauseDelay ?? 450;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timerId = null;
  let stopped = false;

  const tick = () => {
    if (stopped) return;

    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex += 1;
      element.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        timerId = window.setTimeout(tick, holdDelay);
        return;
      }

      timerId = window.setTimeout(tick, typeSpeed);
      return;
    }

    charIndex -= 1;
    element.textContent = current.slice(0, Math.max(0, charIndex));

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timerId = window.setTimeout(tick, pauseDelay);
      return;
    }

    timerId = window.setTimeout(tick, deleteSpeed);
  };

  tick();

  return () => {
    stopped = true;
    if (timerId) window.clearTimeout(timerId);
  };
}
