//Select the element on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.btnShake');

const MOVE_AMOUNT = 10;

//Setup our canvas fro drawing
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

//color of the shake
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//Write a draw function
function draw({ key }){
    //increment the hue (color the shake)
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // console.log(key);
    //start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    //move our x and y values depending on what the user did
    switch( key ){
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default :
            break
    }
    
    ctx.lineTo(x, y);
    ctx.stroke();
} 

//Write a handler for the keys
function handlerKeys(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({ key: e.key });
    }
}

//Clear shake function
function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }, { once: true }) // canvas.removeEventListener( , )
}

//Listen from arrows keys
window.addEventListener('keydown', handlerKeys);
shakeButton.addEventListener('click', clearCanvas);
