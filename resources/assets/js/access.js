function accessTab(id) {
  let i, j, tabContent, tabLink;

  tabContent = document.querySelectorAll(id + ' .js-tab-content');
  tabLink = document.querySelectorAll(id + ' .js-tab-link');

  tabLink[0].classList.add('is-active');

  tabContent.forEach(item => {
    item.style.height = "0px";
    item.style.opacity = 0;
  });

  tabLink.forEach(item => {
    if( item.classList.contains('is-active') ) {
      let thisId = item.getAttribute('data-tab');

      document.getElementById(thisId).style.height = "auto";
      document.getElementById(thisId).style.opacity = 1;
    }

    item.addEventListener('click', function(e) {
      e.preventDefault();

      for(i = 0; i<tabLink.length;i++) {
        tabLink[i].classList.remove('is-active');
      }
      item.classList.add('is-active');
      let tabId = item.getAttribute('data-tab');

      for(j=0; j<tabContent.length; j++) {
        tabContent[j].style.height = "0px";
        tabContent[j].style.opacity = 0;
      }
      
      document.getElementById(tabId).style.height = "auto";
      document.getElementById(tabId).style.opacity = 1;
    });
  } );
}

//carbike tab
accessTab('#js-carbike-tab');

//train tab
accessTab('#js-train-tab');

//bus tab
accessTab('#js-bus-tab');

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

      swiperCarbike = new Swiper ('.js-slider-tab', {

        // loop: true,
        slidesPerView: 'auto',
        variableWidth: true,
        centeredSlides: false,
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
