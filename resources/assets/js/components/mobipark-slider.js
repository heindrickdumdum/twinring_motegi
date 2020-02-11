import Swiper from 'swiper';

export default function mobiparkSlider() {
  let mobiparkSwiper = new Swiper('.swiper-container', {
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      resize: function() {
        this.reInit();
      }
    }
  });

  mobiparkSwiper.update();

  // mobiparkSwiper.on('resize', function() {
  //   this.reInit();
  // });
}