// Your code here

class PartyPlanner{
	constructor(guestList = []){
		this.guestList = guestList
	}
	addToGuestList(name){
		this.guestList.push(name)
		return this.guestList
	}
	throwParty(){
		if(this.guestList.length === 0){
			return `Gotta add people to the guest list`
		}
		else{
			return `Welcome to the party ${this.guestList.join(" and ")}`
		}
	}
}

const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
