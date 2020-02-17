import CONST from './../constants';

export default function headerTopNav() {
  const headerButtonLang = document.querySelector('.js-button-lang'),
        headerLang = document.querySelector('.js-header-lang'),
        headerTopButton = document.querySelectorAll('.js-top-nav-button'),
        headerTopSub = document.querySelectorAll('.js-top-nav-sub');

  let mediaQuery = window.matchMedia('(max-width: 749px)');

  headerTopNavController(mediaQuery);
  mediaQuery.addListener(headerTopNavController);

  function headerTopNavController({ matches }) {
      if ( !matches ) {

      headerButtonLang.addEventListener('click', (e) => {
        e.preventDefault();
        let buttonThis = e.currentTarget;

        buttonThis.classList.toggle(CONST.IS_ACTIVE);
        headerLang.classList.toggle(CONST.IS_ACTIVE);
      })

    } else {
      headerTopButton.forEach( function(el) {

        el.addEventListener( 'click', function(e) {
          e.preventDefault();

          if (el.children[1] != null) {

            headerTopSub.forEach( function(e) {
              e.classList.toggle(CONST.IS_ACTIVE)
            });
          }
        });

      });
    }
  }
}
