var fs = require('fs-extra');
var replace = require('replace');
var CONFIG = require('./config.js');
var fn = require('./function.js');

module.exports = function(){

	var directorySecond = CONFIG.directories[0];
	var directoryThird = CONFIG.directories[1];
	
	// console.log('directorySecond', directorySecond);
	// CONFIG.directories[1]

	
	function replaceAllPath(array){
		var index = 0;
		var len = array.length;

		//Go to each directory
		while (index < len) {

			//Go to each file in the directory
			fn.eachFiles(CONFIG.release + array[index], null, function(filePath, rootPath) {
				var targetFileName = path.basename(filePath);
				//Target only .html file
				if(path.basename(targetFileName).indexOf('.html') !== -1){
					// Test code
					// fn.optimizeHtml(__dirname + '/../release/index.html');

					// replaced target is 'assets/'
					replace({
					  regex: 'assets/',
					  replacement: '../assets/',
					  paths: filePath
					});

					// replaced target is '/assets/'
					replace({
					  regex: '/assets/',
					  replacement: '../assets/',
					  paths: filePath
					});

					console.log(filePath);
				}
			});
			
			index += 1;
		}	
	}

	replaceAllPath(directoryThird);

};