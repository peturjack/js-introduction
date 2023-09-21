//document.getElementById("count-el").innerText = 5

// let firstBatch = 5;
// let count = firstBatch

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el") //countEl is the same as the count-el id so the h2 element

let count = 0; //count starts at 0

function increment() {
  count = count + 1 //count is count plus one 
  countEl.innerText = count // the countel inner text is the same as count wich increses by one when i click the button assosciated with the button
}

function numberReset() {
  count = count = 0; //count is always at 0
  countEl.innerText = count //the countEl inner text gets reseted to 0 when i click the button assosciated with the function
}




