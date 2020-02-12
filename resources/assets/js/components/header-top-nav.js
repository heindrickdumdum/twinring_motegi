import CONST from './../constants';

export default function headerTopNav() {
  const headerTopButton = document.querySelectorAll('.js-top-nav-button'),
        headerTopSub = document.querySelectorAll('.header-top-nav-sub');

  let mediaQuery = window.matchMedia('(max-width: 749px)');

  headerMenuController(mediaQuery);
  mediaQuery.addListener(headerMenuController);

  function headerMenuController({ matches }) {
      if ( !matches ) {

      headerTopSub.forEach( function(el) {
        el.addEventListener( 'mouseenter', function() {

          el.classList.add(CONST.VISIBLE_CLASS)

        });
      });

      headerTopButton.forEach( function(el) {

        el.addEventListener( 'click', function(e) {
          e.preventDefault();
        });

        el.addEventListener( 'mouseenter', function() {

          if (el.children[1] != null) {
            el.children[1].classList.add(CONST.VISIBLE_CLASS)
          }

        });

        el.addEventListener( 'mouseleave', function() {

          if (el.children[1] != null) {
            el.children[1].classList.remove(CONST.VISIBLE_CLASS)
          }

        });

      });
    }
  }
}
