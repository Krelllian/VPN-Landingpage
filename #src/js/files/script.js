//<burger>

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//</burger>

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 2.4,
    loop: true,
    //effect: 'fade',

    //fadeEffect: {
    //    crossFade: true,
    //},
    //autoHeight: false,

    spaceBetween: 50,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});