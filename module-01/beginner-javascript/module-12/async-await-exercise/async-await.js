function wait(ms = 0){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup){
    popup.classList.remove('open');
    await wait(1000);
    //remove the popup entirely
    popup.remove();
    popup = null;
}

function ask(options){
    return new Promise(async function(resolve){
        // First we need to create a popup with all the fields in it
        const popup = document.createElement('form');
        popup.classList.add('popup');

        popup.insertAdjacentHTML(
            'afterbegin', 
            `<fieldset>
                <label>${options.title}</label>
                <input type="text" name="input">
                <button type="submit">Submit</button>
            </fieldset>
            `
        );

        //check if they want a cancel button
        if(options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            popup.firstChild.append(skipButton);
            //TODO: listen for a click on that cancel button
            skipButton.addEventListener('click', function(){
                resolve(null);
                },
                { once: true }
            );
        }
        //listen for the submit event on the inputs
        popup.addEventListener('submit', function(e){
            e.preventDefault();
            // console.log('Submitted!');
            resolve(e.target.input.value);
            console.log('value →', e.target.input.value);

            //remove it from the DOM entirely
            destroyPopup(popup);
            },
            { once: true }
        )

        //when someone dooees submit it resolve the data
        //that was in the input box!


        //insert that popup into the DOM
        document.body.appendChild(popup);

        //put a very small timeout before we add the open class
        // setTimeout(function(){
        //     popup.classList.add('open');
        // }, 50)
        await wait(50);
        popup.classList.add('open');

    })
}

//select all buttons that have a question
const buttons = document.querySelectorAll('[data-question]');

async function askMeQuestion(e){
    const button = e.currentTarget;
    // const cancel = e.currentTarget.dataset.cancel; //NOT WORKS
    const cancel = button.hasAttribute('data-cancel')
    const answer = await ask({title: button.dataset.question, cancel });
    // console.log(answer);
}

const questions = [
    { title: 'What is your name'},
    { title: 'What is your age', cancel: true},
    { title: 'What is your dogs age'},
];

async function asyncMap(array, callback){
    // make an array to store our results
    const result = [];
    //loop over our array
    for( const item of array){
        const answers = await callback(item);
        result.push(answers);
    }
    //when we are done the loop, return it!
    return result;
}

async function go(){
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}

go();

// async function askMany(){
//     for( const question of questions){
//         const answers = await ask(question);
//         console.log(answers);
//     }
// }

// askMany();

buttons.forEach(button => button.addEventListener('click', askMeQuestion));
