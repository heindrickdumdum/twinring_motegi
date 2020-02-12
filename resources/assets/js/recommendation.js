import slider from './components/slider';

slider({
  id: 'recommendationSlider', // REQUIRED
  target: '#js-recommendation-slider', // REQUIRED
  options: {
    speed: 1500,
    initialSlide: 2,
    centeredSlides: false,

    breakpoints: {
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 50,
        loopedSlides: 0,
        initialSlide: 1,
        slidesPerGroup: 3,
      },
      375: {
        spaceBetween: 10,           
        centeredSlides: true,
        slidesPerView: 1.5,
        initialSlide: 1,
        loopedSlides: 0,
        loop: true
      }
    },

    on: {
      resize: function() {
        this.params.observer = true;
      }
    }
  } // OPTIONAL
})

console.log('this page is mobipark');