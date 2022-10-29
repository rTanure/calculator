const display = document.getElementById('display')

let first_number = 0
let second_number = undefined;
let operator = undefined;
let displayingInput = true;
let result = undefined;

function buttonClick(key) {
  if(isNaN(key)) {
    simbolAction(key)
  } else {
    nubmerAction(key)
  }
}

function nubmerAction(key) {
  if (first_number != 0) {
    first_number = first_number * 10 + Number(key)
  } else {
    first_number = key
  }
  renderDisplay(first_number)
}

function simbolAction(key) {
  switch(key) {
    case "c":
      first_number = 0;
      second_number = undefined;
      operator = undefined;
      break;
    case "<":
      // Programas Comando de apagar um número ao digitar
      break;
    case "+":
      operator = "+";
      break;
    case "-":
      operator = "+";
      break;
    case "*":
      operator = "+";
      break;
    case "/":
      operator = "+";
      break;
    case "=":
      operator = undefined;
  }
} 

function renderDisplay(number) {
  display.innerHTML = number
}