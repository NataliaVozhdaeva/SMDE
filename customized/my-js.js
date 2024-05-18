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

const themeBtn = document.querySelector('button[data-theme="theme"]');

// console.log(themeBtn);

themeBtn.addEventListener('click', function themeToggler() {
  const currentTheme = themeBtn.querySelector('span:not(.d-none)');
  const nextTheme = themeBtn.querySelector('span.d-none');

  if (currentTheme.dataset.theme === 'toDark') {
    // console.log('toDark');
    document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    currentTheme.classList.toggle('d-none');
    nextTheme.classList.toggle('d-none');
  } else {
    // console.log('toLight');
    document.querySelector('body').setAttribute('data-bs-theme', 'light');
    currentTheme.classList.toggle('d-none');
    nextTheme.classList.toggle('d-none');
  }
});
