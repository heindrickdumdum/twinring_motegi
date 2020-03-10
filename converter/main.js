var fs = require('fs-extra');
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');

var CONFIG = require('./config.js');
var fn = require('./function.js');
var init = require('./init.js');
var arrangePath = require('./arrangePath.js');

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

	// Watch all directories and convert all files
	fn.eachFiles(CONFIG.release, null, function(filePath, rootPath) {
		var targetFileName = path.basename(filePath);
		//Target only .html file
		if(targetFileName.indexOf('.html') !== -1){
			fn.optimizeHtml(filePath);
			// Test code
			// fn.optimizeHtml(__dirname + '/../release/index.html');
		}
	});

	fn.optimizeHtmlParts(header.type.utf8, header.startTag, header.endTag, header.endTagLen, true);
	fn.optimizeHtmlParts(header.type.shiftjis, header.startTag, header.endTag, header.endTagLen, false);
	fn.optimizeHtmlParts(footer.type.utf8, footer.startTag, footer.endTag, footer.endTagLen, true);
	fn.optimizeHtmlParts(footer.type.shiftjis, footer.startTag, footer.endTag, footer.endTagLen, false);
}

init();
// convertHtml();
// arrangePath();


////ToDo
//1.Path
//2.move css and js under body
//3.separate CSS and JS for header & footer