var fs = require('fs-extra');
var iconv = require('iconv-lite'); // support Shift-jis

var CONFIG = require('./config.js');

var fn = require('./function.js');

// console.log(config.dist);
// config();
fs.copySync(CONFIG.dist, CONFIG.release);

var directorySecond =CONFIG.directories[0];
// var directoryThird =CONFIG.directories[1];

// Clone assets directory to each 2nd directory
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

fs.ensureDirSync(CONFIG.release + '/globalnavi');

//Create files in /globalnavi
var createCommonParts = function(){
	var index = 0;
	var cpfLen = CONFIG.commonParts.files.length;
	var baseFile = CONFIG.dist + '/index.html';
	while (index < cpfLen) {
		fs.copySync(baseFile, CONFIG.release + CONFIG.commonParts.directory + '/' + CONFIG.commonParts.files[index]);
		index+=1;
	}
};
createCommonParts();




var header = {
	type: {
		utf8: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[0],
		shiftjis: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[1]
	},
	startTag: CONFIG.tag.header.start,
	endTag: CONFIG.tag.header.end,
	endTagLen: CONFIG.tag.header.end.length
};
var footer = {
	type: {
		utf8: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[2],
		shiftjis: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[3]
	},
	startTag: CONFIG.tag.footer.start,
	endTag: CONFIG.tag.footer.end,
	endTagLen: CONFIG.tag.footer.end.length
};

fn.optimizeHtml(header.type.utf8, header.startTag, header.endTag, header.endTagLen, true);
fn.optimizeHtml(header.type.shiftjis, header.startTag, header.endTag, header.endTagLen, false);
fn.optimizeHtml(footer.type.utf8, footer.startTag, footer.endTag, footer.endTagLen, true);
fn.optimizeHtml(footer.type.shiftjis, footer.startTag, footer.endTag, footer.endTagLen, false);



