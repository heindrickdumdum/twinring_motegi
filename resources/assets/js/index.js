import preload from "./components/preload";
import topMvCarousel from "./components/top-mv-carousel";
import slider from './components/slider';

preload();
topMvCarousel();

if(window.innerWidth <= 749) {
	slider({
		id: 'commonSlider', // REQUIRED
		target: '.js-slider-sp', // REQUIRED
	})
}

