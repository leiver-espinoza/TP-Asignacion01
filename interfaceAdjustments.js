// Los botones de la interface se ajustarán con base a lo que el usuario desee hacer.
// Al mismo tiempo, las secciones correspondiente para cada botón serán activadas o desactivadas
// de la misma manera
function switchFunctionalities(validationNumber) {
    const enabledButton = "btn btn-success btnMenuOptions";
    const disabledButton = "btn btn-default btnMenuOptions";

    document.getElementById('rowMathCalculations').style.display = ((validationNumber == 1) ? "block" : "none");
    document.getElementById('rowVerifications').style.display = ((validationNumber == 1) ? "none" : "block");
    
    document.getElementById('parameterFirstText').innerHTML = ((validationNumber == 1) ? "Ingrese el primer valor numérico:" : "Ingrese el número que desea validar:");
    document.getElementById('parameterSecond').style.display = ((validationNumber == 1) ? "block" : "none");
    
    document.getElementById('buttonOperations').disabled = (validationNumber  == 1);
    document.getElementById('buttonOperations').className = ((validationNumber == 1) ? disabledButton : enabledButton);
    document.getElementById('buttonOperations').className = ((validationNumber != 1) ? enabledButton : disabledButton);
    
    document.getElementById('buttonValidations').disabled = (validationNumber != 1);
    document.getElementById('buttonValidations').className = ((validationNumber == 1) ? enabledButton : disabledButton);
    document.getElementById('buttonValidations').className = ((validationNumber != 1) ? disabledButton : enabledButton);
}

function updateResultsHistory(newResult) {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br>"
        + newResult;
}

// Para ajustar el formato de los resultados que se muestran, se deben modificar las clases
// "results" y "resultingValue" dentro del archivo styles.css
function setupResultsStyle(sourceText) {
    return '<span class="resultingValue">' + sourceText + '</span>';
}

function clearForm() {
    document.getElementById("numericValue1").value = "";
    document.getElementById("numericValue2").value = "";
}

function restartPage() {
    clearForm();
    document.getElementById('buttonOperations').click();
    document.getElementById("result").innerHTML = "Historial de cálculos o validaciones realizados:"
}