import slider from './components/slider';

// SUMIKA , ITADAKI, AND DOKIDOKI TOP SLIDER
slider({
  id: 'commonSlider', // REQUIRED
  target: '.js-slider',// REQUIRED
})

// SUMIKA , ITADAKI, AND DOKIDOKI BOTTOM SLIDER
slider({
  id: 'commonSliderBottom', // REQUIRED
  target: '.js-slider-bottom', // REQUIRED
})

slider({
  id: 'commonSlider', // REQUIRED
  target: '.js-slider-craft', // REQUIRED
  options: {
		slidesPerView: 3,
		spaceBetween: 60,
		breakpoints: {
			1280: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
      375: {
        spaceBetween: 17,
        slidesPerView: 3,
      }
    },
	}
})
