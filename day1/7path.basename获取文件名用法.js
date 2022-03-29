const path = require('path')
var fsname = path.basename(path.join(__dirname + '/a/b/c/abc.txt'))
console.log(fsname);
var fana = path.basename(path.join(__dirname + '/a/b/c/abc.txt'), '.txt')
console.log(fana);