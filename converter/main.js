var fs = require('fs-extra');
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');

var CONFIG = require('./config.js');
var fn = require('./function.js');
var init = require('./init.js');
var arrangePath = require('./arrangePath.js');
var shiftjis = require('./shiftjis.js');
var scpContents = require('./scpContents.js');

function convertHtml(){
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

	fn.optimizeHtmlParts(header.type.utf8, header.startTag, header.endTag, header.endTagLen, true);
	fn.optimizeHtmlParts(header.type.shiftjis, header.startTag, header.endTag, header.endTagLen, false);
	fn.optimizeHtmlParts(footer.type.utf8, footer.startTag, footer.endTag, footer.endTagLen, true);
	fn.optimizeHtmlParts(footer.type.shiftjis, footer.startTag, footer.endTag, footer.endTagLen, false);

	// Watch all directories and convert all files
	fn.eachFiles(CONFIG.release, null, function(filePath, rootPath) {
		var targetFileName = path.basename(filePath);
		//Target only .html file
		if(targetFileName.indexOf('.html') !== -1){
			fn.optimizeHtml(filePath);
			iconv.decode(fs.readFileSync(filePath), 'Shift_JIS');
			// Test code
			// fn.optimizeHtml(__dirname + '/../release/index.html');
		}
	});
}

module.exports.init = init();
module.exports.convertHtml = convertHtml();
module.exports.arrangePath = arrangePath();
module.exports.init = shiftjis();
// module.exports.shiftjis = shiftjis(process.argv);
module.exports.scpContents = scpContents();
module.exports.convert = function(){
	init();
	arrangePath();
	convertHtml();
	shiftjis();
	scpContents();
};


