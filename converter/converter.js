var fs = require('fs-extra');
var main  = require('./main.js');
var path = require('path');

function eachFiles(filepath, rootPath, callback) {

    if (!rootPath) {
        rootPath = filepath;
    }
    var stat = fs.statSync(filepath);
    if (!stat) {

    } else if (stat.isDirectory()) {
        try {
            var files = fs.readdirSync(filepath, '');

            if (!files) {

            } else {
                for (var _i in files)(function (i) {
                    var file = files[i];
                    
                    if (filepath.match(/.*\/$/)) {
                        eachFiles(filepath + file, rootPath, callback);
                    } else {
                        eachFiles(filepath + "/" + file, rootPath, callback);
                    }
                }(_i));
            }
        } catch (e1) {
            console.error("Directory " + filepath + " is unreadable.");
        }
    } else if (stat.isFile()) {
        if (callback) {
            callback.call(this, filepath, rootPath);
        }
    } else {
        console.error(filepath + " is not file or directory");
    }
}

//Try only all of .html file
eachFiles(__dirname + '/../public', null, function(filePath, rootPath) {
	var targetFileName = path.basename(filePath);
	if(path.basename(targetFileName).indexOf('.html') !== -1){
		main.mtgConvert(filePath);
		// Test code
		// main.mtgConvert(__dirname + '/../public/index.html');
	}
});
