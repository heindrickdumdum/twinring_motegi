import preload from "./components/preload";
import topMvCarousel from "./components/top-mv-carousel";
import topFeatureSlider from './components/top-feature-slider';
import topSlider from './components/top-slider';
import slider from './components/slider';

preload();
topMvCarousel();

topFeatureSlider({
  id: 'topFeature',
  target: '.js-feature-slider'
});

slider({
  id: 'topSliderBottom', // REQUIRED
  target: '.js-slider-how-to', // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 60,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      749: {
        slidesPerView: 'auto',
        spaceBetween: 25
      }
    }
  }
})

const topSliderEl = document.querySelectorAll('.js-slider-sp');
topSliderEl.forEach( el => topSlider({ id: 'topSlider', target: el }));
