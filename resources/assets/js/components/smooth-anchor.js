import SmoothScroll from 'smooth-scroll';

export default function smoothAnchor(params) {
  if(!params.target) return;
  if(!params.id) return;
  
  const defaultOptions = {
    topOnEmptyHash: true,
    speed: 600,
    easing: 'easeInOutCubic',
    updateURL: true,
    popstate: true,
    emitEvents: true
  }

  const config = !params.options ? defaultOptions : params.options;

  params.id = new SmoothScroll(params.target, config);
}