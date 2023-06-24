// this keyword allows us to maintain the context of the specific instance

class Pen{
    constructor(bodyColor, inkColor, inkLevel, type, refillable){
        this.bodyColors = bodyColor;
        this.inkColors = inkColor;
        this.inkLevels = inkLevel;
        this.types = type;
        this.refillables = refillable
    }

    write(string){
        for(let i = 0; i < string.length; i++){
            this.inkLevel -=2;
            if(this.inkLevel <= 0){
                console.log('Need to refill the ink. ')
                this.inkLevel = 0
                return;
            }
        }
        console.log(string)
        if(this.inkLevel <= 10){
            console.log('WARNING: Need to refill ink. ')
        }
    }

    refillInk(){
        if(!this.refillable){
            console.log('This pen is not refillable. ')
            return;
        }
        console.log('Refilling Ink.');
        this.inkLevel = 100;
    }
}

const pen = new Pen(
    'clear',
    'blue',
    75,
    'ball-point',
    true
)
const fountainPen = new Pen(
    'black',
    'black',
    100,
    'fine-tip',
    true
)
const feltPen = new Pen(
    'grey',
    'red',
    100,
    'felt-tip',
    false
)


// To check if it is an instance of the pen
console.log(pen instanceof Pen) // true

console.log(fountainPen)
console.log(fountainPen.inkLevel)
fountainPen.write('I am a fountain pen!')
console.log(fountainPen.inkLevel)
fountainPen.refillInk()
console.log(fountainPen.inkLevel)


// ES6 CLASSES
// class keyword to declare a new class
// constructor method to feed our class some raw data
// this keyword to set our properties
// instance methods to interact with our data once its created

// TAKEAWAYS:
// classes are used to refactor object data
// converting big data into smaller chunks
// in scope with single responsibility principle and dry principle
