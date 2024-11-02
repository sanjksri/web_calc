let input = '';
let result = '';

function appendInput(value) {
    input += value;
    updateScreen();
}

function updateScreen() {
    const screen = document.getElementById('screen');
    screen.textContent = input || '0';
}

function calculate() {
    try {
        result = eval(input);
        if (result === Infinity || isNaN(result)) {
            result = 'Error';
        }
        input = result.toString();
        updateScreen();
    } catch (error) {
        input = '';
        result = '';
        updateScreen();
    }
}

function clearScreen() {
    input = '';
    result = '';
    updateScreen();
}

function deleteDigit() {
    input = input.slice(0, -1);
    updateScreen();
}

