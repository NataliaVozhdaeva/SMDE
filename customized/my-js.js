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

videoBtnsContainer.addEventListener('click', function VideoToggler(e) {
  const btnPause = videoBtnsContainer.querySelector('span[data-video="pause"]');
  const btnPlay = videoBtnsContainer.querySelector('span[data-video="play"]');
  // console.log(e.target.dataset.video);

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
