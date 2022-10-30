const displayElement = document.querySelectorAll("#display")[0]

let memory = 0
let atual = 0
let result = 0

let repeat = false
let changeInput = false

let operator = "+"

// MAP THE KEYS PRESSED AND START YOUR RESPECTIVE FUNCIONS QUEUE
function buttonClick(key) {
  switch(key) {
    // Number
    case Number(key):
      changeInput = true
      repeat = false

      pushNumber(key)
      display(atual)

      break

    // Backspace
    case "<":
      repeat = false

      backspace()
      display(atual)

      break
    
    // Operator
    case "+":
    case "-":
    case "*":
    case "/":
      repeat = false

      setOperator(key)
      saveValue()

      break
    
    // Reset
    case "c":
      reset()
      display(atual)

      break
    
    // result
    case "=":
      repeat = true

      calcResult()
      saveResult()
      changeInput = false
      display(result)

      break
  }
}

// PUSH ONE NUMBER IN THE LAST POSITION
function pushNumber(number) {
  if (!(atual > 9999999)) {
    if(atual === 0) {
      atual = number
    } else {
      atual = atual * 10 + number
    }
  }
}

// REMOVE THE NUMBER AT THE LAST POSITION
function backspace() {
  atual = Math.trunc(atual/10)
}

// CHANGE TE OPERATOR
function setOperator(symbol) {
  operator = symbol
}

// SAVE THE VALUE IN THE MEMORY
function saveValue() {
  if(changeInput) {
    memory = atual
    atual = 0
  } else {
    memory = result
    atual = 0
  }
}

// RESET THE CALCULATOR
function reset() {
  memory = 0
  atual = 0
  result = 0
  operator = "+"
  repeat = false
}

// CALCULATES THE OPERATION
function calcResult() {
  switch (operator) {
    case "+":
      result = memory + atual
      break
    case "-":
      result = memory - atual
      break
    case "*":
      result = memory * atual
      break
    case "/":
      result = memory / atual
      break
  }
}

// SAVE THE RESULT FROM THE OPERATION
function saveResult() {
  if(repeat) {
    memory = result
  } else {
    memory = result
    // atual = 0
  }
  
  switch (repeat) {
    case true:
      memory = result
      break
    case false:
      console.log("falso")
      memory = result
      atual = 0
      break
  }

}

// SHOW SOME DATA IN THE CALCULATOR DISPLAY
function display(data) {
  if(Number(data)) {
    displayElement.innerHTML = parseInt(data*100)/100
  } else {
    displayElement.innerHTML = data
  }
}