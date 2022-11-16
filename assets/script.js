const addButton = document.getElementById("add-button")
const subtractButton = document.getElementById("subtract-button")
const multiplyButton = document.getElementById("multiply-button")
const divideButton = document.getElementById("divide-button")

const inputNumber = document.getElementById("number-box")
const resultText = document.getElementById("result-text")

let initialValue = 3

function add() {
    result = (+initialValue + +inputNumber.value)
    resultText.append(+initialValue + +inputNumber.value)
    
}

addButton.addEventListener('click', add)