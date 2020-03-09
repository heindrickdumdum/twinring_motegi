var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');

module.exports = {
	writeFile(path, data) {

	  	fs.writeFile(path, data, function (err) {
	    	if (err) {
	        	throw err;
	    	}
	  	});
	},
	optimizeHtml: function (targetFile, startTag, endTag, endTagLen, utf8) {

		// Get all html
		var htmlTags;
		
		if(utf8 === true){
			htmlTags = fs.readFileSync(targetFile);
			console.log('decode: utf-8');
		} else {
			htmlTags = iconv.decode(fs.readFileSync(targetFile), 'Shift_JIS');
			console.log('decode: Shift_JIS');
		}
		

		//DOCTYPE~head
		// contents
		//end
		
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
		console.log('startLine', startLine);

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