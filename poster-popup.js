(() => {
  const dialog = document.getElementById('poster-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const key = 'idas-poster-hide-kst-day';
  const today = () => new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  let hidden = false;
  try { hidden = localStorage.getItem(key) === today(); } catch (_) { /* private browsing: just show */ }
  if (hidden) return;
  const check = dialog.querySelector('#poster-hide-today');
  const close = () => {
    if (check.checked) {
      try { localStorage.setItem(key, today()); } catch (_) { /* close even if storage is blocked */ }
    }
    dialog.close();
  };
  dialog.querySelector('[data-poster-close]').addEventListener('click', close);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
  dialog.showModal();
})();
