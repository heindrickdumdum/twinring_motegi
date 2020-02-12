import CONST from './../constants';

export default function headerTopNav() {
  const headerTopButton = document.querySelectorAll('.js-top-nav-button'),
        headerTopSub = document.querySelectorAll('.header-top-nav-sub'),
        headerButtonLang = document.querySelector('.js-button-lang'),
        headerLang = document.querySelector('.js-header-lang');

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

    }
  }
}
