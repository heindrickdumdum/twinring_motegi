var fs = require('fs-extra');
var replace = require('replace');
var CONFIG = require('./config.js');

// function eachFiles(filepath, rootPath, callback) {

// }

// //Try only all of .html file
// eachFiles(__dirname + '/../public', null, function(filePath, rootPath) {
// 	var targetFileName = path.basename(filePath);
// 	if(path.basename(targetFileName).indexOf('.html') !== -1){
// 		main.mtgConvert(filePath);
// 		// Test code
// 		// main.mtgConvert(__dirname + '/../public/index.html');
// 	}
// });

// fs.copySync(CONFIG.dist, CONFIG.release);
replace({
  regex: "foo",
  replacement: "bar",
  paths: CONFIG.release + '/index.html'
});