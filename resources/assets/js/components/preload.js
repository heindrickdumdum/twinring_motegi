import CONST from './../constants';
import {scrollLock, scrollAble} from "./scroll-able-lock";

export default function preload() {
  const preloadWrapper = document.querySelector('.preload');
  const wrap = document.querySelector('#js-wrap');

  scrollLock();
  wrap.classList.add('is-entrance');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloadWrapper.classList.add('is-entrance');
    }, 500);

    setTimeout(() => {
      preloadWrapper.classList.add('is-exit');
      wrap.classList.add('is-exit');
      scrollAble();
    }, 5000);

    setTimeout(() => {
      preloadWrapper.classList.remove('is-entrance');
      preloadWrapper.classList.remove('is-exit');
      preloadWrapper.classList.add(CONST.IS_HIDE);
      wrap.classList.remove('is-entrance');
      wrap.classList.remove('is-exit');
    }, 12000);
  });
}
