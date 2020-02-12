import Swiper from 'swiper';

export default function mobiparkSlider() {
  let mobiparkSwiper = new Swiper('.slider-container', {
    init: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  mobiparkSwiper.params.observer = true;
}