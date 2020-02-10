import Swiper from 'swiper';

export default function mobiparkSlider() {
  let mobiparkSwiper = new Swiper('.mobipark .swiper-container', {
    speed: 500,
    pagination: {
      el: '.mobipark .swiper-pagination',
      clickable: true
    }
  });

  mobiparkSwiper.on('resize', function() {
    this.reInit();
  });
}