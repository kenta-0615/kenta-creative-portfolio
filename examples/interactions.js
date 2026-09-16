const menu = document.querySelector('[data-menu]');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
});
document.querySelectorAll('[data-cta]').forEach((button) => {
  button.addEventListener('click', () => window.dataLayer?.push({ event:'cta_click', label:button.textContent?.trim() }));
});
