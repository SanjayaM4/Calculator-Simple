function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = math.evaluate(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
