import slider from './components/slider';

// SUMIKA , ITADAKI, AND DOKIDOKI TOP SLIDER
slider({
  id: 'commonSlider', // REQUIRED
  target: '.js-slider',// REQUIRED

  options: {
    speed: 1500,
    initialSlide: 1,
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
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 1.5,
        initialSlide: 1,
        loopedSlides: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        } 
      }
    }
  }
})

// SUMIKA , ITADAKI, AND DOKIDOKI BOTTOM SLIDER
slider({
  id: 'commonSliderBottom', // REQUIRED
  target: '.js-slider-bottom', // REQUIRED
})
