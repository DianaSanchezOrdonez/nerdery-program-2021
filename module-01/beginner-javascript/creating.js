const myParagraph = document.createElement('p');
myParagraph.innerText = 'I\'m a sweet paragraph';
myParagraph.classList.add('special')

const myImage = document.createElement('img');
myImage.src = './images/image-house.jpg';
myImage.width = 300;

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper')

//WITH APPEND
// document.body.append(myDiv);
// myDiv.append('Im a paragraph with append!'); //accepts a DOMString and Node Object
// const valueDiv = myDiv.append(myImage);
// console.log(valueDiv); //undefined

//WITH APPENDCHILD
document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);  //only accepts Node Object
const valueDiv = myDiv.appendChild(myImage);
console.log(valueDiv);   //return a value

const heading2 = document.createElement('h1');
heading2.innerText = 'Cool Things...';

myDiv.insertAdjacentElement('beforebegin', heading2);

//EXERCISE
// const list = document.createElement('ul');
// const arrayNameOfNumbers = ['One', 'Two', 'Three', 'Four', 'Five'];

// document.body.insertAdjacentElement('beforebegin', list);

// for(let i=0; i<=4; i++){
//     let li = document.createElement('li');
//     li.innerText = arrayNameOfNumbers[i];
//     list.appendChild(li);
// }

/************WES' SOLUTION************************* */
// const list = document.createElement('ul');
// document.body.insertAdjacentElement('afterbegin', list);

// const li3 = document.createElement('li');
// li3.innerText = 'Three';
// list.append(li3)

// const li5 = document.createElement('li');
// li5.innerText = 'Five';
// list.append(li5);

// const li1 = li5.cloneNode(true);
// li1.innerText = 'One';
// list.insertAdjacentElement('afterbegin', li1);

// const li2 = li5.cloneNode(true);
// li2.innerText = 'Two';
// li3.insertAdjacentElement('beforebegin', li2);

// const li4 = li5.cloneNode(true);
// li4.innerText = 'Four';
// li5.insertAdjacentElement('beforebegin', li4)
