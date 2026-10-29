const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');
if (menu && links) {
  menu.addEventListener('click', () => {
    const opened = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!opened));
    links.classList.toggle('open', !opened);
  });
  links.addEventListener('click', e => {
    if (e.target.closest('a')) {
      links.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
  });
}
