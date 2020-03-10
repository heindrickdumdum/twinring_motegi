var fs = require('fs-extra');
// var replace = require('replace');
var path = require('path');
var depth = require('depth');
var rootPath = require('app-root-path');
var replaceFile = require('replace-in-file');
var CONFIG = require('./config.js');
var fn = require('./function.js');

module.exports = function(){

	var directorySecond = CONFIG.directories[0];
	var directoryThird = CONFIG.directories[1];
	
	// console.log('directorySecond', directorySecond);
	// CONFIG.directories[1]


		// //Go to each directory
		// while (index < len) {

		// 	//Go to each file in the directory
		// 	fn.eachFiles(CONFIG.release + array[index], null, function(filePath, rootPath) {
				
		// 		var targetFileName = path.basename(filePath);
				
		// 		//Target only .html file
		// 		if(targetFileName.indexOf('.html') !== -1){
		// 			// console.log('hi1', filePath);
		// 			// Test code
		// 			// fn.optimizeHtml(__dirname + '/../release/index.html');
		// 			// console.log(replace);
		// 			// replaced target is 'assets/'
		// 			replace({
		// 			  regex: 'assets/',
		// 			  replacement: '../assets/',
		// 			  paths: filePath
		// 			});
		// 			// console.log('hi2');

		// 			// replaced target is '/assets/'
		// 			replace({
		// 			  regex: '/assets/',
		// 			  replacement: '../assets/',
		// 			  paths: filePath
		// 			});
		// 			// console.log('hi3');

		// 			// console.log(array[index]);
		// 		}
		// 	});
			
		// 	index += 1;
		// }
	
	fn.eachFiles(CONFIG.release, null, function(filePath, rootPath) {
		var targetFileName = path.basename(filePath);
		//Target only .html file
		if(targetFileName.indexOf('.html') !== -1){
			
			//arrange clear path
			var thisPath = path.normalize(filePath);
			var thisRootPath = path.normalize(rootPath);
			var thisSimplePath = thisPath.replace(thisRootPath, '');

			//get depth -> 0, 1, 2 ...
			var thisDepth = depth(thisSimplePath);

			var relativePath = function(selfDepth){
				if(selfDepth === 0 || selfDepth === 1){
					return './assets';
				} else if(selfDepth === 2){
					return './../assets';
				} else if(selfDepth === 3){
					return './../../assets';
				}
			};

			var fromArray = [
				new RegExp('assets/'), new RegExp('/assets/')
			];

			console.log('hi3');

			// var fromStr = '/'+/assets/g;

			var options = {
				files: thisPath,
				from: /\/assets/g,
				to: relativePath(thisDepth)
				// from: /<meta/g,
				// to: '<div'
			};

			replaceFile(options)
				.then(results => {
					replaceFile(options);
					console.log('rep');
				})
				.catch(error => {
					console.error('done to replace in ' + thisPath, error);
				});

			console.log('thisPath', thisPath);
		}
	});
};