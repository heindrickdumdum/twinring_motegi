import CONST from './../constants';

const wrap = document.querySelector('#js-wrap');

let scrollTop = 0;
export const ableScroll = () => {

   wrap.classList.remove(CONST.IS_ACTIVE);
   wrap.style.top = '';

   document.documentElement.scrollTop = scrollTop;
 }

export const lockScroll = () => {
  scrollTop = document.documentElement.scrollTop;

  wrap.classList.add(CONST.IS_ACTIVE);
  wrap.style.top = `-${scrollTop}px`;
}

export function scrollAble() {
  ableScroll();
}

export function scrollLock() {
  lockScroll();
}
