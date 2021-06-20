var fs = require('fs-extra'); // fs module
var path = require('path');
var CONFIG = require('./config.js');
var fn = require('./function.js');
var scpClient = require('scp2')
var async = require('async');

module.exports.createSCPConfig = function() {


};

module.exports = function(){

	var sendContentsList = CONFIG.scp.contents;

	// console.log(sendContentsList);

	async.each(sendContentsList, function(sendContents, callback) {
		// console.log(sendContents);

		var scpConfig ={
				host: CONFIG.scp.host,
				username: CONFIG.scp.username,
				password: CONFIG.scp.password,
				path: sendContents.dist
			};

		// console.log(scpConfig);


		scpClient.scp(
			sendContents.src,
			scpConfig,
			function(err) {
				// console.log(err);
				callback(err);
			});

		callback(null);

	},
	function(err) {
		if(err) {
			// console.log(err);
		} else {
			// console.log("Finish to transfer contents");
		}
	});

};