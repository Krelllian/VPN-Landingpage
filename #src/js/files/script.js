

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

    autoHeight: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.01,
            spaceBetween: 15,

        },
        // when window width is >= 480px
        885: {
            slidesPerView: 2.01,
            spaceBetween: 30,

        },
        // when window width is >= 640px
        1070: {
            slidesPerView: 2.4,
            spaceBetween: 40,

        }
    }


});