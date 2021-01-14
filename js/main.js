let wineMenu = document.querySelector('.wine-menu');
let wineMenuDropdown = document.querySelector('.wine-menu_dropdown');

wineMenu.addEventListener('click', function () {
    wineMenuDropdown.classList.toggle('active');
});