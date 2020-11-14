function add(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

function subtract(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous - current;
  });
}
function multiply(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous * current;
  });
}
function divide(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous / current;
  });
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
//Variables for calculation
let numbers = [];
let equalsPressed = false;

// DOM Manipulation
const result = document.querySelector(".result");

//Setting up the equals button
const equals = document.querySelector(".btn-equals");
equals.addEventListener("click", () => {
  if (opInStr()) {
    equalsPressed = !equalsPressed;
  }
  result.textContent = eval(result.textContent);
});

//Setting up the clear button
const clear = document.querySelector(".btn-clear");
clear.addEventListener("click", () => (result.textContent = "0"));

//Set display click numbers
let numberArr = [...document.querySelectorAll(".numbers")];
for (let i = 0; i < numberArr.length; i++) {
  numberArr[i].addEventListener("click", (e) => {
    if (result.textContent == 0 || equalsPressed) {
      result.textContent = "";
      if (equalsPressed) equalsPressed = !equalsPressed;
    }
    result.textContent += e.target.textContent;
  });
}

//Set display when click operations
let operArr = [...document.querySelectorAll(".operations")];
for (let i = 0; i < operArr.length; i++) {
  operArr[i].addEventListener("click", (e) => {
    if (result.textContent != "0" && result.textContent != "") {
      result.textContent += e.target.textContent;
      if (equalsPressed) {
        equalsPressed = !equalsPressed;
      }
    }
  });
}

//Check if operator is in string for equals button
function opInStr() {
  let operators = ["+", "-", "*", "/"];
  for (op of operators) {
    if (result.textContent.includes(op)) return true;
  }
  return false;
}
