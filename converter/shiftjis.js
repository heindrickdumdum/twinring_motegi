// var fs = require('fs-extra'); // fs module
// var iconv = require('iconv-lite'); // support Shift-jis
// var CONFIG = require('./config.js');
// var fn = require('./function.js');

// module.exports = function(command){
// 	var argv = command;
// 	var argvLen = argv.length;
// 	var index = 3; // Skip 1st, 2nd, 3rd arguments in commandline(npm run shiftjis)

// 	while (index < argvLen) {
// 		var targetFile = CONFIG.release + argv[index];

// 		if(argv[index].indexOf('.html') !== -1){
// 			console.log('Hi,' + argv[index]);
// 			iconv.decode(fs.readFileSync(targetFile), 'Shift_JIS');
// 			index+=1;
// 		}
// 	}
// };