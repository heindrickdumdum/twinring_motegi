import CONST from './../constants';
import {scrollLock, scrollAble} from "./scroll-able-lock";

export default function headerMenu() {
  const headerButton = document.querySelectorAll('.js-header-button'),
        headerButtonSub = document.querySelectorAll('.js-header-button-sub'),
        headerSubInner = document.querySelectorAll('.js-header-sub-content-inner'),
        headerClose = document.querySelector('#js-header-close'),
        headerSub = document.querySelector('#js-header-sub'),
        headerToggle = document.querySelector('#js-header-toggle'),
        headerToggleInner = document.querySelector('#js-header-toggle-inner'),
        headerBurger = document.querySelector('#js-header-burger');

  let mediaQuery = window.matchMedia('(max-width: 749px)');

  headerMenuController(mediaQuery);
  mediaQuery.addListener(headerMenuController);

  function headerMenuController({ matches }) {
    if ( matches ) {

      scrollAble();

      headerButtonSub.forEach( function(el) {
        let elAttrib = el.getAttribute('href')

        if(elAttrib != '#') {
          el.classList.add(CONST.IS_ACTIVE);

          el.addEventListener( 'click', function(e) {
            e.preventDefault();

              el.classList.toggle(CONST.VISIBLE_CLASS);
          });
        }
      })

      headerBurger.addEventListener( 'click', function(e) {
        e.preventDefault();
          e.currentTarget.classList.toggle(CONST.IS_ACTIVE);
          headerToggle.classList.toggle(CONST.IS_ACTIVE);

          if(headerToggle.classList.contains(CONST.IS_ACTIVE)) {
            headerToggle.style.maxHeight = headerToggleInner.clientHeight+'px';

            scrollLock();
          } else {
            headerToggle.style.maxHeight = 0;

            scrollAble();
          }
      });


      headerButton.forEach( function(el) {
        let elAttrib = el.getAttribute('href')

        el.addEventListener( 'click', function(e) {
          e.preventDefault();

          if(elAttrib != '#') {
            console.log(elAttrib);

            headerSubInner.forEach( function(e) {
              e.classList.remove(CONST.IS_ACTIVE);
            })
            
            document.querySelectorAll(elAttrib).forEach( function(e) {
              e.classList.add(CONST.IS_ACTIVE);
            });
          }
        });
      });

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
