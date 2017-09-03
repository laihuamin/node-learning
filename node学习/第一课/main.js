const hello = require('./example.js');
hello();

require('./example.js')();

const hello2 = require('./example2.js');
hello2('lai');


require('./example2.js')('lai');

const hello3 = require('./example4.js');

hello3.say('lai');
hello3.eat('price');