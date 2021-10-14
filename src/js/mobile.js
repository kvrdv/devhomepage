// corner menu
let menuButton = document.querySelector('.mobile-menu-button');
let menuWrapper = document.querySelector('.mobile-menu-wrapper');
let imageBlack = document.querySelector('.mobile-menu-button-image-black');
let menu = document.querySelector('.mobile-menu');
let menuItems = document.querySelectorAll('.mobile-menu-item');
let hello = document.querySelector('.hello');
let who = document.querySelector('.who');

menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    menuButton.classList.toggle('hidden');
    menuWrapper.classList.toggle('hidden');
    imageBlack.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    hello.classList.toggle('no-shadow');
    who.classList.toggle('no-shadow');
});

imageBlack.addEventListener('click', (event) => {
    event.preventDefault();
    menuButton.classList.toggle('hidden');
    menuWrapper.classList.toggle('hidden');
    imageBlack.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    hello.classList.toggle('no-shadow');
    who.classList.toggle('no-shadow');
});

menuItems.forEach((element) => {
    element.addEventListener('click', (event) => {
        menuButton.classList.toggle('hidden');
        menuWrapper.classList.toggle('hidden');
        imageBlack.classList.toggle('hidden');
        menu.classList.toggle('hidden');
        hello.classList.toggle('no-shadow');
        who.classList.toggle('no-shadow');
    });
});