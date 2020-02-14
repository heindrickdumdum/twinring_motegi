import Swiper from 'swiper';

console.log("carbike");
export default class SliderCarBike {
  constructor() {


    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:750px)' );

    let swiperCarbike;

    const breakpointChecker = function() {

      console.log("checker", breakpoint.matches);

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
