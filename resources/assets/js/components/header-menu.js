import CONST from './../constants';
import {scrollLock, scrollAble} from "./scroll-able-lock";

export default function headerMenu() {
  const headerButton = document.querySelectorAll('.js-header-button'),
        headerSubInner = document.querySelectorAll('.js-header-sub-content-inner'),
        headerClose = document.querySelector('#js-header-close'),
        headerSub = document.querySelector('#js-header-sub');

  let mediaQuery = window.matchMedia('(max-width: 749px)');

  headerMenuController(mediaQuery);
  mediaQuery.addListener(headerMenuController);

  function headerMenuController({ matches }) {
    if ( matches ) {

      scrollAble()

    } else {

      headerButton.forEach( function(el) {
        let elAttrib = el.getAttribute('href')

        el.addEventListener( 'click', function(e) {
          e.preventDefault();
        });

        el.addEventListener( 'mouseenter', function() {

          if(elAttrib != '#') {
            headerSub.classList.add(CONST.VISIBLE_CLASS)

            headerSubInner.forEach( function(e) {
              e.style.display = 'none';
            })
            document.querySelector(elAttrib).style.display = 'block'

            scrollLock()
          } else {
            headerSub.classList.remove(CONST.VISIBLE_CLASS)
            scrollAble()
          }

        });
      });

      if(!headerSub.classList.contains(CONST.VISIBLE_CLASS)) {
        scrollAble()
      }

      headerClose.addEventListener( 'click', function(e) {
        e.preventDefault()

        headerSub.classList.remove(CONST.VISIBLE_CLASS)
        scrollAble()
      });
    }

  }
}
