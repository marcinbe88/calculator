const userInputNumber = document.getElementById("number-box")

const addButton = document.getElementById("add-button")
const subtractButton = document.getElementById("subtract-button")
const multiplyButton = document.getElementById("multiply-button")
const divideButton = document.getElementById("divide-button")

const resultOutput = document.getElementById("current-result")
const calculationOutput = document.getElementById("current-calculation")

function outputResult(result, text) {
    resultOutput.textContent = result
    calculationOutput.textContent = text
}