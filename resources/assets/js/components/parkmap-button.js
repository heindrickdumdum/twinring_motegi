import CONST from './../constants';

export default function parkmapButton() {
  const parkmapNumber = document.querySelectorAll('.js-parkmap-number'),
        parkmapButton = document.querySelectorAll('.js-parkmap-button');

  let mediaQuery = window.matchMedia('(max-width: 749px)');

  parkMapController(mediaQuery);
  mediaQuery.addListener(parkMapController);

  function parkMapController({ matches }) {
    if ( !matches ) {
      parkmapNumber.forEach( (e, num) => {
        e.addEventListener('mouseenter', () => {
          parkmapButton.forEach( (e) => {
            e.classList.remove(CONST.IS_ACTIVE)
          })
          parkmapButton[num].classList.add(CONST.IS_ACTIVE)
        })

        e.addEventListener('mouseleave', () => {
          parkmapButton.forEach( (e) => {
            e.classList.remove(CONST.IS_ACTIVE)
          })
        });
      })
    }
  }
}
