import Swiper from 'swiper/dist/js/swiper.js';

export default class galleryLabo {
 constructor() {

   new Swiper('.js-gallery', {
     speed: 2000,
     slidesPerView: 1,
     fadeEffect: { crossFade: true },
     effect: 'fade',
     pagination: {
      el: '.swiper-pagination-bullets',
      clickable: true,
    }
   })
 }
}

new galleryLabo();
