let displayValue = "";

function abrirenDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calcular() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function borrarDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

