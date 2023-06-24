function eat() {
  console.log(`${this.name} eats fish food`);  // refers to global object
}

class Fish {
  constructor(name) {
    this.name = name;   // refers to the instantiated class
  }

  swim() {
    console.log(`${this.name} swimming in the water`);  // refers to the instantiated class
  }
}

const nemo = new Fish('Nemo'); // new instantiated class

/********************************* Scenario 1 *********************************/
eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // Nemo eats fish food


/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // undefined swimming in the water .......... answer: Cannot read properties of undefined (reading 'name')
