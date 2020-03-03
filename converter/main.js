var fs = require('fs'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis

exports.mtgConvert = function (targetFile) {
	  
	console.log('hi');
	
	// Get html
	var htmlTags = fs.readFileSync(targetFile);
	var htmlTagsSJ = iconv.decode(htmlTags, 'Shift_JIS');

	// console.log(typeof htmlTagsSJ);
	var startLine = htmlTagsSJ.indexOf('<body>');
	var endLine = htmlTagsSJ.indexOf('</body>');

	var BODY_LENGTH = 6;

	// htmlTagsSJ.slice(startLine)
	var contentsTags = htmlTagsSJ.slice(startLine, endLine)
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

};