const butts =  document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick(){
    console.log('It got clicked!!');
}

butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

const buttonsBuy = document.querySelectorAll('.buy');

// function printMessageBuy(){
//     console.log('Buying Item...')
// }

// function handleBuyButtonClick(whereverThing) {
//     whereverThing.addEventListener('click', printMessageBuy )
// }

//The video explain when you call the function in your case handleClick inside 
//the forEach you not send the argument of the function, because the browser is 
//supplying with the element that got clicked. (BINDING)
// buttonsBuy.forEach(handleBuyButtonClick); 

// buttonsBuy.forEach( button => {
//     button.addEventListener('click', printMessageBuy)
// })

/*************** TARGETS, BUBBLING, PROPAGATION AND CAPTURE ********************** */
function handleBuyButtonClick(event){
    console.log('Clicked the button !!!');
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);

    // event.stopPropagation();
}

buttonsBuy.forEach( function(button){
    button.addEventListener('click', handleBuyButtonClick)
});

window.addEventListener('click', function(event){
    console.log('CLICKED THE WINDOW!!!')
    console.log(event.target)
},
    {capture: true}
)

const myImg = document.querySelector('.photo');

myImg.addEventListener('mouseenter', function(e){
    console.log(e.currentTarget);
})