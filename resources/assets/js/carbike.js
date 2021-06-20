import Swiper from 'swiper/dist/js/swiper.js';

export default class SliderCarBike {
  constructor() {
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:750px)' );

    let swiperCarbike;

    const breakpointChecker = function() {

      if ( breakpoint.matches === true ) {

        // if(!swiperCarbike) return;
        if (swiperCarbike !== undefined ) {
          swiperCarbike.destroy( true, true );
        }

        return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
    };

    const enableSwiper = function() {

      swiperCarbike = new Swiper ('.js-slider-carbike', {

        // loop: true,
        slidesPerView: 'auto',
        variableWidth: true,
        centeredSlides: true,
        spaceBetween: 0,
        keyboardControl: true,
        grabCursor: true,
      });

    };


    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();

  }
}

new SliderCarBike();
