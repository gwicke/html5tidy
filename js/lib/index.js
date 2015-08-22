var FFI = require('ffi');
var fs = require('fs');
var path = require('path');

var libPath;
fs.readdirSync(path.resolve(__dirname, '../../target/release')).forEach(function(file) {
  if (/^libhtml5tidy/.test(file)) {
    libPath = file;
  }
});

var lib = FFI.Library(path.resolve(__dirname, '../../target/release', libPath), {
  'html5tidy': [ 'CString', [ 'pointer' ] ],
});

var input = fs.readFileSync('/tmp/test.html');
var startTime = Date.now();
var n = 1250;
//input = new Buffer("foo");
for (var i = 0; i < n; i++) {
    var html = lib.html5tidy(input);
}
console.log((Date.now() - startTime) / n, "ms per iteration");
