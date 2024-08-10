const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            firstOperand = null;
            secondOperand = null;
            operator = null;
            display.textContent = '0';
        } else if (value === '=') {
            if (firstOperand !== null && operator !== null && currentInput !== '') {
                secondOperand = parseFloat(currentInput);
                currentInput = '';
                switch (operator) {
                    case '+':
                        display.textContent = firstOperand + secondOperand;
                        break;
                    case '-':
                        display.textContent = firstOperand - secondOperand;
                        break;
                    case '*':
                        display.textContent = firstOperand * secondOperand;
                        break;
                    case '/':
                        display.textContent = firstOperand / secondOperand;
                        break;
                }
                firstOperand = null;
                secondOperand = null;
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
                currentInput = '';
            }
            operator = value;
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
