import Swiper from 'swiper/dist/js/swiper.js';

export default class galleryLabo {
 constructor() {

   new Swiper('.js-gallery', {
     speed: 1000,
     slidesPerView: 1,
     fadeEffect: { crossFade: true },
     effect: 'fade',
     loop: true,
     autoplay: {
      delay: 4000,
      disableOnInteraction: false,
     },
     navigation: {
      nextEl: '.slider-gallery-img',
      prevEl: '.swiper-button-prev',
     },
     pagination: {
      el: '.swiper-pagination-bullets',
      clickable: true,
    }
   })
 }
}

new galleryLabo();
