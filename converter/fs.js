var fs = require('fs-extra');
var CONFIG = require('./config.js');

// console.log(config.dist);
// config();

fs.copySync(CONFIG.dist, CONFIG.release);

var directorySecond =CONFIG.directories[0];
// var directoryThird =CONFIG.directories[1];

//Clone assets directory to each 2nd directory
var cloneAssets = function(target){
	var index = 0;
	while (index < target.length) {
		var eachAssetsDirectory = CONFIG.release + target[index] + '/assets';
		fs.mkdirsSync(eachAssetsDirectory);
		fs.copySync(CONFIG.assets, eachAssetsDirectory);
		index++;
	}
};

cloneAssets(directorySecond);