const toppings = ['Mushrooms', 'Tomatoes', 'Eggs',
'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon',
'Pickles', 'Onions', 'Cheese'];

const students = [
    {
        id: 'l1ce',
        first_name: 'Kira',
        last_name: 'Puckring'
    },
    {
        id: '2958',
        first_name: 'Maki',
        last_name: 'Brandi'
    },
    {
        id: '565a',
        first_name: 'Rayo',
        last_name: 'Woodage'
    },
    {
        id: '85sa',
        first_name: 'Piggy',
        last_name: 'Snickers'
    },
    {
        id: 'ae34',
        first_name: 'Ruperta',
        last_name: 'Hershey'
    }
]

const people = [
    {
        birthday: 'April 22, 1993',
        names: {
            first_name: 'Kira',
            last_name: 'Puckring',
        }
    },
    {
        birthday: 'February 11, 1998',
        names: {
            first_name: 'Maki',
            last_name: 'Brandi'
        }
    },
    {
        birthday: 'April 18, 1970',
        names: {
            first_name: 'Rayo',
            last_name: 'Woodage'
        }    
    },
    {
        birthday: 'November 21, 2004',
        names: {
            first_name: 'Piggy',
            last_name: 'Snickers'
        }
    },
    {
        birthday: 'April 18, 1963',
        names: {
            first_name: 'Ruperta',
            last_name: 'Hershey'
        }  
    }
]

const faces = ['😋' , '😱' , '😘' , '😤' , '🤕', '🎅' , '🤠' ]

const inventory = [
    { type: 'shirt', price: 4000 },
    { type: 'pants', price: 4532 },
    { type: 'socks', price: 234 },
    { type: 'shirt', price: 2343 },
    { type: 'pants', price: 542 },
    { type: 'socks', price: 123 },
    { type: 'socks', price: 478 },
]

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644];

/* Looping Methods */
// ForEach
function logTopping(topping, index, originalArray) {
    console.log(topping);
    
    const prevTopping = originalArray[index - 1];
    const nextTopping = originalArray[index + 1];

    prevTopping ? console.log(prevTopping) : '';
    nextTopping ? console.log(nextTopping) : '';

    //originalArray.length - 1 === index ? console.log('Goodbye!') : '';
    originalArray.length - 1 === index && console.log('Goodbye!');

    console.log('--------🍕---------');  
}

// toppings.forEach(logTopping)

// Map, Filter, Reduce 
// const name = 'diana';
// console.log(name[0].toUpperCase());

// function attachBody(face, body){
//     return `
//         ${face}
//      ${body.repeat(3)}
//     ${Array(3).fill(body).join(' ')}
//    🖐 ${body.repeat(2)} 🖐 
//      ${Array(2).fill(body).join('  ')}
//      ${Array(2).fill(body).join('  ')}
//      🦶 🦶 
//     `
// }

// faces.map( face => attachBody(face, '🍟')).forEach(body => console.log(body))

const peopleFormated = people.map( person => {
    //timestamp
    const birthday = new Date(person.birthday).getTime();

    //now timestamp
    const now = new Date();

    //figure out how old they are
    const age = Math.floor((now - birthday) / 31536000000)
    
    //return their full name and bday in an object
    return {
        name: `${person.names.first_name} ${person.names.last_name}`,
        age: age
    }
})

// console.log(peopleFormated);

const over40 = peopleFormated.filter( person => person.age > 40);
// console.log(over40);

function findById(id){
    return function isStudent(student){
        return student.id === id;
    }
}

function findByProp(prop, propWeAreLookingFor){
    return function isStudent(student){
        return student[prop] === propWeAreLookingFor;
    }
}

const student = students.find(findById('2958'));
const student2 = students.find(findByProp('id','2958'));
const student3 = students.find(findByProp('first_name','Kira'));
// console.log(student3);

/* Reduce */
function tallyTotal(accumulator, current){
    console.log(`The current tally is ${accumulator}`);
    console.log(`The current total is ${current}`);
    console.log('------------');
    return accumulator + current;
}

// const allTotals = orderTotals.reduce(tallyTotal, 0);

// console.log(allTotals);
function inventoryReducer(totals, item){
    // totals[item.type] ? totals[item.type]+= 1 : totals[item.type] = 1;
    totals[item.type] = totals[item.type] + 1 ||  1;
    return totals;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {})

const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price , 0)

// console.log(inventoryCounts);
// console.log(totalInventoryPrice);
