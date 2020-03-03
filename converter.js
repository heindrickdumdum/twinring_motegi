// var express = require('express');
// var app = express();

var fs = require('fs'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis

// Get html
var htmlTags = fs.readFileSync(__dirname + '/public/index.html');
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
writeFile(__dirname + '/public/index.html', contentsTags);