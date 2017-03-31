// Here's my javascript
var colors = new Array();
colors[0] = '#005960';
colors[1] = '#D2691E';
colors[2] = '#9C9A40';
colors[3] = '#4F84C4';

// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];      //Get the <ul> element
// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');        // Create element
var newTextLast = document.createTextNode('Countryside');    // Create text node
console.log(newItemLast, newTextLast);
newItemLast.appendChild(newTextLast);                  // Add text node to element
list.appendChild(newItemLast);
console.log(list);

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('Sand');

newItemFirst.appendChild(newTextFirst); // Put together the element + the text-align

list.insertBefore(newItemFirst, list.firstChild);
