const display = document.getElementById("countdown");
const button = document.getElementById("boton");

let numero = 5;
let temporizador;

button.addEventListener("click", empezar);

function empezar() {
    button.disabled = true;
    numero = 5;
    display.innerHTML = numero;

    temporizador = setInterval(contar, 1000);
}

function contar() {
    numero = numero - 1;
    display.innerHTML = numero;

    if (numero === 0) {
        clearInterval(temporizador);
        setTimeout(() => {
            button.disabled = false;
        }, 1000);
    }
}