var express = require('express');
var fs = require('fs');

var router = express.Router();
console.log('dirname = '+__dirname);
var pkginfoPath='/home/free/UpgradeCenter/public/mi/upgrade/pkg.json';
/* GET home page. */
function getpackageInfo() {
    var pkginfo = JSON.parse(fs.readFileSync(pkginfoPath));
    console.log(JSON.stringify(pkginfo,null,4));
    return pkginfo;
}
var pkginfo = getpackageInfo();

router.get('/pkginfo', function(req, res, next) {
    console.log("Enter mi pkginfo");

    var result = {};
    result.status = 'ok';
    result.reason = 'successful';
    result.checkSum='';
    result.version ='';
    result.fileSize = 0;
    try
    {
        result.checkSum = pkginfo.checkSum;
        result.version = pkginfo.version;
        result.fileSize = pkginfo.fileSize;
        console.log('checkSum = '+result.checkSum);
    }
    catch (err)
    {
        result.status = 'err';
        result.reason = ''+err;
    }
    res.end(JSON.stringify(result));

});


router.get('/checkSum', function(req, res, next) {
    console.log("Enter mi checkSum");

    var result = {};
    result.status = 'ok';
    result.reason = 'successful';
    result.checkSum='';
    try
    {
        result.checkSum = pkginfo.checkSum;
        console.log('checkSum = '+result.checkSum);
    }
    catch (err)
    {
        result.status = 'err';
        result.reason = ''+err;
    }
    res.end(JSON.stringify(result));

});

router.get('/checkNewVersion', function(req, res, next) {
    console.log("Enter mi checkNewVersion");

    var result = {};
    var version='';
    result.status = 'ok';
    result.reason = 'successful';
    result.version='';
    try
    {
        result.version = pkginfo.version;
        console.log('version = '+result.version);
    }
    catch (err)
    {
        result.status = 'err';
        result.reason = ''+err;
    }
    res.end(JSON.stringify(result));
});

module.exports = router;