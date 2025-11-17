// Tomar elementos al inicio
let input1 = document.getElementById("operador1");
let input2 = document.getElementById("operador2");
let resultadoSpan = document.getElementById("resultado");
let historialDiv = document.getElementById("historial");

// SUMA
function sumar() {
    let operador1 = Number(input1.value);
    let operador2 = Number(input2.value);
    let resultado = operador1 + operador2;

    resultadoSpan.innerHTML = resultado;

    historialDiv.innerHTML += '<p style="color:blue;">' + operador1 + ' + ' + operador2 + ' = ' + resultado + '</p>';

    cambiarFondo(resultado);
}

// RESTA
function restar() {
    let operador1 = Number(input1.value);
    let operador2 = Number(input2.value);
    let resultado = operador1 - operador2;

    resultadoSpan.innerHTML = resultado;

    historialDiv.innerHTML += '<p style="color:red;">' + operador1 + ' - ' + operador2 + ' = ' + resultado + '</p>';

    cambiarFondo(resultado);
}

// MULTIPLICACION
function multiplicar() {
    let operador1 = Number(input1.value);
    let operador2 = Number(input2.value);
    let resultado = operador1 * operador2;

    resultadoSpan.innerHTML = resultado;

    historialDiv.innerHTML += '<p style="color:green;">' + operador1 + ' * ' + operador2 + ' = ' + resultado + '</p>';

    cambiarFondo(resultado);
}

// DIVISION
function dividir() {
    let operador1 = Number(input1.value);
    let operador2 = Number(input2.value);
    let resultado = operador1 / operador2;

    resultadoSpan.innerHTML = resultado;

    historialDiv.innerHTML += '<p style="color:violet;">' + operador1 + ' / ' + operador2 + ' = ' + resultado + '</p>';

    cambiarFondo(resultado);
}

// CAMBIAR FONDO
function cambiarFondo(resultado) {
    if (resultado % 2 === 0) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    } else {
        document.body.style.backgroundColor = '#2f7c31';
    }
}

// LIMPIAR HISTORIAL
function limpiarHistorial() {
    historialDiv.innerHTML = '';
    resultadoSpan.innerHTML = 0;
    document.body.style.backgroundColor = 'white';
}