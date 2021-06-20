import $ from 'jquery';

const constants = {
  IS_ACTIVE: 'is-active',
  IS_HIDE: 'is-hide',
  IS_FOCUS: 'is-focus',
  IS_FIXED: 'is-fixed',
  VISIBLE_CLASS: 'is-visible',
  DURATION: 300,
  BREAKPOINT_MOBILE: 749,
  SLIDES_PER_VIEW: 3,
  SLIDES_PER_SHIFT: 1,
  VIEWPORT_WIDTH: window.innerWidth || document.documentElement.clientWidth,
  $window: $(window),
  $document: $(document),
  $htmlBody: $('html, body'),
  $html: $('html'),
  $body: $('body')
};

export default constants;
