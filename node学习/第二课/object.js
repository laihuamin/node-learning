module.exports = function (name, age) {
    this.name = name;
    this.age = age;
    this.about = function(){
        console.log(`this is ${name} and this is ${age}`);
    }
}
