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

window.addEventListener("load", function(){
  const $body = document.querySelector("body")
  let scrollDirectionDown = true

  window.addEventListener('scroll', () => {
    if (window.oldScroll > window.scrollY) {
      scrollDirectionDown = false
    } else {
      scrollDirectionDown = true
    }
    window.oldScroll = window.scrollY

    if (scrollDirectionDown) {
      $body.classList.remove("js-scrolling-up")
      $body.classList.add("js-scrolling-down")
    } else {
      $body.classList.remove("js-scrolling-down")
      $body.classList.add("js-scrolling-up")
    }
    if (window.scrollY > 600) {
      $body.classList.remove("js-sticky-pre-zone")
      $body.classList.add("js-sticky-zone")
    } else if (window.scrollY > 300) {
      $body.classList.remove("js-sticky-zone")
      $body.classList.add("js-sticky-pre-zone")
    } else {
      $body.classList.remove("js-sticky-pre-zone")
      $body.classList.remove("js-sticky-zone")
    }
  })
});