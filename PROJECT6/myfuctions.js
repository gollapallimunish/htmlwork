function add()
 {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var result = operand1 + operand2;
    document.getElementById("result").value = result;
}

function subtract()
 {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var result = operand1 - operand2;
    document.getElementById("result").value = result;
}

function multiply()
 {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var result = operand1 * operand2;
    document.getElementById("result").value = result;
}

function divide()
 {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var result = operand1 / operand2;
    document.getElementById("result").value = result;
}
