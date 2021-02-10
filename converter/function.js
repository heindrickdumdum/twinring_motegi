var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');
var CONFIG = require('./config.js');

module.exports = {
	writeFile(path, data) {
	  	fs.writeFileSync(path, data, function (err) {
			if (err) {
				throw err;
			}
	  	});
	},
	optimizeHtml: function (targetFile) {

		// Get all html
		var htmlTags;

		// Read html file
		htmlTags = iconv.decode(fs.readFileSync(targetFile), 'utf8');
		console.log('targetFile:%s', targetFile);

		//抽出 specific tags
		function getTags(start, end, startTagLen, endTagLen){
			var startLine = (typeof start === "string") ? htmlTags.indexOf(start) : start;
			var endLine = (typeof end === "string") ? htmlTags.indexOf(end) : end;
			var startTagLen = (!startTagLen) ? 0 : start.length;
			var endTagLen = (!endTagLen) ? 0 : end.length;
			console.log('startLine: %s startTagLen: %s', startLine, startTagLen);
			console.log('endLine: %s endTagLen: %s', endLine, endTagLen);

			var contentsTags = htmlTags.slice(startLine + startTagLen, endLine + endTagLen);

			console.log('htmlTags length: %s contentsTags length: %s', htmlTags.length, contentsTags.length);
			console.log('contents last 10:%s', contentsTags.slice(-10));

			return contentsTags;
		}

		//DOCTYPE~head
		var tagTop = getTags(0, CONFIG.tag.header.start);
		// contents
		var tagContent = getTags(CONFIG.tag.header.end, CONFIG.tag.footer.start, true);
		//end
		var tagBottom = getTags(CONFIG.tag.footer.end, CONFIG.tag.closed, true, true);

		//conbine tags
		var contentsTags = tagTop + tagContent + tagBottom;

		//remove gtm tags
		htmlTags = contentsTags;
		var contentsTagsTop = getTags(0, CONFIG.tag.gtmHeader.start);
		var contentsTagsBottom = getTags(CONFIG.tag.gtmHeader.end, CONFIG.tag.closed);
		contentsTags = contentsTagsTop + contentsTagsBottom;

		htmlTags = contentsTags;
		contentsTagsTop = getTags(0, CONFIG.tag.gtmFooter.start);
		contentsTagsBottom = getTags(CONFIG.tag.gtmFooter.end, CONFIG.tag.closed);
		contentsTags = contentsTagsTop + contentsTagsBottom;

		//remove lig assets
		htmlTags = contentsTags;
		contentsTagsTop = getTags(0, CONFIG.tag.ligAssets.start);
		contentsTagsBottom = getTags(CONFIG.tag.ligAssets.end, CONFIG.tag.closed);
		contentsTags = contentsTagsTop + contentsTagsBottom;

		contentsTags = contentsTags + '\n\n</html>'

		fs.writeFileSync(targetFile, contentsTags);
		// console.log('success: ' + targetFile);

	},
	optimizeHtmlParts: function (targetFile, startTag, endTag, endTagLen, utf8) {
		// Get all html
		var htmlTags;

		if(utf8 === true){
			htmlTags = fs.readFileSync(targetFile);
		} else {
			htmlTags = iconv.decode(fs.readFileSync(targetFile), 'utf8');
		}

		// remove unnecesarry tags
		var startLine = htmlTags.indexOf(startTag);
		var endLine = htmlTags.indexOf(endTag);
		var contentsTags = htmlTags.slice(startLine, endLine + endTagLen);

		// console.log('targetFile:%s \n startLine: %s endLine: %s', targetFile, startLine, endLine);

		//Update html files
		fs.writeFileSync(targetFile, contentsTags);

	},
	eachFiles: function(filePath, rootPath, callback) {

		var self = this;

		if (!rootPath) {
			rootPath = filePath;
		}
		var stat = fs.statSync(filePath);
		if (!stat) {

		} else if (stat.isDirectory()) {
			try {
				var files = fs.readdirSync(filePath, '');

				if (!files) {

				} else {
					for (var _i in files)(function (i) {
						var file = files[i];
						if (filePath.match(/.*\/$/)) {
							self.eachFiles(filePath + file, rootPath, callback);
						} else {
							self.eachFiles(filePath + "/" + file, rootPath, callback);
						}
					}(_i));
				}
			} catch (e1) {
				console.error("Directory " + filePath + " is unreadable.");
			}
		} else if (stat.isFile()) {
			if (callback) {
				callback.call(this, filePath, rootPath);
			}
		} else {
			console.error(filePath + " is not file or directory");
		}
	}
};