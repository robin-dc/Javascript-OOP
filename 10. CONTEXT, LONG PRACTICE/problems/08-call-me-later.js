// Your code here

class CallCenter{
	constructor(name){
		this.name = name;
	}
	sayHello = () =>{
		console.log(`Hello this is ${this.name}`)
	}
	callMeLater(delay){
		setTimeout(() =>{
			this.sayHello()
		}, delay)
	}
}

let melan = new CallCenter("Melan");
melan.sayHello();        // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
