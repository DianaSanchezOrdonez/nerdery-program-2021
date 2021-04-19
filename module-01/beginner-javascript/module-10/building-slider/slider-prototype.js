function Slider(slider){
    if (!(slider instanceof Element)){
        throw new Error('No slider passed in');
    }

    this.slider = slider;

    //created some variables for working with the slider
    this.prev;
    this.current;
    this.next;

    //select the element needed for the slider
    this.slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    //When this slider is created, run the start slider function
    this.startSlider();
    this.applyClasses();

    //buttons event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function(){
    this.current = 
        this.slider.querySelector('.current') ||
        this.slides.firstElementChild;
    this.prev = 
        this.current.previousElementSibling ||
        this.slides.lastElementChild;
    this.next = 
        this.current.nextElementSibling ||
        this.slides.firstElementChild;
    // console.log({current, prev, next});
}

Slider.prototype.applyClasses = function(){
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

Slider.prototype.move = function(direction){
    //first strip all the classes off the current slides
    const classToRemove = ['prev', 'current', 'next'];
    // prev.classList.remove('prev', 'current', 'next');
    this.prev.classList.remove(...classToRemove);
    this.current.classList.remove(...classToRemove);
    this.next.classList.remove(...classToRemove);

    if(direction === 'back'){
        //make an new array of the new values, and destructure
        //them over and into the prev, current and next variables
        [this.prev, this.current, this.next] = [
            //get the prev slide, if there is none, get the last slide
            //from the entire slider for wrapping
            this.prev.previousElementSibling || 
            this.slides.lastElementChild, 
            this.prev, 
            this.current
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current, 
            this.next, 
            //get the next slide, or if it's at the end, loop around
            //and grab the first slide
            this.next.nextElementSibling || this.slides.firstElementChild
        ];
    }

    this.applyClasses();
}

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

window.dogSlider = dogSlider;

window.addEventListener('keyup', function(e){
    if( e.key === 'ArrowLeft'){
        dogSlider.move('back');
    }else{
        dogSlider.move();
    }
})

// console.log(mySlider, dogSlider);
