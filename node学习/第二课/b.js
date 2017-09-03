console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log(`in b a.done ${a.done}`);
exports.done = true;
console.log('b ending');