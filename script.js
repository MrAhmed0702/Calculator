let currentInput = '0';

function append(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
    } catch (e) {
        currentInput = 'Error';
        document.getElementById('display').innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').innerText = currentInput;
}
