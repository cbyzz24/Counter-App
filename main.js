const outputDisplayEl = document.getElementById("outputDisplay");
const minusBtnEl = document.getElementById("minus");
const resetBtnEl = document.getElementById("reset");
const plusBtnEl = document.getElementById("plus");

let count = 0;

// minusBtnEl.addEventListener("click", function(e){
//     alert("Minus 1")
// })
// minusBtnEl.addEventListener("click", (e) =>{
//     alert('Subtract 1')
// })

// minusBtnEl.onclick = function(){
//     count--;
//     outputDisplayEl.textContent = count;
// }

// resetBtnEl.onclick = function(){
//     count = 0;
//     outputDisplayEl.textContent = count;
// }

// plusBtnEl.onclick = function(){
//     count++;
//     outputDisplayEl.textContent = count;
// }

minusBtnEl.addEventListener("click", (e) =>{
    count--
    outputDisplayEl.textContent = count
})

resetBtnEl.addEventListener("click", (e) =>{
    count = 0
    outputDisplayEl.textContent = count
})

plusBtnEl.addEventListener("click", (e) =>{
    count++
    outputDisplayEl.textContent = count 
})

