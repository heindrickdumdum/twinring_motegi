var fs = require('fs-extra'); // fs module

fs.copySync(__dirname + '/../public', __dirname + '/../release');