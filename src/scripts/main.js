// Береш кнопочки по класам з DOM:
const closeButton = document.querySelector('.menu__close-btn');
const openButton = document.querySelector('.top-bar__menu');

// Отримуєш меню:
const nav = document.querySelector('.menu');

// Якщо на кнопочку клікнули - додати клас
closeButton.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

// Якщо на кнопочку клікнули - видалити клас
openButton.addEventListener('click', () => {
  nav.classList.remove('menu-close');
});
