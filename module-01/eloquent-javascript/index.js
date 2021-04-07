/************CHAPTER 01*********************/

function factorial(n){
    if(n === 0){
        return 1
    }else{
        return factorial(n-1)*n;
    }
}


//undefined -> no se ha inicializado la variable, ausencia de un valor
// let indefinida 
// console.log(indefinida)

//null -> indica ausencia de un valor pero si esta inicailizada la variable con el valor null
// let nulo = null
// console.log(nulo)

//console.log(null == undefined) // true

console.log( null|| NaN)
// → user
console.log("Agnes" || "user")
// → Agnes