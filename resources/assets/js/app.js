import parkmapButton from "./components/parkmap-button";
import headerTopNav from "./components/header-top-nav";
import headerMenu from "./components/header-menu";
import SmoothScroll from 'smooth-scroll';

parkmapButton();
headerMenu();
headerTopNav();

new SmoothScroll('a[href^="#"]', {
  topOnEmptyHash: true,
  speed: 900,
  easing: 'easeInOutCubic'
});

/*Subpage Collapse*/
document.querySelector('.js-collapse-button').onclick = function() {
  document.querySelector('.subpage-collapse-description').classList.toggle('hidden');
};