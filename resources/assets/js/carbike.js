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


    function anchorLinkHandler(e) {

        if(this.getAttribute("href") === '#') return;

        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);

        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }

    const linksToAnchors = document.querySelectorAll('a[href^="#"]');

    linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

  }
}

new SliderCarBike();
