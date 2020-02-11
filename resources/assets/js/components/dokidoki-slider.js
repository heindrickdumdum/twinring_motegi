import Swiper from 'swiper';

export default function dokidokiSlider() {
  let dokidokiSwiper = new Swiper('.dokidoki .swiper-container', {  
    speed: 1500,
    initialSlide: 2,

    breakpoints: {
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 50,
            loopedSlides: 0,
            initialSlide: 1,
            slidesPerGroup: 3,
        },
        375: {
            spaceBetween: 10,           
            centeredSlides: true,
            slidesPerView: 1.5,
            initialSlide: 1,
            loopedSlides: 0,
            loop: true
        }
    }
});

dokidokiSwiper.on('resize', function () {
    this.reInit();
});

}