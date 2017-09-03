// const hello = require('./example.js');
// hello.name('lai');


const example2 = require('./example2.js');
console.log(example2.string);
console.log(example2.is_ture);
console.log(example2.number);
const date = require('./date.js');
console.log(date.create_date);
const json = require('./json.js');
for(let k in json.json){
    console.log(`${k}:${json.json[k]}`);
}

const Person = require('./object.js');
const person = new Person('lai', 29);
person.about();

const nums = require('./array.js');
for(let i = 0; i < nums.length; i++){
    console.log(`${i}:${nums[i]}`);
}