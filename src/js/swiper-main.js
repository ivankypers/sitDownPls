const swiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    speed: 100,
    centeredSlides: true,
    loop: true,
    cssMode: true,
    autoplay: {
        delay: 10000,
    },
});


function SwiperButtonsPrev() {
    if (swipeSpecialBtnPrev.classList.contains('swiper-button-disabled')) {
        swipeSpecialBtnPrev.classList.remove('swiper-button__available')
        swipeSpecialBtnNext.classList.add('swiper-button__available')
    } else {
        swipeSpecialBtnNext.classList.add('swiper-button__available')
        swipeSpecialBtnPrev.classList.add('swiper-button__available')
    }
}

function swiperButtonsNext() {
    if (swipeSpecialBtnNext.classList.contains('swiper-button-disabled')) {
        swipeSpecialBtnNext.classList.remove('swiper-button__available')
        swipeSpecialBtnPrev.classList.add('swiper-button__available')
    } else {
        swipeSpecialBtnNext.classList.add('swiper-button__available')
        swipeSpecialBtnPrev.classList.add('swiper-button__available')
    }
}

const swipeSpecial = new Swiper('.special__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: '100%',
    speed: 1000,
});

const swipeSpecialBtnPrev = document.querySelector('.swiper-button-prev')
const swipeSpecialBtnNext = document.querySelector('.swiper-button-next')



swipeSpecialBtnPrev.addEventListener('click', SwiperButtonsPrev)

swipeSpecialBtnNext.addEventListener('click', swiperButtonsNext)
