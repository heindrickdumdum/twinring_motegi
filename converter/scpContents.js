var fs = require('fs-extra'); // fs module
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');
var CONFIG = require('./config.js');
var fn = require('./function.js');
var scpClient = require('scp2')

const scpConfig ={
    host: process.env.MOTEGI_SCP_HOST,
    username: process.env.MOTEGI_SCP_USERNAME,
    password: process.env.MOTEGI_SCP_PASSWORD,
    path: process.env.MOTEGI_SCP_DIST_PATH
};

module.exports = function(){

    //console.log(process.env);

    scpClient.scp(
            process.env.MOTEGI_SCP_SRC_PATH,
            scpConfig,
            function(err) {
                console.log(err);
            }
    );

};