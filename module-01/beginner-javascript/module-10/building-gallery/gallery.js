function Gallery(gallery) {
    if (!gallery){
        throw new Error('No Gallery Found!');
        //return;
    }

    //select the elements we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentImage;

    function openModal(){
        console.info('Open modal...');

        //first check if the modal is already open 
        if(modal.matches('.open')){
            console.info('Modal already open');
            return; // stop the function from running
        }
        modal.classList.add('open');

        //event listeners to be bound when open the modal
        window.addEventListener('keyup', handleKeyup);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }

    function closeModal(){
        modal.classList.remove('open');

        //todo: add event listeners for clicks and keyboard...
        window.removeEventListener('keyup', handleKeyup);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleClickOutside(e){
        if(e.target === e.currentTarget){
            closeModal();
        }
    }

    function handleKeyup(e){
        if(e.key === 'Escape') return closeModal();
        if(e.key === 'ArrowRight') return showNextImage();
        if(e.key === 'ArrowLeft') return showPrevImage();
    }


    function showImage(el){
        if(!el){
            console.info('no image to show');
            return;
        }

        //update the modal with this info
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        
        currentImage = el;
        openModal();
    }

    function showNextImage(){
        // console.log(currentImage.nextElementSibling);
        showImage(currentImage.nextElementSibling || gallery.firstElementChild)
    }

    function showPrevImage(){
        // console.log(currentImage.nextElementSibling);
        showImage(currentImage.previousElementSibling || gallery.lastElementChild)
    }


    //These are our event listeners

    images.forEach( image => 
        image.addEventListener('click', (e) => showImage
        (e.currentTarget))
    );

    //loop over each image
    images.forEach( image => 
        //attach an event listener for each image
        image.addEventListener('keyup', (e) => {
        // when that is keyup'd check if it was enter
        if(e.key = 'Enter') {
            //if it was, show that image
            showImage(e.currentTarget)
        };
    }))

    modal.addEventListener('click', handleClickOutside);

}

//use in on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));