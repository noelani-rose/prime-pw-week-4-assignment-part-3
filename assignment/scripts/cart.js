console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5
function addItem (item){
    if (isFull()) {
        return false;
    }
    basket.push(item);
    return true;
}

function listItems (){
    for (i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}

function empty () {
    basket = [];
    return basket;
}

function isFull(){
    return !(basket.length <= maxItems - 1)
}

function removeItem (item) {
    let findIndex = basket.indexOf(item);
    if (findIndex === -1){
        return null;
    }
    basket.splice(findIndex, 1);
    return item;
}

var basket = [];
console.log(basket)
console.log('new item', addItem('apple'));
console.log('new item', addItem('banana'));
console.log('new item', addItem('avocado'));
console.log('new item', addItem('water'));
console.log('new item', addItem('pen'));
console.log(isFull());
console.log('new item', addItem('pear'));
console.log(isFull());
listItems();
console.log(basket);
console.log(removeItem('apple'));
console.log(removeItem('water'));
console.log(removeItem('phone'));
console.log(basket);
console.log('basket is now empty', empty());

