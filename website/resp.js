burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('rightNav');
navList = document.querySelector(".nav-list");

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp')
})