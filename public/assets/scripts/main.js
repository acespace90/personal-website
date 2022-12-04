const btnThemeSwitcher = document.querySelector('.c-nav__theme-btn');
const htmlRootEl = document.querySelector('html');

btnThemeSwitcher.addEventListener('click', () => {
  htmlRootEl.classList.toggle('dark');
  if (htmlRootEl.classList.contains('dark')) {
    localStorage.setItem('dark', "true");
  } else {
    localStorage.setItem('dark', "false");
  }

});

