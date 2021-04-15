/* function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}

const myTotal = calculateBill(200, undefined , 0.20)

console.log('myTotal', myTotal) */

//Anonymous function 
// function (firstName) {
//     return `Dr. ${firstName}`; 
// } 

//Function Expression 
// const doctorize = function (firstName = 'Diana') {
//     return `Dr. ${firstName}`
// }

// console.log(doctorize())

// (function(age){
//     console.log('Welcome to an Anon function');
//     const message = `You\'re ${age}`;
//     console.log(message)
//     return message;
// })(10);

//Methods 
// const data = {
//     name: 'Diana Sanchez Ordoñez',

//     //Method
//     sayHi: function(){
//         console.log(`hi ${this.name}`)
//         return 'Hi wess!'
//     },

//     //Short hand Method
//     yellHi() {
//         console.log('Hey Wesssss!')
//     },

//     //Arrow Function
//     wisperHi: () => {
//         console.log('Hi I\'m a turtle')
//     }

// }

//Debugging
// const people = [
//     {name: 'Maki', cool: false, country: 'USA'},
//     {name: 'Kira', cool: true, country: 'Canada'},
//     {name: 'Rayo', cool: true, country: 'Francia'}
// ]

// people.forEach((person, index) => {
//     // debugger;
//     console.log(person.name)
//     // console.groupCollapsed(`${person.name}`)
//     // console.log(person.country)
//     // console.log(person.cool);
//     // console.log('DONE!')
//     // console.groupEnd(`${person.name}`)

// })

// function doALotOfStuff() {
//     console.group('Doing some stuff');
//     console.log('Doing something...');
//     console.error('Hey!!!')
//     console.warn('Watch out!')
//     console.groupEnd('Doing some stuff')
// }

//prototypal-inheritance
class Dog {
    constructor(name, breed, color){
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    bark(){
        return 'Woof!';
    }
    
}

const dog1 = new Dog(
    'Kira',
    'poodle toy',
    'white'
)

class Chihuahua extends Dog{
    constructor(name){
        super(name)
    }

    smallBark(){
        return 'small Woof!';
    }
}

const dog2 = new Chihuahua('Maki');

// console.log(dog2.smallBark());

const person = {
    name: 'Diana',
    age: 23,
}

const me = Object.create(person);

const array = [1, 2, 3, 4, 5]; // caracteres de una unidad UTF-16

const someMethod = array.some( el => el % 2 === 0);

// console.log(someMethod);

// Dos caracteres emoji, caballo y zapato
let horseShoes = "🐴👟"; // caracteres de dos unidades 

console.log(horseShoes.charCodeAt(0));
console.log(horseShoes.codePointAt(0));

// for(let caracter of horseShoes){
//     console.log(caracter);
// }