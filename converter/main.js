var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis

exports.mtgConvert = function (targetFile) {
	
	// Get html
	var htmlTags = fs.readFileSync(targetFile);
	var htmlTagsSJ = iconv.decode(htmlTags, 'Shift_JIS');

	// console.log(typeof htmlTagsSJ);
	var startLine = htmlTagsSJ.indexOf('</header>');
	var endLine = htmlTagsSJ.indexOf('<footer class="footer">');

	var HEADER_TAG_LENGTH = 9;

	// htmlTagsSJ.slice(startLine)
	var contentsTags = htmlTagsSJ.slice(startLine + HEADER_TAG_LENGTH, endLine)
	// console.log(contentsTags);

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