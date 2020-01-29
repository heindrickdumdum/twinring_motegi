'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
// https://github.com/frontainer/frontplate-cli/tree/master/config
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  return {
    clean: {},
    html: {},
    style: production ? require('./config/style.config.production') : require('./config/style.config'),
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [
      {
        src: `${FRP_SRC}/sprites/icon/*.{png,gif,jpg}`,
        destImage: `${FRP_SRC}/images/icon.png`,
        destCSS: `${FRP_SRC}/sass/sprites/_icon.scss`,
        imgPath: '../images/icon.png',
        padding: 2,
        scale: 0.5,
        mixin: true,
        selector: true
      }
    ],
    test: {}
  }
};
