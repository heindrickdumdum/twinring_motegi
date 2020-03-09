var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis

module.exports = {
	optimizeHtml: function (targetFile, startTag, endTag, endTagLen, utf8) {
	
		// Get html
		var htmlTags;
		
		if(utf8 === true){
			htmlTags = fs.readFileSync(targetFile);
			console.log('decode: utf-8');
		} else {
			htmlTags = iconv.decode(fs.readFileSync(targetFile), 'Shift_JIS');
			console.log('decode: Shift_JIS');
		}

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
	}
}