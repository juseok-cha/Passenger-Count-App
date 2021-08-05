// document.getElementById("count-el").innerText = 5
// Change the count-el in the HTML to reflect the new count

// camelCase
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}


// 1.Create a function, save(), which logs out the count when it's called.
function save(){
  let countStr = count + " - ";
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}