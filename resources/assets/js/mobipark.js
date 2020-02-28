import slider from './components/slider';

slider({
  id: 'mobiparkSlider', // REQUIRED
  target: '#js-mobipark-slider', // REQUIRED
  options: {
    speed: 500,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  } // OPTIONAL
});

