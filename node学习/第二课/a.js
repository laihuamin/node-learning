console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log(`in a b.done ${b.done}`);
exports.done = true;
console.log('a ending');