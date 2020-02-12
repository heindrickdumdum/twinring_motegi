import Swiper from 'swiper';

export default function mobiparkSlider() {
  let mobiparkSwiper = new Swiper('.slider-container', {
    init: true,
    speed: 500,
    pagination: {
      el: '.slider-pagination',
      clickable: true
    }
  });

  mobiparkSwiper.reInit();
}