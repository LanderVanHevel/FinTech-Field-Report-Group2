// =============================================
// Scroll-triggered fade-in for timeline entries
// =============================================
const entries = document.querySelectorAll('.timeline-entry');

const observer = new IntersectionObserver(
  (records) => {
    records.forEach((record) => {
      if (record.isIntersecting) {
        record.target.classList.add('visible');
        observer.unobserve(record.target);
      }
    });
  },
  { threshold: 0.07, rootMargin: '0px 0px -50px 0px' }
);

entries.forEach((entry) => observer.observe(entry));

// =============================================
// Pause all other videos when one starts playing
// =============================================
const videos = document.querySelectorAll('video');

videos.forEach((video) => {
  video.addEventListener('play', () => {
    videos.forEach((other) => {
      if (other !== video && !other.paused) other.pause();
    });
  });
});

// =============================================
// Nav: add shadow on scroll
// =============================================
const nav = document.getElementById('sticky-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.background = 'rgba(8, 12, 20, 0.95)';
  } else {
    nav.style.background = 'rgba(8, 12, 20, 0.75)';
  }
}, { passive: true });
