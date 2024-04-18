document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '0';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = button.textContent;

            if (buttonValue === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = 'Error';
                }
            } else if (buttonValue === 'C') {
                currentInput = '0';
            } else {
                if (currentInput === '0' && !isNaN(buttonValue)) {
                    currentInput = buttonValue;
                } else {
                    currentInput += buttonValue;
                }
            }

            display.textContent = currentInput;
        });
    });
});
