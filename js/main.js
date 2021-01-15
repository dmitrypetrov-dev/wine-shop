let wineMenu = document.querySelector('.wine-menu');
let wineMenuDropdown = document.querySelector('.wine-menu_dropdown');
let burgerOpen = document.querySelector('#burger-open');
let headerMenu = document.querySelector('.header-dropdown');


wineMenu.addEventListener('click', function () {
    wineMenuDropdown.classList.toggle('active');
});

burgerOpen.addEventListener('click', function () {
    headerMenu.classList.toggle('active');
});
