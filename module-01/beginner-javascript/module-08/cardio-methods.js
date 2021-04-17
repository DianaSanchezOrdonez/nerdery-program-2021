const toppings = [ 'Mushrooms' , 'Tomatoes', 'Eggs', 'Lettuce', 
'Avocado', 'Pickles', 'Onions', 'Cheese'];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7
}

const prices = {
    hotDog: 453,
    burger: 765,
    saussage: 634,
    corn: 234
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644];

const feedback = [
    {comment: 'Love the burgs', rating: 4},
    {comment: 'Horrible Service', rating: 2},
    {comment: 'Smoothies are great, liked the burger too', rating: 5},
    {comment: 'Ambiance needs work', rating: 3},
    {comment: 'I DONT LIKE BURGERS', rating: 1},
]

/* Static Methods */

// Array.of() → allow create an Array 
// console.log(Array.of('wes', 'bos'));    //[ 'wes', 'bos' ]
// console.log([...'wes']);                //[ 'w', 'e', 's' ]
// console.log(Array.of(...'wes'));        //[ 'w', 'e', 's' ]

// const newArray = Array.from({length: 10} , function(item, index){
//     return index
// })

// console.log(newArray);      //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

function createRange(start, end){
    const range = Array.from({length: end - start + 1} , 
    function(item, index){
        return index + start;
    });
    return range;
}

const myRange = createRange(3,7); //[ 3, 4, 5, 6, 7 ]

// Check if the last array you created is really an array with 
//Array.isArray();
// console.log(Array.isArray(myRange));

//Take the meats object and make three arrays with 
//Object.entries(), Object.keys(), Object.values()

// console.log(Object.entries(meats)); //[ [ 'beyond', 10 ], [ 'beef', 5 ], [ 'pork', 7 ] ]
// console.log(Object.keys(meats));    //[ 'beyond', 'beef', 'pork' ]
// console.log(Object.values(meats));  //[ 10, 5, 7 ]

// Object.entries(meats).forEach( ([key, value]) => {
//     // const key = entry[0];
//     // const value = entry[1];
//     // const [key, value] = entry;
//     console.log(key, value)
// })

/* Instance Methods */

//Dsiplay all bun types with "or" -  use join();
//console.log(buns.join(' or '));

//We have a string "hot dogs, hamburgers, saussages, corn"
// use split() to turn into an array
const foodString = 'hot dogs, hamburgers, saussages, corn';
//console.log(foodString.split(','));

//take the last thing of toppings with pop()
// console.log(toppings);          //['Mushrooms', 'Tomatoes', 'Eggs', 'Lettuce', 'Avocado', 'Pickles', 'Onions', 'Cheese' ];
// console.log(toppings.pop());    //Cheese
// console.log(toppings);          //['Mushrooms', 'Tomatoes', 'Eggs', 'Lettuce', 'Avocado', 'Pickles', 'Onions' ];

//take thhe first item of toppings whit shift()
const firstItem = toppings.shift();      //Mushrooms 
//console.log(toppings);                 //['Tomatoes', 'Eggs', 'Lettuce', 'Avocado', 'Pickles', 'Onions', 'Cheese' ];

//add it back in with unshift()
toppings.unshift(firstItem);
//console.log(toppings);              //['Mushrooms', 'Tomatoes', 'Eggs', 'Lettuce', 'Avocado', 'Pickles', 'Onions', 'Cheese' ];

//Do the last four, but inmutable (with spreads and new variables)
const newToppings = [...toppings.slice(-4)]

//Make a copy of the toppings array with slice()
const copyToppings = toppings.slice(0);

//Make a copy of the toppings array with spread
const copyToppings2 = [...toppings];

//take out items 3 to 5 of our new toppings array with splicce();
copyToppings2.splice(3,5);
// console.log(copyToppings2);

// find the index of Avocado with indexOf() / lastIndexOf()
const indexAvocado = toppings.indexOf('Avocado');
//console.log(indexAvocado); // 4

//Check if the hot sauce is in the toppings with includes()
toppings.includes('hot sauce'); //false

//flip those toppings aroun with reverse()
//toppings.reverse();
const toppingsReverse = [...toppings].reverse();

/* Callback Methods & Function Generation */

//Find the first rating that talks about a burger with find()

// const findBurguerRating = (singleParameter) => singleParameter.comment.includes('burg');

// const burgRating = feedback.find(findBurguerRating)

// console.log(burgRating);

function findByWord(word){
    return function(singleFeedback){
        return singleFeedback.comment.includes(word);
    }
}

//const burgFinder = findByWord('burg');
const burgRating = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smooth'));

// console.log(burgRating);
// console.log(smoothieRating);

//find all ratings that are above 2 with filter();
const goodReviews = feedback.filter( singleFeedback => singleFeedback.rating > 2);
// console.log(goodReviews);

function filterByMinRating(minRating){
    return function(singleFeedback){
        return singleFeedback.rating > minRating;
    }
}

goodReviews2 = feedback.filter(filterByMinRating(2));
// console.log(goodReviews2);

//Remove the onse star rating homever you like!
const legitRatings = feedback.filter( singleFeedback => singleFeedback.rating !== 1);
// console.log(legitRatings);

//check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some( value => value >= 5);
//console.log(isThereEnoughOfAtLeastOneMeat);

//make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).some( value => value >= 3);
//console.log(isThereEnoughOfEveryMeat);

//sort the toppings alphabetically with sort()
const toppingsSorter = toppings.sort();
// console.log(toppingsOrder);

const arrayNumbers = [558, 1, 2, 100, 20, 155];

const method01Sorted = arrayNumbers.sort((next, current) => {
    if(next > current) { return 1 }
    else if (next < current) { return -1 }
    else { return 0 }
});

const method02Sorted = arrayNumbers.sort((next, current) => next - current)

//sort the order totals from most expensive to least with .sort()
const orderSorted = orderTotals.sort((next, current) => current - next);
// console.log(orderSorted);

//Sort the prices with sort()
const arrayPrices = Object.entries(prices).sort((next, current) => next[1] - current[1]);
// console.log(Object.fromEntries(arrayPrices));
