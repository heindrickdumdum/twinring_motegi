import Swiper from 'swiper/dist/js/swiper.js';

export default class galleryLabo {
  constructor() {

    let galleryThumb = new Swiper('.js-gallery-thumb', {
      spaceBetween: 10,
      variableWidth: true,
      slidesPerView: 'auto',
      // centeredSlides: true,
      allowTouchMove: false,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      noSwiping: true
    })

    new Swiper('.js-gallery', {
      speed: 2000,
      slidesPerView: 1,
      fadeEffect: { crossFade: true },
      effect: 'fade',
      thumbs: {
        swiper: galleryThumb
      }
    })

    let galleryThumb2 = new Swiper('.js-gallery-thumb2', {
      spaceBetween: 10,
      variableWidth: true,
      slidesPerView: 'auto',
      // centeredSlides: true,
      allowTouchMove: false,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      noSwiping: true
    })

    new Swiper('.js-gallery2', {
      speed: 2000,
      slidesPerView: 1,
      fadeEffect: { crossFade: true },
      effect: 'fade',
      thumbs: {
        swiper: galleryThumb2
      }
    })
  }
}

new galleryLabo();

// import SimpleLightbox from 'simplelightbox';
var SimpleLightbox = require('simple-lightbox');

new SimpleLightbox({
  elements: '#js-lightbox',
  closeBtnCaption: '&#10005;'
});