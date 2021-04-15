//------------------------------IF-STATEMENTS------------------------------
// const isAdmin = true;

// function showAdminMessage(){
//     console.log('hi admin...');
// }

//isAdmin ? showAdminMessage() : null;

//  Abuse Conditional
//isAdmin && showAdminMessage();

// if(isAdmin) showAdminMessage(); //No good
// if(isAdmin) { showAdminMessage() }; //Good Practice

//------------------------------SWITCH---------------------------------------
const turtle = document.querySelector('.turtle');
let x = 0;
let y = 0;
const speed = 50;
let rotate = 0;
let flipped = false;

function handleKeydown(e){
    if(!e.key.includes('Arrow')) { return null };
    //else
    switch(e.key){
        case 'ArrowUp':
            y -= 1;
            rotate = 90;
            break;
        case 'ArrowDown':
            y += 1;
            rotate = -90;
            break;
        case 'ArrowLeft':
            x -= 1;
            rotate = 0;
            flipped = false;
            break;
        case 'ArrowRight':
            x += 1;
            rotate = 0;
            flipped = true;
            break;
        default:
            console.log('This move is not valid');
            break;
    }
    
    // turtle.style.background = 'red';
    // turtle.style.['background'] = 'red';
    turtle.setAttribute('style', `
    --x:${x * speed}px; 
    --y:${y * speed}px;
    --rotateY:${ flipped ? '180deg' : '0'};
    --rotate:${rotate}deg`)
}

window.addEventListener('keydown', handleKeydown)