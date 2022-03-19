const sayHello = () => { return console.log("Hello") }
const sayHello2 = () => console.log("Hello")

console.log(sayHello())
console.log(sayHello2())

module.exports = {
    sayHello,
    sayHello2
}