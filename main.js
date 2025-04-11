const outputDisplayEl = document.getElementById("outputDisplay")
const minusBtnEl = document.getElementById("minus")
const resetBtnEl = document.getElementById("reset")
const plusBtnEl = document.getElementById("plus")

let count = "0"

// minusBtnEl.addEventListener("click", function(e){
//     alert("Minus 1")
// })
// minusBtnEl.addEventListener("click", (e) =>{
//     alert('Subtract 1')
// })
minusBtnEl.addEventListener("click", (e) =>{
    outputDisplayEl.innerText = count--
})

resetBtnEl.addEventListener("click", (e) =>{
    outputDisplayEl.innerText = "0"
})

plusBtnEl.addEventListener("click", (e) =>{
    outputDisplayEl.innerText = count++
})