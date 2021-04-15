const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    
    //Grab the image src
    const imgSrc = card.querySelector('img').src;
    const description = card.dataset.description;
    
    //Populate the modal with the new info
    const newImg = document.createElement('img');
    newImg.src = imgSrc.replace('200', '400');
    const newParagraph = document.createElement('p');
    newParagraph.innerText = description;

    modalInner.appendChild(newImg);
    modalInner.appendChild(newParagraph);

    modalOuter.classList.add('open');

}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal(){
    modalOuter.classList.remove('open');
    modalInner.innerHTML = ''
}

modalOuter.addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.currentTarget);
    const isInside = e.target.closest('.modal-inner')
    if( !isInside ){
        closeModal();
    }
})

window.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeModal()
    }
})