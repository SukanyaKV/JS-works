function addition() {
    a = Number(document.cal.value1.value);
    b = Number(document.cal.value2.value);
    var c = a + b;
    document.calculator.total.value = c;
}

function subtraction() {
    a = Number(document.cal.value1.value);
    b = Number(document.cal.value2.value);
    var c = a - b;
    document.calculator.total.value = c;
}

function multiplication() {
    a = Number(document.cal.value1.value);
    b = Number(document.cal.value2.value);
    c = a * b;
    document.calculator.total.value = c;

}

function division() {
    a = Number(document.cal.value1.value);
    b = Number(document.cal.value2.value);
    c = a / b;
    document.calculator.total.value = c;
}


let resultValue = document.getElementById("result");
resultValue.innerHTML = "<p > " + c + "</p>";