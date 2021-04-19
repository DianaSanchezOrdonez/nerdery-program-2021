/*------------------NEW------------------------*/
// function Pizza(){
//     console.log('Making a pizza!!!');
// }

// const pepperoniPizza = new Pizza();
// console.log(pepperoniPizza);
// console.log(pepperoniPizza.constructor);
// console.log(pepperoniPizza instanceof Pizza);

/*------------------THIS------------------------*/
// const button1 = document.querySelector('.one');
// const button2 = document.querySelector('.two');

// function handleButtonClicked(){
//     console.log('outside', this);
//     setTimeout(() => {
//         console.log('inside', this);
//         this.textContent = 'You clicked me'
//     }, 1000)
// }

// button1.addEventListener('click', handleButtonClicked);
// button2.addEventListener('click', handleButtonClicked);

/*------------------INSTANCE------------------------*/
function Pizza(topping = [], customer){
    console.log('Make a pizza');
    // instance properties
    this.topping = topping;
    this.customer = customer;
    this.id = Math.floor(Math.random() * 16777215).toString(16);
    this.slices = 10;
    // this.eat = function(){
    //     if(this.slices > 0){
    //         this.slices = this.slices - 1;
    //         console.log(`CHOMP you now have ${this.slices} left!`);
    //     }else{
    //         console.log(`Sorry! No slices left!`);
    //     }
    // }
}

Pizza.prototype.eat = function(){
    if (this.slices > 0) {
        this.slices = this.slices - 1;
        console.log(`CHOMP you now have ${this.slices} left!`);
    } else {
        console.log(`Sorry! No slices left!`);
    }
}

Pizza.prototype.describe = function(){
    return `This pizza is for ${this.customer} with th toppings 
    ${this.topping.join(',')} and there are ${this.slices} left!`;
}

const pizzaPepperoni = new Pizza(['pepperoni'], 'Wes Bos');
const pizzaCanadian = new Pizza(['mushrooms', 'onions', 'meat'], 'Kait Bos');

/*------------------BIND, CALL AND APPLY------------------------*/
const person = {
    name: 'We Bos',
    sayHi(){
        console.log(this);
        console.log(`Hey ${this.name}`);
        return `Hey ${this.name}`;
    }
}

const kira = { name: 'Kira'};
const sayHi = person.sayHi.bind(kira);

