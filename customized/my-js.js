//active calss for navigation

const menuItems = document.querySelectorAll('.nav-link');

location.hash = 'home';
document.querySelector('a[href="#home"]').classList.add('active');

menuItems.forEach((el) => {
  el.addEventListener('click', function activeClassHandler() {
    menuItems.forEach((el) => el.classList.remove('active'));
    setTimeout(function () {
      for (let i = 0; i < menuItems.length; i++) {
        if (location.hash === '#' + el.href.split('#')[1]) {
          el.classList.add('active');
          return;
        }
      }
    }, 10);
  });
});

//video pause-stadt btn

const videoBtnsContainer = document.querySelector('div[data-video="videoBtns"]');
const video = document.querySelector('#hero-video');

videoBtnsContainer.addEventListener('click', function videoToggler(e) {
  const btnPause = videoBtnsContainer.querySelector('span[data-video="pause"]');
  const btnPlay = videoBtnsContainer.querySelector('span[data-video="play"]');

  if (e.target.dataset.video === 'pause') {
    video.pause();
    btnPause.classList.add('invisible');
    btnPlay.classList.remove('invisible');
  } else {
    video.play();
    btnPause.classList.remove('invisible');
    btnPlay.classList.add('invisible');
  }
});

//dark-mode

const bodyEl = document.querySelector('body');
const themeBtn = document.querySelector('button[data-theme="theme"]');
bodyEl.style.setProperty('--custom-marker', '#dcdaf5');
bodyEl.style.setProperty('--custom-nav-hover', '#e5dee2');

themeBtn.addEventListener('click', function themeToggler() {
  const currentTheme = themeBtn.querySelector('span:not(.d-none)');
  const nextTheme = themeBtn.querySelector('span.d-none');

  if (currentTheme.dataset.theme === 'toDark') {
    bodyEl.style.setProperty('--custom-marker', '#45455a');
    bodyEl.style.setProperty('--custom-nav-hover', '#2f2c2f');

    bodyEl.setAttribute('data-bs-theme', 'dark');
    currentTheme.classList.toggle('d-none');
    nextTheme.classList.toggle('d-none');
  } else {
    bodyEl.style.setProperty('--custom-marker', '#dcdaf5');
    bodyEl.style.setProperty('--custom-nav-hover', '#e5dee2');

    bodyEl.setAttribute('data-bs-theme', 'light');
    currentTheme.classList.toggle('d-none');
    nextTheme.classList.toggle('d-none');
  }
});
