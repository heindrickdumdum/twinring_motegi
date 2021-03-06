var fs = require('fs-extra');
var path = require('path');
var depth = require('depth');
var rootPath = require('app-root-path');
var replaceFile = require('replace-in-file');
var CONFIG = require('./config.js');
var fn = require('./function.js');

module.exports = function(){

	var directorySecond = CONFIG.directories[0];
	var directoryThird = CONFIG.directories[1];
	var relativePath = function(selfDepth){
		if(selfDepth === 0 || selfDepth === 1){
			return './assets';
		} else if(selfDepth === 2){
			return './../assets';
		} else if(selfDepth === 3){
			return './../../assets';
		}
	};

	fn.eachFiles(CONFIG.release, null, function(filePath, rootPath) {
		var targetFileName = path.basename(filePath);
		//Target only .html file
		if(filePath.indexOf('globalnavi/') !== -1 && targetFileName.indexOf('.html') !== -1){
			// console.log('GLOBALNAVI: replace html file path: %s', filePath);
			//arrange clear path
			var thisPath = path.normalize(filePath);
			var thisRootPath = path.normalize(rootPath);
			var thisSimplePath = thisPath.replace(thisRootPath, '');

			//get depth -> 0, 1, 2 ...
			var thisDepth = depth(thisSimplePath);

			//Settings for replace
			var options = {
				files: thisPath,
				from: [/\/assets/g, /<meta charset="UTF-8">/g, /<meta property="og:image" content="https:\/\/www.twinring.jp\/home.\/assets\/top\/img\/ogp.png">/g],
				to: ['/globalnavi/assets', '<meta charset="SHIFT-JIS">', '<meta property="og:image" content="https://www.twinring.jp/assets/top/img/ogp.png">']
			};
			replaceFile.sync(options);

		} else if(filePath.indexOf('top/') !== -1 && targetFileName.indexOf('.html') !== -1){
			// console.log('TOP: replace html file path: %s', filePath);
			//arrange clear path
			var thisPath = path.normalize(filePath);
			var thisRootPath = path.normalize(rootPath);
			var thisSimplePath = thisPath.replace(thisRootPath, '');

			//get depth -> 0, 1, 2 ...
			var thisDepth = depth(thisSimplePath);

			//Settings for replace
			var options = {
				files: thisPath,
				from: [/\/assets/g, /<meta charset="UTF-8">/g, /<meta property="og:image" content="https:\/\/www.twinring.jp\/home\/top\/assets\/top\/img\/ogp.png">/g],
				to: ['/top/assets', '<meta charset="SHIFT-JIS">', '<meta property="og:image" content="https://www.twinring.jp/assets/top/img/ogp.png">']
			};
			replaceFile.sync(options);

		} else if(targetFileName.indexOf('.html') !== -1){
				// console.log('CONTENTS: replace html file path: %s', filePath);
				//arrange clear path
				var thisPath = path.normalize(filePath);
				var thisRootPath = path.normalize(rootPath);
				var thisSimplePath = thisPath.replace(thisRootPath, '');

				//get depth -> 0, 1, 2 ...
				var thisDepth = depth(thisSimplePath);

				//Settings for replace
				var options = {
					files: thisPath,
					from: [/\/assets/g, /<meta charset="UTF-8">/g, /<meta property="og:image" content="https:\/\/www.twinring.jp\/home.\/assets\/top\/img\/ogp.png">/g, /https:\/\/www.twinring.jp\/top\.\/assets\/images\/ogp.png/g],
					to: [relativePath(thisDepth), '<meta charset="SHIFT-JIS">', '<meta property="og:image" content="https://www.twinring.jp/assets/top/img/ogp.png">', 'https://www.twinring.jp/top/assets/images/ogp.png']
				};
				replaceFile.sync(options);

		} else if (filePath.indexOf('globalnavi') !== -1 && targetFileName.indexOf('.css') !== -1){
			//Settings for replace
			// console.log('GLOBALNAVI: replace css file path: %s', filePath);
			//console.log('GLOBALNAVI: replace css file: %s', targetFileName);
			var options = {
				files: filePath,
				from: [/\/assets/g],
				to: ['/globalnavi/assets']
			};
			replaceFile.sync(options);

		} else if (filePath.indexOf('top/') !== -1 && targetFileName.indexOf('.css') !== -1){
			//Settings for replace
			// console.log('TOP: replace css file path: %s', filePath);
			//console.log('TOP: replace css file: %s', targetFileName);
			var options = {
				files: filePath,
				from: [/\/assets/g],
				to: ['/top/assets']
			};
			replaceFile.sync(options);

		} else if (targetFileName.indexOf('.css') !== -1){
			//Settings for replace
			// console.log('CONTENTS: replace css file path: %s', filePath);
			//console.log('CONTENTS: replace css file: %s', targetFileName);
			var options = {
				files: filePath,
				from: [/\/assets/g],
				to: ['..']
			};
			replaceFile.sync(options);
		}
	});
};