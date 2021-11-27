



let headerBtn = $ ('.button');
let overlay = $ ('.overlay');
let popupClose = $ ('.popup__close');
let popupFormBtn = $ ('.popup__form-btn');

headerBtn.on('click', function () {
overlay.fadeIn('slow')
});

popupClose.on('click', function () {
 overlay.fadeOut('slow')
});

popupFormBtn .on ('click', function () {
   e.preventDefault('slow')
});

overlay .on('click', function () {
console.log(e.target())
});

let ul =$('.review__list');
ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('.review__tabs').find('.review__tabs-content').removeClass('review__tabs-content_active')
        .eq($(this).index()).addClass('review__tabs-content_active');
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});