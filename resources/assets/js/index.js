import preload from "./components/preload";
import topMvCarousel from "./components/top-mv-carousel";
import topFeatureSlider from './components/top-feature-slider';
import topSlider from './components/top-slider';

preload();
topMvCarousel();

topFeatureSlider({
  id: 'topFeature',
  target: '.js-feature-slider'
});

const topSliderEl = document.querySelectorAll('.js-slider-sp');
topSliderEl.forEach( el => {
topSlider({id: 'topSlider', target: el});
});
