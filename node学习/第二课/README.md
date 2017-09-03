## 比较module.exports和exports.xxx
- module.exports是接口，而exports只是辅助工具
- exports只是为module.exports提供属性和方法，最终调用的还是module.exports
- 第二点的前提是module.exports不具备任何方法和属性，如果具备了，那么exports的将会被忽略
## 第一个例子
> 当两者共存的时候回发生什么呢
- example.js
```
module.exports = 'laihuamin';
exports.name = function(name){
    console.log(name);
}
```
- main.js
```
const hello = require('./example.js');
hello.name('lai');
```
- 输出结果
```
//报错
hello.name not a function
```
> 由此可见，当module.exports带有属性和方法时，那么export的属性和方法将会被忽略
## 模块
> 从上面的例子可以看出，并非每次都要实例化一个模块对象，有时候你可以在一个模块中返回好几个属性和方法，前提是你不显示的输出一个module.exports方法
- string
```
exports.string = "laihuamin";
```
- boolean
```
exports.is_ture = false;
```
- number
```
const a = 1;
exports.number = a;
```
> 详见例子2，这样就可以在main中引入
## date类型
> 可以导出现在的时间
- 安装
```
npm install moment --save
```
- example2.js
```
const moment = require('moment');
const date = moment().format('YYYY-MM-DD');
exports.create_date = date;
```
- main.js
```
console.log(example2.create_date);
```
## json类型
- example2.js
```
exports.json = {
    name: 'lai',
    age: 29
}
```
- main.js
```
const json = require('./json.js');
for(let k in json.json){
    console.log(`${k}:${json.json[k]}`);
}
```
## 前面所有项的输出结果
```
laihuamin
false
1
2017-09-03
name:lai
age:29
```
## 简单的面向对象
- object.js
```
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.about = function(){
        console.log(`this is ${name} and this is ${age}`);
    }
}

exports.Person = Person;
```
- main.js
```
const Person = require('./object.js');
const person = new Person('lai', 29);
person.about();
```
- 输出结果
```
this is lai and this is 29
```
## 数组
- array.js
```
module.exports = [1, 2, 3, 4, 5, 6, 7, 8]
```
- main.js
```
const nums = require('./array.js');
for(let i = 0; i < nums.length; i++){
    console.log(`${i}:${nums[i]}`);
}
```
- 输出结果
```
0:1
1:2
2:3
3:4
4:5
5:6
6:7
```
## 总结
> 从上面几个例子中不难看出几点
- 当你想要拿到某种类型的时候，比如数组啊，构造函数啊，等等的一些东西，那么你就得用module.exports
- 如果你想拿到一个实例对象，里面有各种属性和方法的时候，用exports.xxx
- 接下来，看下面这个例子，你会发现有所不同
```
moudle.exports = function(){
    console.log("hello world")
}
```
```
exports.hello = function(){
    console.log("hello world")
}
```
> 其实这两种方法是不相同的，因为一个导出的是模块，这个模块含有一个function类型，而另一个导出的是一个hello的方法