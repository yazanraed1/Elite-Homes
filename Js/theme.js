(function () {
  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (!button || !icon) return;

  function renderTheme() {
    const dark = root.getAttribute('data-bs-theme') === 'dark';
    icon.classList.toggle('fa-moon', !dark);
    icon.classList.toggle('fa-sun', dark);
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.title = dark ? 'Light mode' : 'Dark mode';
  }

  renderTheme();
  button.addEventListener('click', function () {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', next);
    try { localStorage.setItem('elitehomes-theme', next); } catch (error) { /* storage disabled */ }
    renderTheme();
  });
})();
