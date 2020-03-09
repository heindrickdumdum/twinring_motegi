var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');
var CONFIG = require('./config.js');

module.exports = {
	writeFile(path, data) {

	  	fs.writeFile(path, data, function (err) {
	    	if (err) {
	        	throw err;
	    	}
	  	});
	},
	optimizeHtml: function (targetFile) {

		// Get all html
		var htmlTags;
		
		//Change to Shift-jis
		htmlTags = iconv.decode(fs.readFileSync(targetFile), 'Shift_JIS');

		//抽出 specific tags
		function getTags(start, end, endTagLen){
			var startLine = (typeof start === "number") ? start : htmlTags.indexOf(start);
			var endLine = (typeof end === "number") ? end : htmlTags.indexOf(end); 
			var endTagLen = (!endTagLen) ? 0 : endTagLen; 
			var contentsTags = htmlTags.slice(startLine, endLine + endTagLen);
			
			return contentsTags;
		}

		//DOCTYPE~head
		var tagTop = getTags(0, CONFIG.tag.header.start);
		// contents
		var tagContent = htmlTags.slice(CONFIG.tag.header.end, CONFIG.tag.footer.start);
		//end
		var tagBottom = htmlTags.slice(CONFIG.tag.header.end);

		console.log(tagTop);

		//conbine tags
		var contentsTags = tagTop + tagContent + tagBottom;
		this.writeFile(targetFile, contentsTags);
		// console.log('success: ' + targetFile);
		
	},
	optimizeHtmlParts: function (targetFile, startTag, endTag, endTagLen, utf8) {
		// Get all html
		var htmlTags;
		
		if(utf8 === true){
			htmlTags = fs.readFileSync(targetFile);
			console.log('decode: utf-8');
		} else {
			htmlTags = iconv.decode(fs.readFileSync(targetFile), 'Shift_JIS');
			console.log('decode: Shift_JIS');
		}

		// remove unnecesarry tags
		var startLine = htmlTags.indexOf(startTag);
		var endLine = htmlTags.indexOf(endTag);
		var contentsTags = htmlTags.slice(startLine, endLine + endTagLen);

		//Update html files
		this.writeFile(targetFile, contentsTags);

		console.log('success: ' + targetFile);
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