const userInputNumber = document.getElementById("number-box")

const addButton = document.getElementById("add-button")
const subtractButton = document.getElementById("subtract-button")
const multiplyButton = document.getElementById("multiply-button")
const divideButton = document.getElementById("divide-button")

const calculationOutput = document.getElementById("current-calculation")
const resultOutput = document.getElementById("current-result")

function outputResult(result, text) {
    resultOutput.textContent = result
    calculationOutput.textContent = text
}