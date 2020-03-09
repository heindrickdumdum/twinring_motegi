var fs = require('fs-extra');
var replace = require('replace');
var CONFIG = require('./config.js');

module.exports = function(){

	console.log('hi');
	
	replace({
	  regex: "foo",
	  replacement: "bar",
	  paths: CONFIG.release + '/index.html'
	});
};