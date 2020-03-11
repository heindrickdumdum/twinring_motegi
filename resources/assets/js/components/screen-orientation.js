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