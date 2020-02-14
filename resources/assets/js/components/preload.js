import CONST from './../constants';
import {scrollLock, scrollAble} from "./scroll-able-lock";

export default function preload() {
  const preloadWrapper = document.querySelector('.js-preload');
  const wrap = document.querySelector('#js-wrap');
  const mvList = document.querySelector('.js-mv-list');

  scrollLock();
  wrap.classList.add('is-entrance');

  window.addEventListener('load', () => {
    mvList.classList.add('is-show');

    setTimeout(() => {
      preloadWrapper.classList.add('is-entrance');
    }, 500);

    setTimeout(() => {
      wrap.classList.add('is-exit');
    }, 1500);

    setTimeout(() => {
      preloadWrapper.classList.add('is-exit');
      scrollAble();
    }, 2500);

    setTimeout(() => {
      preloadWrapper.classList.remove('is-entrance');
      preloadWrapper.classList.remove('is-exit');
      preloadWrapper.classList.add(CONST.IS_HIDE);
      wrap.classList.remove('is-entrance');
      wrap.classList.remove('is-exit');
    }, 4000);
  });
}
