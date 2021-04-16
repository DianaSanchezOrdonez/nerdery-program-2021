// Load the full build.
//var _ = require('lodash');

// Object freeze → not allow change the values of the object

const wes = {
    name: 'wes',
    lasname: 'bos',
    'cool-dude': true,
    'really cool': false,
    age: 40,
    clothings: {
        shirts: 10,
        pants: 5
    }
}

const wesFreeze = Object.freeze(wes);
wesFreeze.name = 'Diana' // I can't
// console.log(wesFreeze);

//Access to the properties
// console.log(wes.name);
// console.log(wes['name']);
// console.log(wes['cool-dude']);


/*-----------------DIFERENCE BETWEEN VALUES AND REFERENCE----------------------- */
const person1 = {
    name: 'wes',
    lastname: 'boss',
    clothings: {
        shirts: 10,
        pants: 5
    }
}

const person2 = {
    name: 'wes',
    lastname: 'boss'
}

//COPY THE REFERENCE
// const person3 = person1;

// person1.name = 'diana';         //modified also the reference of both objects
// person3.lastname = 'ordoñez';

// console.log('person1 →', person1);
// console.log('person2 →', person2);
// console.log('person3 →', person3);

//SPREED OPERATOR COPY THE OBJECT BUT NOT REFERENCE 
const person3 = {...person1}

//USED LODASH LIBRARY FOR CLONE ELEMENT INCLUDES OF MORE DEEP LEVEL
// const person3 = _.cloneDeep(person1)

person3.name = 'kira';
person3.clothings.pants = 100; //SPREED OPERATOR WORKS TO ONE DEEP LEVEL

// console.log('person1 →', person1);
// console.log('person2 →', person2);
// console.log('person3 →', person3);

const meatInventory = {
    bacon: 2,
    sausage: 8,
    oyster: 5,
}

const veggieInventory = {
    lettuce: 5,
    tomatoes: 15,
    oyster: 15,
}

const inventory = {
    ...meatInventory,
    ...veggieInventory, //overwrite oyster
}

// console.log(inventory);

/*-----------------API MAP----------------------- */
const myMap = new Map();

myMap.set('name', 'wes');
myMap.set(100, 'It\'s a number');
// console.log(myMap.get('name'));

const score = 200;
const prizes =  new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Dog');

// console.log(`You win a ${prizes.get(score)} `);

// for( let [key, value] of prizes){
//     console.log(key, value);
// }

prizes.delete(score);

JSON.stringify(myMap) // {}

//Object.fromEntries transforms a list of key-values pairs into an object 
Object.fromEntries(myMap) //{100: "It's a number", name: "wes"}


/*-----------------ARRAYS----------------------- */

//Mutation Methods - DO CHANGUE THE ORIGINAL DATA
const numbers = [1,2,3,4,5,6,7,8,9];
//const numbersBackwars = numbers.reverse();

// console.log('numbersBackwars →', numbersBackwars);
// console.log('numbers →', numbers);

//Immutable - THEY DO NOT CHANGUE THE ORIGINAL DATA
const slicePizza = numbers.slice(5,6);

// console.log(slicePizza);
// console.log(numbers);

//RECOMENDATION : Anytime you want to use a mutation method 
//and NOT mutate the original array
// we need to take a copy of the array
const numbersBackwars = [...numbers].reverse();

// console.log('numbersBackwars →', numbersBackwars);
// console.log('numbers →', numbers);

/*-----------------ARRAYS - PUSH----------------------- */
const names = ['maki', 'kira', 'rayo'];

names.push('mcqueen');

const names2 = [...names, 'makilongo']

names2.unshift('snickers');

// console.log(names2);

//Mutable method splice()
const numbers2 = [1,2,3,4,5,6,7,8,9];
//numbers2.splice(3,2); //Remove two elements at index 3
//numbers2.slice(2,5)

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];

const newBikes = [
    ...bikes.slice(0,2),
    'benoto',
    ...bikes.slice(2)
]

const newBikes3 = [
    ...newBikes.slice(0,3),
    ...newBikes.slice(4)
]

// console.log(newBikes3);

const comments = [
    { text: 'Hi...', id: 233},
    { text: 'Neato', id: 333},
    { text: 'Hello World', id: 433},
    { text: 'Good morning', id: 133},
    { text: 'Good night', id: 533},
]

function deleteComment(id, comments){
    //first find the index of the item in the array 
    const commentIndex = comments.findIndex(comment => 
        comment.id === id
    )

    //make a new array without that itme in it 
    return [
        ...comments.slice(0, commentIndex),
        ...comments.slice(commentIndex + 1)
    ]

    // return our new array

    //Method 2 ↓
    // const newArray = [];
    // comments.forEach((element, index) => {
    //     if(element.id !== id){
    //         newArray.push(element);
    //     }
    // });
    // return newArray;
}

//console.log(deleteComment(233, comments));






