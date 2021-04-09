const item = document.querySelector(".item");

const width = 200;
const src = `https://picsum.photos/${width}`;
const desc = `Random photo <img onload="alert('HACKED')" src="https://picsum.photos/50"> `;

const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src=${src}>
    </div>
`;

item.innerHTML = myHTML;

//turn a string to a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
