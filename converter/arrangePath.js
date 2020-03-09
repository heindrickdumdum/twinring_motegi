var fs = require('fs-extra');
var replace = require('replace');
var CONFIG = require('./config.js');
var fn = require('./function.js');

module.exports = function(){

	console.log('hi');
	
	replace({
	  regex: "foo",
	  replacement: "bar",
	  paths: __dirname + '/../release/index.html'
	});

	// fn.eachFiles(CONFIG.dist, null, function(filePath, rootPath) {
	// 	var targetFileName = path.basename(filePath);
	// 	//Target only .html file
	// 	if(path.basename(targetFileName).indexOf('.html') !== -1){
	// 		fn.optimizeHtml(filePath);
	// 		// Test code
	// 		// fn.optimizeHtml(__dirname + '/../release/index.html');
	// 	}
	// });
};