function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearResult() {
    document.getElementById('result').innerText = '';
}

function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = math.evaluate(expression);
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}
