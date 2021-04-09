//Exercise01: Looping a triangle
let result = '';
for(let i=1; i<=7; i++){
    result +='#';
    console.log(result)
}

//Exercise02: FizzBuzz
for(let i=1; i<=100; i++){
    if(i%5 === 0 && i%3 === 0){
        console.log('FizzBuzz');
    }else if(i%3 === 0){
        console.log('Fizz');
    }else if(i%5 === 0 && i%3 !== 0){
        console.log('Buzz');
    }else{
        console.log(i)
    }
}

//Exercise02: Chessboard
let chess = ' ';
function buildAChesboard(size){
    for(let row=1; row<=size; row++){

        for(let column=1; column<=size; column++){
            if((row+column) % 2 === 0){
                chess += ' ';
            }else{
                chess += '#'
            }
        }
        chess += "\n";
    }
    return chess;
}

console.log(buildAChesboard(4));
  

