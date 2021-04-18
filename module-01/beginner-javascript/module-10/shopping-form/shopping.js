const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(e){
    e.preventDefault();
    console.log('submitted...');
    const name = e.currentTarget.item.value;
    const item = {
        name,
        id : Date.now(),
        complete: false
    }

    //Push the items into our state
    items.push(item);
    // console.log(`There  are now ${items.length} in your state`);
    if(!name) return;

    //clear the form 
    // e.currentTarget.item.value = '';
    e.target.reset();

    // displayItems();

    //fire off a custom event that will tell anyone anyone else
    //who cares that the items have been updated
    list.dispatchEvent( new CustomEvent('itemsUpdated'));
}

function displayItems(){
    const html = items.map( item => `
        <li class="shopping-item">
            <input 
                type="checkbox" 
                value=${item.id}
                ${item.complete && 'checked'}
            > 
            <span class="itemName"> ${item.name} </span>
            <button aria-label="Remove ${item.name}" value=${item.id}>&times;</button>
        </li>
    `).join('');
    list.innerHTML = html;
}

//LOCALSTORAGE
function mirrorLocaltStorage(){
    console.log('Saving items to localstorage...');
    localStorage.setItem('items', JSON.stringify(items))
}

function restorageFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    
    //pull the items from localstorage
    if( lsItems.length ) {
        // items = lsItems;
        // items.push(lsItems[0], lsItems[1]);
        // lsItems.forEach( item => items.push(item));
        items.push(...lsItems);
        list.dispatchEvent( new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id){
    console.log('Deleting item...', id);

    //update our item array without this one
    items = items.filter( item => item.id !== id);

    list.dispatchEvent( new CustomEvent('itemsUpdated'));
}

function markAsComplete(id){
    console.log('Marking as complete', id);
    const itemRef = items.find( item => item.id === id)
    itemRef.complete = !itemRef.complete;

    list.dispatchEvent( new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorLocaltStorage);

//Event Delegation: We listen or the click on the list <ul>
//but then delegation the click over to the button if that is
//what was clicked
list.addEventListener('click', function(e){
    const id = e.target.value;
    if(e.target.matches('button')){
        deleteItem(parseInt(id));
    }

    if(e.target.matches('input[type="checkbox"]')){
        markAsComplete(parseInt(id));
    }
})


restorageFromLocalStorage();

