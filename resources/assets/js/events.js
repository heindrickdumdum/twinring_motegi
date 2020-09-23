import Swiper from 'swiper/dist/js/swiper.js';

export default class eventItemSlide {
 constructor() {

   new Swiper('.events-swiper', {
     speed: 1000,
     slidesPerView: 1,
     fadeEffect: { crossFade: true },
     effect: 'fade',
     loop: true,

     pagination: {
      el: '.events-swiper-pagination',
      clickable: true,
    }
   })
 }
}

new eventItemSlide();