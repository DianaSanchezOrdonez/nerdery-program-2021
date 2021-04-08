// function init(){
//     const p = document.querySelector('p');
//     console.log(p);
// }

// document.addEventListener('DOMContentLoaded', init)
const heading = document.querySelector('h2');
//console.log(heading.textContent);
//console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);
// heading.textContent = 'Wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

const pizzaList = document.querySelector('.pizza');
//pizzaList.innerText = `${pizzaList.innerText} ✋`;

//pizzaList.insertAdjacentText( 'beforebegin','✋'); it's recommend use insertAdjacentText
//pizzaList.insertAdjacentText( 'beforeend', '✋')

const picture = document.querySelector('.cool');
//cool.classList.add('rounded');

//console.log(picture.classList.toggle('rounded'))

function toggleRounded(){
    picture.classList.toggle('rounded');
}

picture.addEventListener('click', toggleRounded);

//atributes
//picture.alt = 'Expensive House'; //setter
//console.log(picture.alt); //getter

// window.addEventListener('load', function(){
//     console.log(picture.naturalWidth)
// })

// console.log(picture.getAttribute('alt'));
// picture.setAttribute('alt', 'HUGE HOUSE');
// console.log(picture.getAttribute('alt'))

// const custom = document.querySelector('.custom');
// console.log(custom.dataset.name);






