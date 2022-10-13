let menuIcon = document.querySelector('.header__nav-menuIcon');
let menuMobile = document.querySelector('.header__nav-menu');

menuIcon.addEventListener('click', function() {
    menuMobile.classList.toggle('inactive');
})