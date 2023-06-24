const User = require('./classes/user');

const michelle = new User('Michelle'); // instantiates a new user

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

// UNDERTHEHOOD:
// function changeName(newName){
//   this.name = newName;
//   return this.name;
// }
// changeName.bind(michelle) // changeName function will now refer to the context object michelle

greetAfterNameChange(michelle.changeName, 'Elle');
  // should print out: Hi my name is Elle
