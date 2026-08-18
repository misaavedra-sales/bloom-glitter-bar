document.addEventListener('DOMContentLoaded', () => {
  // Randomize hero sparkle positions and timing for a more organic glitter effect
  const sparkles = document.querySelectorAll('.hero-sparkles span');
  sparkles.forEach((sparkle) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = 2 + Math.random() * 2;

    sparkle.style.top = `${top}%`;
    sparkle.style.left = `${left}%`;
    sparkle.style.animationDelay = `${delay}s`;
    sparkle.style.animationDuration = `${duration}s`;
  });

  // Smooth-scroll fallback for the "Reservar" nav link and hero CTA
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
