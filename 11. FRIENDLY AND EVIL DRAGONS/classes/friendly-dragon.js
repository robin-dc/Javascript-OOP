const Dragon = require('./dragon')
// Your code here
class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend){
        super(name, color)
        this.lifeGoals = lifeGoals
        this.friend = friend
    }
    hasLifeGoals(){
        this.lifeGoals.map(goal => {
            console.log(`${this.name} likes to ${goal}`)
        })
    }
    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }
}

// const toothless = new FriendlyDragon(
//     "Toothless",
//     "black",
//     [
//       "save the town of Burke",
//       "fly with a kid on his back",
//       "hang out with Vikings"
//     ],
//     "Hiccup"
//   );
//   console.log(toothless); toothless.hasLifeGoals();
//   console.log(toothless.helpsPeople());
//   console.log(toothless.breathesFire());

try{
    module.exports = FriendlyDragon
}
catch{
    module.exports = null
}
