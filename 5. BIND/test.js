// Your code here

const Employee = require(`./employee`)

const johnwick = new Employee("John Wick", "Dog Lover")


const sayNameFunc = johnwick.sayName    // this is the function itself "console.log(`${this.name} says hello`)"
const sayNameBound = sayNameFunc.bind(johnwick) // bound to the context/object so the `this` will reference johnwick

const sayOccupationFunc = johnwick.sayOccupation
const sayOccupationBound = sayOccupationFunc.bind(johnwick)

globalThis.setTimeout(sayNameBound, 2000)  // prints "John Wick says hello" after 2 seconds
// This is because the sayName function is bounded to the context johnwick. No matter where we call it, it was bound to johnwick

globalThis.setTimeout(sayOccupationBound, 3000)
