const btnThemeSwitcher = document.querySelector('.c-nav__theme-btn');
const htmlRootEl = document.querySelector('html');

btnThemeSwitcher.addEventListener('click', () => {
  htmlRootEl.classList.toggle('dark');
});