const pen = {
    bodyColor: 'clear',
    inkColor: 'blue',
    inkLevel: 75,
    type: 'ballpoint',
    refillable: true,
    write: function(string){
        for(let i = 0; i < string.length; i++){
            pen.inkLevel -=2;
            if(pen.inkLevel <= 0){
                console.log('Need to refill the ink. ')
                pen.inkLevel = 0
                return;
            }
        }
        console.log(string)
        if(pen.inkLevel <= 10){
            console.log('WARNING: Need to refill ink. ')
        }
    },
    refillInk: function(){
        if(!pen.refillable){
            console.log('This pen is not refillable. ')
            return;
        }
        console.log('Refilling Ink.');
        pen.inkLevel = 100;
    }
}

const fountainPen = {
    bodyColor: 'black',
    inkColor: 'black',
    inkLevel: 100,
    type: 'fine-tip',
    refillable: true,
    write: function(string){
        for(let i = 0; i < string.length; i++){
            fountainPen.inkLevel -=2;
            if(fountainPen.inkLevel <= 0){
                console.log('Need to refill the ink. ')
                fountainPen.inkLevel = 0
                return;
            }
        }
        console.log(string)
        if(fountainPen.inkLevel <= 10){
            console.log('WARNING: Need to refill ink. ')
        }
    },
    refillInk: function(){
        if(!fountainPen.refillable){
            console.log('This fountainPen is not refillable. ')
            return;
        }
        console.log('Refilling Ink.');
        fountainPen.inkLevel = 100;
    }
}

const feltPen = {
    bodyColor: 'grey',
    inkColor: 'red',
    inkLevel: 100,
    type: 'felt-tip',
    refillable: false,
    write: function(string){
        for(let i = 0; i < string.length; i++){
            feltPen.inkLevel -=2;
            if(feltPen.inkLevel <= 0){
                console.log('Need to refill the ink. ')
                feltPen.inkLevel = 0
                return;
            }
        }
        console.log(string)
        if(feltPen.inkLevel <= 10){
            console.log('WARNING: Need to refill ink. ')
        }
    },
    refillInk: function(){
        if(!feltPen.refillable){
            console.log('This feltPen is not refillable. ')
            return;
        }
        console.log('Refilling Ink.');
        feltPen.inkLevel = 100;
    }
}

// this object codes is repetetive, use classes to compress
// this code violates the srp and dry principles
