const defaultResult = 0
let currentResult = defaultResult

function getUserNumberInput() {
  return parseInt(userInputNumber.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription)
}

function add() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  createAndWriteOutput('+', initialResult, enteredNumber)
  userInputNumber.value = 0
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber)
    userInputNumber.value = 0
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput("*", initialResult, enteredNumber)
    userInputNumber.value = 0
}

function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput("/", initialResult, enteredNumber)
    userInputNumber.value = 0
}

addButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)
multiplyButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide)