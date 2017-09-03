# commonJS规范
> commonJS的核心有三块，模块的定义、模块的标识还有模块的引入
- 核心如下：
1.require模块引入
2.export模块导出，包括标识符和模块内容
> module.export和export.xxx

## 第一个例子
- 目录结构如下
```
\_
|_example2.js
|_main.js
```
- example.js
```
module.exports = function(){
    console.log('hello world');
}
```
- main.js
```
const hello = require('./example.js');
hello();
```
- 输出结果
```
hello world
```
- 注意点，是module.exports不是module.export,后者会报错

## 第二个例子
> module.exports导出的是一个方法，那么我们把main.js中的变一下，看是否行的通
- main.js
```
require('./example.js')();
```
- 输出结果
```
hello world
```
> 可见module暴露的方法和变量是可以直接调用的

## 第三个例子
> 我们可以对模块中的方法传参是否可行？
- example2.js
```
module.exports = function(person){
    console.log(`hello world ${person}`);
}
```
- main.js
```
const hello2 = require('./example2.js');
hello2('lai');
```
- 输出结果
```
hello world lai
```
> 从例子中可以看出，不仅可以引用模块，还可以给传参

## 第四个例子
> 如果我想引用一个独立的函数呢
- example3.js
```
const say = function(person){
    console.log(`hello world ${person}`);
}

module.exports = say;
```
- main.js
```
require('./example2.js')('lai');
```
- 输出结果
```
hello world lai
```
> 显然暴露一个独立的函数也是行的通的

## 第五个例子
> 我们先前导出的都是一个模块，那么如果要导出更多的模块，我们改如何进行呢，看下面这个例子
- example4.js
```
function say(name){
    console.log(name);
}
function eat(thing){
    console.log(thing);
}
exports.say = say;
exports.eat = eat;
```
- main.js
```
const hello3 = require('./example4.js');

hello3.say('lai');
hello3.eat('price');
```
- 输出结果
```
lai
price
```
- 注意点
1. exports.xxx = xxx不是export.xxx = xxx和上面一样后者会报错
2. 导出的东西多时，不能再用上面那种方式
## 疑问，module.exports和exports.xxx有什么区别呢
> 待续
