var fs = require('fs-extra');
var replace = require('replace');
var path = require('path');
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

				console.log('filePath', filePath);
				
				var targetFileName = path.basename(filePath);
				
				//Target only .html file
				if(path.basename(targetFileName).indexOf('.html') !== -1){
					// Test code
					// fn.optimizeHtml(__dirname + '/../release/index.html');
					// console.log(replace);
					// replaced target is 'assets/'
					replace({
					  regex: 'assets/',
					  replacement: '../assets/',
					  paths: __dirname + '/../release/index.html'
					});

					// replaced target is '/assets/'
					replace({
					  regex: '/assets/',
					  replacement: '../assets/',
					  paths: __dirname + '/../release/index.html'
					});

					// console.log(array[index]);
				}
			});
			
			index += 1;
		}	
	}

	replaceAllPath(directoryThird);

};