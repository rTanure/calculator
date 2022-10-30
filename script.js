const displayElement = document.querySelectorAll("#display")[0]

let number_1 = 0
let number_2 = 0
let operator = "+"

function buttonClick(key) {
  switch(key) {
    // Number
    case Number(key):
      pushNumber(key)
      break

    // Backspace
    case "<":
      backspace()
      break
    
    // Operator
    case "+":
    case "-":
    case "*":
    case "/":
      setOperator(key)
      break
    
    // Reset
    case "c":
      reset()
      break
    
    // result
    case "=":
      calcResult()
      break
  }
}

function reset() {
  number_1 = 0
  number_2 = 0
  operator = "+"
  display(number_2)
}

function calcResult() {
  display("result")
}

function setOperator(symbol) {
  operator = symbol
}

function pushNumber(number) {
  if (!(number_2 > 9999999)) {
    if(number_2 === 0) {
      number_2 = number
    } else {
      number_2 = number_2 * 10 + number
    }
  }
  display(number_2)
}

function backspace() {
  number_2 = Math.trunc(number_2/10)
  display(number_2)
}

function display(data) {
  displayElement.innerHTML = data
}