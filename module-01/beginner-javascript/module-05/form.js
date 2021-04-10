const link = document.querySelector('.link');

link.addEventListener('click', function(e){
    console.log('Clicked the link...')
    e.preventDefault();
})

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = e.currentTarget.name.value
    // console.log(e.currentTarget.name.value);
    // console.log(e.currentTarget.email.value);
    // console.log(e.currentTarget.agree.checked);
    if( name.includes('chad')){
        alert ('Sorry bro!')
    }
})

function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);
}

// signupForm.name.addEventListener('keypress', logEvent);
// signupForm.name.addEventListener('keyup', logEvent);
// signupForm.name.addEventListener('keydown', logEvent);
// signupForm.name.addEventListener('focus', logEvent);
// signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handleClickPhoto(){
    console.log('Works it!');
}

photo.addEventListener('click', handleClickPhoto)
photo.addEventListener('keyup', handleClickPhoto)
