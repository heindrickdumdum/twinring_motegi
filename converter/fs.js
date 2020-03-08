var fs = require('fs-extra');
var CONFIG = require('./config.js');

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


var optimizeHtml = function (targetFile, startTag, endTag, endTagLen) {
	
	// Get html
	var htmlTags = fs.readFileSync(targetFile);

	// console.log(typeof htmlTags);
	var startLine = htmlTags.indexOf(startTag);
	var endLine = htmlTags.indexOf(endTag);

	var contentsTags = htmlTags.slice(startLine, endLine + endTagLen)

	//Update html files
	function writeFile(path, data) {
	  fs.writeFile(path, data, function (err) {
	    if (err) {
	        throw err;
	    }
	  });
	}
	writeFile(targetFile, contentsTags);

	console.log('success: ' + targetFile);
};

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

optimizeHtml(header.type.utf8, header.startTag, header.endTag, header.endTagLen);
optimizeHtml(header.type.shiftjis, header.startTag, header.endTag, header.endTagLen);
optimizeHtml(footer.type.utf8, footer.startTag, footer.endTag, footer.endTagLen);
optimizeHtml(footer.type.shiftjis, footer.startTag, footer.endTag, footer.endTagLen);



