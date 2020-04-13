var fs = require('fs-extra'); // fs module
var path = require('path');
var CONFIG = require('./config.js');
var fn = require('./function.js');
var scpClient = require('scp2')
var async = require('async');

module.exports.createSCPConfig = function() {


};

module.exports = function(){

	var scpConfig ={
			host: CONFIG.scp.host,
			username: CONFIG.scp.username,
			password: CONFIG.scp.password,
			path: ''
		};

	console.log(scpConfig)
	scpClient.scp(
			CONFIG.scp.dokidoki.src,
			scpConfig,
			function(err) {
				console.log(err);
			}
	);

};