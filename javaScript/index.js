let openMenu = document.querySelector('.header__burger-open');
let closeMenu = document.querySelector('.header__burger-close');
let mobileMenu = document.querySelector('.header__menu-list');
let backImage = document.querySelector('.backimage');

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);

function menuOpen() {
    openMenu.classList.add('active')
    mobileMenu.classList.add('active')
    closeMenu.classList.add('active');
    backImage.classList.add('active');
};

function menuClose() {
    openMenu.classList.remove('active')
    mobileMenu.classList.remove('active')
    closeMenu.classList.remove('active');
    backImage.classList.remove('active');
}