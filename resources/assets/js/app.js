import parkmapButton from "./components/parkmap-button";

import SmoothScroll from 'smooth-scroll';
import CollapseButton from "./components/collapse-button";



parkmapButton();


new SmoothScroll('a[href^="#"]', {
  topOnEmptyHash: true,
  speed: 900,
  easing: 'easeInOutCubic'
});

new CollapseButton('.js-collapse-button');
