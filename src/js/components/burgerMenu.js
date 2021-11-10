import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function burgerMenu() {
  const container = document.querySelector('#js-init-burger-menu');
  if (!container) return;

  const menu = document.querySelector('.burger-menu');
  const menuContent = menu.querySelector('.burger-menu__inner');
  const openMenuBtn = document.querySelector('.header__burger');
  const closeMenuBtn = document.querySelector('.burger-menu__close-btn');

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  // document.documentElement.style.setProperty('--sb-width', scrollbarWidth + "px");
  let isMenuOpen = false;

  const openMenu = () => {
    isMenuOpen = true;
    disableBodyScroll(menu, {
        reserveScrollBarGap: true,
    });
    menu.classList.add('menu-shown');
    menuContent.classList.add('menu-shown');
  };

  const closeMenu = () => {
    isMenuOpen = false;
    clearAllBodyScrollLocks();
    menu.classList.remove('menu-shown');
    menuContent.classList.remove('menu-shown');
  };

  openMenuBtn.addEventListener('click', () => {
    openMenu();
  });

  closeMenuBtn.addEventListener('click', () => {
    closeMenu();
  });
}