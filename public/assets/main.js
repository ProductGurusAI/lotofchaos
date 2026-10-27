document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

const timeEl = document.getElementById('time');
if (timeEl) {
  fetch('/api/hello')
    .then(r => r.json())
    .then(d => { timeEl.textContent = d.time; })
    .catch(() => { timeEl.textContent = 'unavailable (functions only run on Cloudflare)'; });
}
