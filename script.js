(function() {
  document.documentElement.style.setProperty('--fade-ms', FADE_DURATION_MS + 'ms');
  const card = document.getElementById('card');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');
  const go = document.getElementById('go');
  const frame = document.getElementById('live-frame');
  const title = document.getElementById('live-title');

  function openOverlay() {
    title.textContent = LIVE_VIEW_TITLE;
    frame.setAttribute('src', LIVE_VIEW_URL);
    const prev = document.body.style.overflow;
    document.body.dataset.prevOverflow = prev;
    document.body.style.overflow = 'hidden';
    card.classList.add('fade-out');
    setTimeout(() => {
      overlay.classList.remove('hidden');
      // ensure centered without page scroll
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, Math.max(0, FADE_DURATION_MS - OVERLAP_MS));
  }

  function closeOverlay() {
    overlay.classList.add('hidden');
    card.classList.remove('fade-out');
    document.body.style.overflow = document.body.dataset.prevOverflow || '';
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  go.addEventListener('click', openOverlay);
  closeBtn.addEventListener('click', closeOverlay);
})();
