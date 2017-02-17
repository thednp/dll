// DLL.js | Minify
// Minify script for the js files in root folder
// Usage: npm run min

var fs = require('fs');
var path = require('path');
var uglify = require('uglify-js');
var pack = require('./package.json');
var version = 'v'+pack.version;
var license = pack.license+'-License';

console.log('Minifying DLL.js ' + version + '..');

// Helper Functions:
function minify(srcPath, writePath) {
  fs.writeFile(writePath,
    ('// DLL.js ' + version + ' | © dnp_theme | ' + license + '\n'
    + uglify.minify(srcPath).code), function (err) {
    if (err) return handleError(err);
    console.log(srcPath+' is done.');
  });
}
function handleError(err) {
  console.error(err);
  process.exit(1);
}

// Minify file
minify('dll.js', 'dist/dll.min.js');
