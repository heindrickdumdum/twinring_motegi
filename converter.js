// var express = require('express');
// var app = express();

var fs = require('fs'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis

// Get html
var htmlTags = fs.readFileSync(__dirname + '/public/index.html');
var retStr = iconv.decode(htmlTags, 'Shift_JIS');

console.log(retStr);

//Change HTML to STR
// var htmlTags =  document;
// var contentsTags = document.getElementsByTagName('body');
// Get </head>

// Remove before </head>

// Get </body>

// Remove after </body>