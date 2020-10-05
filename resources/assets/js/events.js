import Swiper from 'swiper/dist/js/swiper.esm.bundle';

// export default class galleryEventsList {
//  constructor() {
//   new Swiper('.eventSlide1, .eventSlide2, .eventSlide3, .eventSlide4, .eventSlide5', {
//     speed: 2000,
//     slidesPerView: 1,
//     fadeEffect: { crossFade: true },
//     effect: 'fade',
//     initialSlide: 1,
//     loop: true,
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: true,
//       reverseDirection: true
//      },
//     pagination: {
//       el: '.events-swiper-pagination',
//       clickable: true
//     }
//   })
//  }
// }
// new galleryEventsList();

new Swiper('.slide-images', {

  autoplay: {
      delay: 5000,
      disableOnInteraction: true,
  },
  speed: 1000, 
  slidersPerView: 1,

  loop: true,
  pagination: {
    el: '.events-swiper-pagination',
    clickable: true
  }
});

