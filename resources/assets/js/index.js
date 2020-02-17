//import preload from "./components/preload";
import topMvCarousel from "./components/top-mv-carousel";
import slider from './components/slider';
import topFeatureSlider from './components/top-feature-slider';

//preload();
topMvCarousel();

topFeatureSlider({
  id: 'topFeature', // REQUIRED
  target: '.js-feature-slider', // REQUIRED
})

slider({
	id: 'commonSlider', // REQUIRED
	target: '.js-slider-sp', // REQUIRED
})
