const os = require('os');
const path = require('path');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.userInfo());

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(__dirname);
console.log((path.basename(__dirname)));
console.log(path.extname(__dirname));












