const wes = document.querySelector('.wes');

// console.log(wes.children);
// console.log(wes.childNodes);

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement('p');
p.innerText = 'I will be removed';

console.log(p)

document.body.insertAdjacentElement('afterbegin', p);

p.remove()
