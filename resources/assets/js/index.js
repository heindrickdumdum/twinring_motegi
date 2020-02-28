import preload from "./components/preload";
import topMvCarousel from "./components/top-mv-carousel";
import topFeatureSlider from './components/top-feature-slider';

preload();
topMvCarousel();

topFeatureSlider({
  id: 'topFeature', // REQUIRED
  target: '.js-feature-slider', // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: 'auto',
    spaceBetween: 55,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1280: {
        slidesPerGroup: 3
      },
      375: {
        spaceBetween: 10,
        slidesPerGroup: 1
      }
    },

    on: {
      resize: function() {
        this.params.observer = true;
      }
    }
  }
})

topFeatureSlider({
	id: 'commonSlider', // REQUIRED
	target: '.js-slider-sp', // REQUIRED
})
