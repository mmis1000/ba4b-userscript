var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('package.json'));
process.stdout.write(pkg.version);
