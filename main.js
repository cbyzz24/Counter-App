const displayEl = document.getElementById("outputDisplay");
const minusBtnEl = document.getElementById("minus");
const resetBtnEl = document.getElementById("reset");
const plusBtnEl = document.getElementById("plus");

let count = 0;

minusBtnEl.addEventListener("click", () =>{
    count--
    displayEl.textContent = count
})

resetBtnEl.addEventListener("click", () =>{
    count = 0
    displayEl.textContent = 0
})

plusBtnEl.addEventListener("click", () =>{
    count++
    displayEl.textContent = count
})