import constants from '../constants/index';
import orientation from 'screen-orientation';

export default function screenOrientation() {
  let init = () => {
    constants.$window.on('load', function () {
      if (orientation().direction === 'portrait') {
        constants.$html.addClass('is-portrait');
      } else {
        constants.$html.addClass('is-landscape');
      }

      //Scroll to ID
      if(window.location.hash) {
        setTimeout(function(){
          const y = document.querySelector(window.location.hash).getBoundingClientRect().top + window.scrollY-50;
          window.scroll({
            top: y,
            behavior: 'smooth'
          });
        },100);
      }
    });

    constants.$window.on('resize', function (e) {
      e.preventDefault();

      if (orientation().direction === 'portrait') {
        constants.$html.removeClass('is-landscape');
        constants.$html.addClass('is-portrait');
      } else {
        constants.$html.removeClass('is-portrait');
        constants.$html.addClass('is-landscape');
      }
    })
  }

  constants.$document.ready(init());
}