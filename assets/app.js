const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

function getUserNumberInput() {
  return parseInt(userInputNumber.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription)
}

function writeToLog(
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function add() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  createAndWriteOutput('+', initialResult, enteredNumber)
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
  userInputNumber.value = 0
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
    userInputNumber.value = 0
}



addButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)
multiplyButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide)