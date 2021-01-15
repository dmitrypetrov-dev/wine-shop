$(document).ready(function () {
    $('#burger-open').click(function (event) {
        $('.header-dropdown').toggleClass('active');
    });

    $('.wine-menu').click(function (event) {
        $('.wine-menu_dropdown').slideToggle();
    });
});