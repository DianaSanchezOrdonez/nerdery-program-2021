//Exercise 01: Minimum 
//The previous chapter introduced the standard function Math.min 
// that returns its smallest argument. We can build something like that now. 
// Write a function min that takes two arguments and returns their minimum.

function min(value1, value2){
    return Math.min(value1, value2);
}

// function min(value1, value2){
//     return (value1 < value2) ? value1 : value2
// }

// console.log(min(0,-10));

// const arrayNumbers = [0,-10,50,-50,-1,10]
// function minNumber(){
//     return arrayNumbers.sort(function(a,b){
//         return a - b;
//     })
// }
// minNumber()
// console.log(arrayNumbers);

//Exercise 02: Recursion
// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (a positive, whole number) 
// and return a Boolean.

function isEven(value){
    while(value >= 0 && Number.isInteger(value)){
        if(value === 0){
            return true
        }else if( value === 1) {
            return false
        }else{   
            return isEven(value-2)
        }
    }
    return 'The number must be a positive, whole number';
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Exercise 03: Bean counting
// Write a function countBs that takes a string as its only 
// argument and returns a number that indicates how many 
// uppercase “B” characters there are in the string.

function countBs(stringValue, stringCharacter){
    let count = 0;
    for(let i=0; i<stringValue.length; i++){
        if(stringValue[i] === stringCharacter){
            count ++
        }
    }
    return count;
}

function countChar(value, character){
    if(typeof value === 'string' && typeof character === 'string'){
        return `${countBs(value, character)} of ${character}`;
    }else{
        let stringValue = String(value);
        let stringCharacter = String(character);
        return `${countBs(stringValue, stringCharacter)} of ${character}`;
    }
}

console.log(countChar(4444453222, 2));
console.log(countChar("kakkerlak", "k"));

/*********** TOPIC: CLOSURE ****************************** */
// function multiplier(factor) {
//   return (number) => number * factor;
// }

// function multiplier(factor) {
//   return function(number){
//       return number *= factor;
//   }
// }

// let twice = multiplier(2);
// console.log(twice(5));

/************ TOPIC: RECURSION - when a function to call itself *********/
// function power(base, exponent){
//     if(exponent === 0){
//         return 1
//     }else {
//         return base * power(base, exponent-1)
//     }
// }

// console.log(power(3,3));

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(1));

/*********** TOPIC: A function have a one responsability *****/
// function printThreeDigits(cows, chickens) {
//   let stringCows = String(cows);
//   let stringChickens = String(chickens);

//   while (stringCows.length < 3) {
//     stringCows = '0' + stringCows;
//     stringChickens = '0' + stringChickens;
//   }
//   console.log(`${stringCows} cows`);

//   while (stringChickens.length < 3) {
//     stringChickens = '0' + stringChickens;
//   }
//   console.log(`${stringChickens} chickens`);

// }

// printThreeDigits(3,40);

// function zeroPad(number, limit){
//     let stringNumber = String(number);
//     while(stringNumber.length < limit){
//         stringNumber = '0' + stringNumber;
//     }
//     return stringNumber;
// }

// function printFarmInventory(ncows, nchickens, npigs){
//     console.log(`${zeroPad(ncows,3)} cows`);
//     console.log(`${zeroPad(nchickens,3)} chickens`);
//     console.log(`${zeroPad(npigs,3)} pigs`);
// }

// printFarmInventory(3,17,100);