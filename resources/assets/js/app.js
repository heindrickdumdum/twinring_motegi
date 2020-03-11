import parkmapButton from "./components/parkmap-button";
import headerTopNav from "./components/header-top-nav";
import headerMenu from "./components/header-menu";
import SmoothScroll from 'smooth-scroll';
import CollapseButton from "./components/collapse-button";
import ua from './components/ua';
import screenOrientation from './components/screen-orientation';

ua();
screenOrientation();
parkmapButton();
headerMenu();
headerTopNav();

new SmoothScroll('a[href^="#"]', {
  topOnEmptyHash: true,
  speed: 900,
  easing: 'easeInOutCubic'
});

new CollapseButton('.js-collapse-button');
