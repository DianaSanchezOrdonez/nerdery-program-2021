// Make a div
const myDiv = document.createElement('div');

//add a class of wrapper to it
myDiv.classList.add('wrapper');

//put it into the body
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I\'m a random image';
const myImg =  document.createElement('img');
myImg.src = 'https://picsum.photos/200';

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImg);

//make an unordered list
const list = document.createElement('ul');

//add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'One';

const li2 = li1.cloneNode(true);
li2.textContent = 'Two';

const li3 = li1.cloneNode(true);
li3.textContent = 'Three';

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

//put that list into the above wrapper
myDiv.appendChild(list)

