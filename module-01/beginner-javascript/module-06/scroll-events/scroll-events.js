// function scrollToAccept(){
//     const terms = document.querySelector('.terms-and-conditions');
//     if(!terms){
//         return;
//     }

//     terms.addEventListener('scroll', function(e){
//         console.log(e.currentTarget.scrollTop);
//         console.log(e.currentTarget.scrollHeight);
//     });
// }

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

function obCallback(payload){
    // console.log('payload', payload[0].isIntersecting);
    // console.log('payload', payload[0].intersectionRatio);
    if(payload[0].intersectionRatio === 1){
        button.disabled = false;
        //stop observer
        // ob.unobserve(terms.lastElementChild)
    }else{
        button.disabled = true;
    }
}

ob.observe(terms.lastElementChild)

// terms.addEventListener('scroll', function(e){
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// });
