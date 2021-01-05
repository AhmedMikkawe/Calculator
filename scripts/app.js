// Global Variables
let calculatorDisplayValue;
let buttonNumberValue = Array.from(document.querySelectorAll('.btn-number'));
let calculatorDisplay = document.querySelector('.calculator-display');
let buttonOperator = Array.from(document.querySelectorAll('.btn-operator'));
const equalsButton = document.querySelector('.btn-result');
let firstNumber;
let secondNumber;
let chosenOperator;
// Basic calculator functionality
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
// operation function decides the operation based on the operator
const operate = (operator, num1, num2) =>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);
    }
};

//event listener to show numbers on calculator's display
buttonNumberValue.forEach(button=>button.addEventListener('click', function() {
    calculatorDisplayValue = calculatorDisplay.textContent = calculatorDisplay.textContent + parseInt(button.getAttribute('value'));
    calculatorDisplay.setAttribute('value', calculatorDisplayValue);
    calculatorDisplayValue = parseInt(calculatorDisplayValue);
}));
// when the user clicks the operator button it stores the first number
buttonOperator.forEach(button=>button.addEventListener('click', function(){
    firstNumber = calculatorDisplay.getAttribute('value');
    chosenOperator = button.getAttribute('value');
    clear();
}));
// when the user clicks the equals button it calls the operate function
equalsButton.addEventListener('click', function () {
    secondNumber = calculatorDisplay.getAttribute('value');
    let result = operate(chosenOperator, firstNumber,secondNumber);
    calculatorDisplay.textContent = result;
});
// clear calculator display
function clear(){
    calculatorDisplay.textContent = '';
}