import Swiper from 'swiper';

export default function topSlider() {
  let topSwiper = new Swiper('.top-slider', {  
    speed: 1500,
    initialSlide: 1,

    breakpoints: {
        1280: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            initialSlide: 1,
            slidesPerGroup: 3,
            loop: true,
            centeredSlides: true
        },
        375: {
            spaceBetween: 10,           
            centeredSlides: true,
            slidesPerView: 1.5,
            initialSlide: 1,
            loopedSlides: 0,
            loop: true
        }
    },
    on: {
        resize: function() {
            this.params.observer = true;
        }
    }
});

// mySwiper.addEventListener('resize', function () {
//     this.reInit();
// });

}