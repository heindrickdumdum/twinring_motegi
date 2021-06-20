import CONST from './../constants';
import {scrollLock, scrollAble} from "./scroll-able-lock";

export default function headerMenu() {

  const headerButton = document.querySelectorAll('.js-header-button'),
        headerButtonSub = document.querySelectorAll('.js-header-button-sub'),
        headerSubInner = document.querySelectorAll('.js-header-sub-content-inner'),
        headerSub = document.querySelectorAll('.js-header-sub'),
        headerSubContent = document.querySelectorAll('.js-header-sub-content'),
        headerClose = document.querySelectorAll('.js-header-close'),
        headerOverlay = document.querySelector('#js-overlay'),

        headerSP = document.querySelector('#js-header-sp'),
        headerBurgerWrap = document.querySelector('#js-header-burger-wrap'),
        headerBurger = document.querySelector('#js-header-burger'),
        headerToggle = document.querySelector('#js-header-toggle'),
        headerToggleInner = document.querySelector('#js-header-toggle-inner');

  const wrap = document.querySelector('#js-wrap');
  //const emergencyNews = document.querySelector('#emergencynews');

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

    headerButton.forEach( el => {
      let elAttrib = el.dataset.target;
      let target = document.querySelector('.js-header-sub[data-content="'+elAttrib+'"]');

      el.addEventListener( 'click', e => {
        e.preventDefault();
      });

      el.addEventListener('mouseenter', e => {
        e.preventDefault();

        target.classList.add(CONST.VISIBLE_CLASS)

        if(target.classList.contains(CONST.VISIBLE_CLASS)) {
          wrap.style.top = `${wrap.getBoundingClientRect().top}px`;
          wrap.classList.add(CONST.IS_ACTIVE);

          headerOverlay.classList.add(CONST.VISIBLE_CLASS);

          headerSub.forEach( e => {
            e.classList.remove(CONST.VISIBLE_CLASS);
          })
          target.classList.add(CONST.VISIBLE_CLASS)
        }

      })

    });

    // prevent element from clicking
    headerSubContent.forEach( e => {
      e.addEventListener('click', contentInner => {
        contentInner.stopPropagation();
      });
    });

    headerOverlay.addEventListener('mouseenter', e => {
      e.preventDefault();
      headerSub.forEach( sub => {
        sub.classList.remove(CONST.VISIBLE_CLASS);
      })

      e.currentTarget.classList.remove(CONST.VISIBLE_CLASS);

      wrap.classList.remove(CONST.IS_ACTIVE);
      wrap.style.top = '';
    })

    headerClose.forEach( e => {
      e.addEventListener( 'click', close => {
        close.preventDefault()

        headerSub.forEach( sub => {
          sub.classList.remove(CONST.VISIBLE_CLASS);
        })
        headerOverlay.classList.remove(CONST.VISIBLE_CLASS);
        wrap.classList.remove(CONST.IS_ACTIVE);

        wrap.style.top = '';
      });
    });

  } // end of function for PC


   // function for SP
  function headerMenuSP() {
      scrollAble()

      window.addEventListener('scroll', e => {
        if(e.currentTarget.scrollY > 50) {
          headerSP.classList.add(CONST.IS_ACTIVE);
        }
      })

      headerButtonSub.forEach( el => {
        let elAttrib = el.dataset.target

        if(elAttrib != '#') {
          el.classList.add(CONST.IS_ACTIVE);

          el.addEventListener( 'click', e => {
            e.preventDefault();

            let thisButton = e.currentTarget;
            thisButton.classList.toggle(CONST.VISIBLE_CLASS);

            document.querySelectorAll('[data-content="'+elAttrib+'"]').forEach( content => {
              if(thisButton.classList.contains(CONST.VISIBLE_CLASS)) {
                headerSubInner.forEach( function(e) {
                  e.classList.remove(CONST.IS_ACTIVE);
                })
                content.classList.add(CONST.IS_ACTIVE);
                content.style.top = thisButton.offsetTop + thisButton.offsetHeight +'px';

                headerButtonSub.forEach( el => {
                  el.style.marginBottom = 0;
                  el.classList.remove(CONST.VISIBLE_CLASS);
                  thisButton.classList.add(CONST.VISIBLE_CLASS);
                });

                e.currentTarget.style.marginBottom = content.clientHeight +'px';
              } else {
                headerSubInner.forEach( e => {
                  e.classList.remove(CONST.IS_ACTIVE);
                })

                headerButtonSub.forEach( el => {
                  el.style.marginBottom = 0;
                });
              }
            });
          })
        }
     })


    // burger menu
    headerBurger.addEventListener( 'click', e => {
      e.preventDefault();

        e.currentTarget.classList.toggle(CONST.IS_ACTIVE);
        headerToggle.classList.toggle(CONST.IS_ACTIVE);
        headerBurgerWrap.classList.toggle(CONST.IS_ACTIVE);

        if(headerToggle.classList.contains(CONST.IS_ACTIVE)) {
          headerToggle.style.maxHeight = headerToggleInner.clientHeight+'px';
          //emergencyNews.style.display = 'none';
          scrollLock();
        } else {
          headerToggle.style.maxHeight = 0;
          //emergencyNews.style.display = 'block';
          scrollAble();
        }
    });
  }  // end of function for SP

}
