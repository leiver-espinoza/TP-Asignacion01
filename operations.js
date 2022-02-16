// Estas son las funciones designadas a ser llamadas desde la interfaz gráfica
// las cuáles realizan el llamado a las funciones de cálculo y generan el resultado
// traducido a un valor desplegable y entendible por el usuario, al mismo tiempo
// que llaman una función para actualizar el listado de los cálculos o validaciones

function calculate(pressedButton) {
    var valueFirst = document.getElementById("numericValue1").value;
    var valueSecond = document.getElementById("numericValue2").value;
    var operation = pressedButton.value;
    var prefix = "El resultado de " + valueFirst + " " + operation + " " + valueSecond + " es: ";

    result = setupResultsStyle(performSimpleCalculation(valueFirst, valueSecond, operation));
    updateResultsHistory(prefix + result);
}

function evaluatePrimeNumber() {
    var numericValue = document.getElementById("numericValue1").value;
    var prefix = "El número " + numericValue + " es primo? ";

    if (isNumber(numericValue)) {
        result = setupResultsStyle(isPrime(numericValue) ? "SI" : "NO");
    } else {
        result = setupResultsStyle("ERROR!");
    }
    updateResultsHistory(prefix + result);
}

function evaluatePalindrome() {
    var numericValue = document.getElementById("numericValue1").value;
    var prefix = "El número " + numericValue + " es palíndromo? ";
    if (isNumber(numericValue)) {
        console.log("Valor numerico: " + numericValue);
        result = setupResultsStyle(isPalindrome(numericValue) ? "SI" : "NO");
    } else {
        result = setupResultsStyle("ERROR!");
    }
    updateResultsHistory(prefix + result);
}

// Estas son las funciones encargadas de realizar el cálculos de los resultados
// con base a las funcionalidades solicitadas, sea esto devolviendo el resultado
// de cada uno de los cálculos o bien un valor True-False dependiendo de la validación

function isNumber(value){
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function performSimpleCalculation(valueFirst, valueSecond, operation) {
    if (isNumber(valueFirst) && isNumber(valueSecond)) {
        return eval(valueFirst + operation + valueSecond);
    } else {
        return setupResultsStyle("ERROR!")
    }
}

function isPrime(numericValue) {
    for (var evaluatedNumber = 2; evaluatedNumber < (parseInt(numericValue / 2)+1); evaluatedNumber++) {
        if (numericValue % evaluatedNumber === 0) {
            return false;
        }
    }
    return numericValue !== 1;
}

function isPalindrome(numericValue) {
    var numericValueReversed = numericValue.split("").reverse().join("");
    return numericValueReversed === numericValue;
}