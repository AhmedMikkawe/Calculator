// Global Variables
let calculatorDisplayValue;
let buttonNumberValue = Array.from(document.querySelectorAll('.btn-number'));
let calculatorDisplay = document.querySelector('.calculator-display');
let buttonOperator = Array.from(document.querySelectorAll('.btn-operator'));
const equalsButton = document.querySelector('.btn-result');
const clearButton = document.querySelector('.btn-clear');
let firstNumber = '';
let secondNumber= '';
let chosenOperator = null;
let shouldResetDisplay = false;
// Basic calculator functionality
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
// operation function decides the operation based on the operator
const operate = (operator, num1, num2) =>{
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            if (num2 === 0) return null;
            else return divide(num1, num2);
    }
};

//event listener to show numbers on calculator's display
buttonNumberValue.forEach(button=>button.addEventListener('click', () => appendNumber(button.textContent)));
// when the user clicks the operator button it stores the first number
buttonOperator.forEach(button=>button.addEventListener('click', ()=>setOperation(button.textContent)));
// when the user clicks the equals button it calls the evaluate function
equalsButton.addEventListener('click', evaluate);
// when user click clear button
clearButton.addEventListener('click',clear);
// clear calculator display
function clear(){
    calculatorDisplay.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    chosenOperator = null;
}
// evaluate function
function evaluate() {
    if (chosenOperator === null || shouldResetDisplay) return;
    if (chosenOperator === '/' && calculatorDisplay.textContent === '0') {
        alert("you can't divide by 0!");
        clear();
        return;
    }
    secondNumber = calculatorDisplay.textContent;
    calculatorDisplay.textContent = roundResult(operate(chosenOperator,firstNumber,secondNumber));
    chosenOperator = null;
} 
// appendNumber function
function appendNumber(number) {
    if (calculatorDisplay.textContent === '0' || shouldResetDisplay) resetDisplay();
        calculatorDisplay.textContent += number;
    
}
// resetScreen function
function resetDisplay() {
    calculatorDisplay.textContent = '';
    shouldResetDisplay = false;
}
// setOperation function
function setOperation(operator) {
    if (chosenOperator !== null) evaluate();
        firstNumber = calculatorDisplay.textContent;
        chosenOperator = operator;
        shouldResetDisplay = true;
    
}
// roundResult function
function roundResult(number){
    return Math.round(number * 1000) / 1000;
}