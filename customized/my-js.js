const menuItems = document.querySelectorAll('.nav-link');

location.hash = 'home';
document.querySelector('a[href="#home"]').classList.add('active');

menuItems.forEach((el) => {
  el.addEventListener('click', function appearModal(e) {
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
