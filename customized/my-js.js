const menuItems = document.querySelectorAll('.nav-link');

document.querySelector('a[href="#home"]').classList.add('active');

menuItems.forEach((el) => {
  el.addEventListener('click', function appearModal(e) {
    menuItems.forEach((el) => el.classList.remove('active'));
    setTimeout(function () {
      menuItems.forEach((el) => {
        if (location.hash === el.href) el.classList.add('active');
      });

      // menuItems.forEach((el) => el.classList.remove('active'));
    }, 0);
  });
});

/* switch (location.hash) {
        case '#started':
          e.target.closest('a').classList.add('active');
          break;
        case '#develop':
          e.target.closest('a').classList.add('active');
          break;
        case '#foundations':
          e.target.closest('a').classList.add('active');
          break;
        case '#styles':
          e.target.closest('a').classList.add('active');
          break;
        default:
          document.querySelector('a[href="#home"]').classList.add('active');
      } */
