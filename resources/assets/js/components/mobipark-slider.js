import Swiper from 'swiper';

export default function mobiparkSldier() {
  let thisSwiper = new Swiper('.mobipark .swiper-container', {  
    //speed: 500,
    //initialSlide: 1,
    //centeredSlides: true,
    pagination: {
      el: '.swiper-pagination'
    }
});

thisSwiper.on('resize', function () {
  this.reInit();
});

}