var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');
var CONFIG = require('./config.js');
var fn = require('./function.js');

module.exports = function(){
	fn.eachFiles(CONFIG.release, null, function(filePath, rootPath) {
		var targetFileName = path.basename(filePath);
		//Target only .html file
		if(targetFileName.indexOf('.html') !== -1 && targetFileName.indexOf('_utf') === -1){

						var str = iconv.decode(fs.readFileSync(filePath), 'utf8');
			fs.writeFileSync(filePath, iconv.encode(str, 'Shift_JIS'));

			console.log('covert Shift-Jis -> ' + filePath);
		}
	});
};