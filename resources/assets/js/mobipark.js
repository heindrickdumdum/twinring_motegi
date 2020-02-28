import slider from './components/slider';

slider({
  id: 'mobiparkSlider', // REQUIRED
  target: '#js-mobipark-slider', // REQUIRED
  options: {
    speed: 2000,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    fadeEffect: { crossFade: true },
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  } // OPTIONAL
});
