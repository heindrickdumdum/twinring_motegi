import slider from './components/slider';

// SUMIKA , ITADAKI, AND DOKIDOKI TOP SLIDER
slider({
  id: 'commonSlider', // REQUIRED
  target: '.js-slider',// REQUIRED

  options: {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
})

// SUMIKA , ITADAKI, AND DOKIDOKI BOTTOM SLIDER
// slider({
//   id: 'commonSliderBottom', // REQUIRED
//   target: '.js-slider-bottom', // REQUIRED
// })

// slider({
//   id: 'commonSlider', // REQUIRED
//   target: '.js-slider-craft', // REQUIRED
//   options: {
// 		slidesPerView: 3,
// 		spaceBetween: 60,
// 		breakpoints: {
// 			1280: {
// 				slidesPerView: 3,
// 				spaceBetween: 60,
// 			},
//       375: {
//         spaceBetween: 17,
//         slidesPerView: 3,
//       }
//     },
// 	}
// })

slider({
  id: 'commonSliderBottom', // REQUIRED
  target: '.js-slider-bottom', // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 60,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
})

slider({
  id: 'commonSliderBottom', // REQUIRED
  target: '.js-slider-pickup', // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 60,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
})