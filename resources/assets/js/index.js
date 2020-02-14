import preload from "./components/preload";
import topMvCarousel from "./components/top-mv-carousel";
import slider from './components/slider';

preload();
topMvCarousel();


slider({
	id: 'commonSlider', // REQUIRED
	target: '.js-slider-sp', // REQUIRED
})
