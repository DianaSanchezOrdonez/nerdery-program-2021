function sayHi(){
    console.log('hiii...');
}

// setTimeout( sayHi, 1000)

// setInterval( sayHi, 500);

function setInmediatlyIntervals(funcToRun, ms){
    //call the function
    funcToRun();

    //run the function inside a setInterval
    return setInterval( funcToRun, ms);
}

// setInmediatlyIntervals(sayHi, 2000);

// function destroy(){
//     document.body.innerHTML = `<p>DESTROYED</p>`
// }

// const bombTimer = setTimeout( destroy, 5000);

// console.log(bombTimer);

// window.addEventListener('click', function(){
//     console.log('You clicked! Saved the page...');

//     clearTimeout(bombTimer) //stop the timmer from running
// })

// How to clean setInterval after specific milliseconds ??

const intervalTimer = setInterval( function(){
    console.log('Hiii :O');
}, 200)

setTimeout( function(){
    clearInterval( intervalTimer )
}, 3000)
