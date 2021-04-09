// Make a div
const myDiv = document.createElement('div');

//add a class of wrapper to it
myDiv.classList.add('wrapper');

//put it into the body
document.body.appendChild(myDiv);

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

//create an image
const myImg =  document.createElement('img');

//set the source to an image
myImg.src = 'https://picsum.photos/200';

//set the width to 250
myImg.width = 250;

//add a class of cute
myImg.classList.add('cute');

//add an alt of Cute Puppy
myImg.setAttribute('alt', 'Cute Puppy');

//Append that image to the wrapper
myDiv.appendChild(myImg)

//with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="element">
        <p id="first">I'm a paragraph N°01</p>
        <p id="second">I'm a paragraph N°02</p>
    </div>
`

//put this div before the unordered list from above 
const listElement = myDiv.querySelector('ul');
listElement.insertAdjacentHTML('beforebegin', myHTML);

//add a class to the second paragraph called warning

const element = myDiv.querySelector('.element');    // const second = myDiv.querySelector('#second');
element.lastElementChild.classList.add('warning');  // second.classList.add('warning');

//remove the first paragraph
// const first = myDiv.querySelector('#first');
element.firstElementChild.remove()  // first.remove();

//create a function called generatePlayerCard that takes in three arguments: name, age, and height
// function generatePlayerCard(name, age, height){
   
// }

//have that function return html that loops like this:
//<div class="playerCard">
//  <h2>NAME - AGE</h2>
//  <p>They are the HEIGHT and AGE years old. In Dog years
//    this person would be AGEINDOGYEARS. That would be a tall dog!
//  </p>
//</div>
function generatePlayerCard(name, age, height){
    const cardHTML = `
        <div>
            <h2>${name} - ${age}</h2>
            <p>They are the ${height} and ${age} years old. In Dog years \n
                this person would be ${age * 7}. That would be a tall dog!
            </p>
            <button class="btn-delete">Delete Card</button>
        </div>
    `
    return cardHTML;
}

//make a new div with a class of cards
const divCard = document.createElement('div');
divCard.classList.add('cards');

//have that function make 4 cards

// function generatePlayerCard(name, age, height){
//     let cardHTML = '';
//     for(let i=1; i<=4; i++){
//         cardHTML += `
//         <div>
//             <h2>${name} - ${age}</h2>
//             <p>They are the ${height} and ${age} years old. In Dog years \n
//                 this person would be ${age * 7}. That would be a tall dog!
//             </p>
//         </div>
//     `;
//     }
//     return cardHTML;
// }

let cardHTML = generatePlayerCard('Diana', 23, 150);
cardHTML += generatePlayerCard('Angy', 22, 159);
cardHTML += generatePlayerCard('Wes', 30, 160);
cardHTML += generatePlayerCard('Bos', 45, 175);

//append those cards to the div
const myFragment = document.createRange().createContextualFragment(cardHTML);
divCard.append(myFragment);

//put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('afterbegin', divCard);

//Bonus, put a delete button on each card so when you click it, the whole cards is removed
const btnsDelete = divCard.querySelectorAll('.btn-delete');
btnsDelete.forEach(btn => {
    btn.addEventListener('click', function(){
        btn.parentNode.remove();
    })
})