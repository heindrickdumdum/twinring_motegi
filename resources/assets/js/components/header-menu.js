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
      headerMenuSP();
    } else {
      headerMenuPC();
    }
  }

  // function for PC
  function headerMenuPC() {

  headerButton.forEach( function(el) {
      let elAttrib = el.getAttribute('data-target')

      el.addEventListener( 'click', function(e) {
        e.preventDefault();
      });

      el.addEventListener( 'mouseenter', function() {

        headerSub.classList.add(CONST.VISIBLE_CLASS)

        if(elAttrib != '#') {
          headerSubInner.forEach( function(e) {
            e.style.display = 'none';
          })

          document.querySelectorAll('[data-content="'+elAttrib+'"]').forEach( function(e) {
            e.style.display = 'block'
          })

          scrollLock()
        }

      });
    });

    // prevent element from clicking
    document.querySelector('.header-sub-content').addEventListener('click', function(e) {
      e.stopPropagation();
    });

    headerSub.addEventListener('click', function(e) {
      e.preventDefault();
      headerSub.classList.remove(CONST.VISIBLE_CLASS);

      scrollAble()
    })

    if(!headerSub.classList.contains(CONST.VISIBLE_CLASS)) {
      scrollAble()
    }

    headerClose.addEventListener( 'click', function(e) {
      e.preventDefault()

      headerSub.classList.remove(CONST.VISIBLE_CLASS)
      scrollAble()
    });

  } // end of function for PC

   // function for SP
  function headerMenuSP() {
      scrollAble()

      headerButtonSub.forEach( function(el) {
        let elAttrib = el.getAttribute('data-target')

        if(elAttrib != '#') {
          el.classList.add(CONST.IS_ACTIVE);

          el.addEventListener( 'click', function(e) {
            e.preventDefault();

            let thisButton = e.currentTarget;
            thisButton.classList.toggle(CONST.VISIBLE_CLASS);

            document.querySelectorAll('[data-content="'+elAttrib+'"]').forEach( function(content) {
              if(thisButton.classList.contains(CONST.VISIBLE_CLASS)) {
                headerSubInner.forEach( function(e) {
                  e.classList.remove(CONST.IS_ACTIVE);
                })
                content.classList.add(CONST.IS_ACTIVE);
                content.style.top = thisButton.offsetTop + thisButton.offsetHeight +'px';

                headerButtonSub.forEach( function(el) {
                  el.style.marginBottom = 0;
                  el.classList.remove(CONST.VISIBLE_CLASS);
                  thisButton.classList.add(CONST.VISIBLE_CLASS);
                });

                e.currentTarget.style.marginBottom = content.clientHeight +'px';
              } else {
                headerSubInner.forEach( function(e) {
                  e.classList.remove(CONST.IS_ACTIVE);
                })

                headerButtonSub.forEach( function(el) {
                  el.style.marginBottom = 0;
                });
              }
            });
          })
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
  }  // end of function for SP

}
