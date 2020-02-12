import slider from './components/slider';

slider({
  id: 'mobiparkSlider', // REQUIRED
  target: '#js-mobipark-slider', // REQUIRED
  options: {
    init: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  } // OPTIONAL
});

