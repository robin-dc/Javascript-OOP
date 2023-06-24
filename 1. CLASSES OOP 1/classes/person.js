// Your code here
class Person{

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  static introducePeople(array){
    if(!Array.isArray(array)){
      console.log("introducePeople only takes an array as an argument")
      return
    }
      array.forEach(person => {
        if(person instanceof Person){
          person.introduce()
        }
        else{
          console.log("All items in array must be Person class instances")
          return
        }
      })
  }
}

// const person1 = new Person('robin', 'dc', 19)
// console.log(person instanceof Person)
// const array = [person1, "robin"]
// const bad = ""
// Person.introducePeople(array)
// Person.introducePeople(bad)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
