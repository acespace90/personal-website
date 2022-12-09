const btnThemeSwitcher = document.querySelector('.c-nav__theme-btn');
const htmlRootEl = document.querySelector('html');
const metaThemeColorToggle = document.querySelector('meta[name="theme-color"]');

btnThemeSwitcher.addEventListener('click', () => {
  htmlRootEl.classList.toggle('dark');
  if (htmlRootEl.classList.contains('dark')) {
    localStorage.setItem('dark', "true");
    metaThemeColorToggle.setAttribute('content',  '#000000');
  } else {
    localStorage.setItem('dark', "false");
    metaThemeColorToggle.setAttribute('content',  '#EEE2DA');
  }

});

