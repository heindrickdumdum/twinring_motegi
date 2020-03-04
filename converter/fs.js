var fs = require('fs-extra'); // fs module
var CONFIG = require('./config.js'); // fs module

// console.log(config.dist);
// config();

fs.copySync(CONFIG.dist, CONFIG.release);