let campo = document.getElementById("nombre");
let resultado = document.getElementById("resultado");

// Array principañ
let personajes = ["Goku", "Vegeta", "Gohan"];

// Imprimir lista
function actualizar() {
    resultado.innerHTML =
        "Personajes: " + personajes.join(", ");
}

// Añadir al final
function pushPersonaje() {
    let nombre = campo.value;

    if (nombre != "") {
        personajes.push(nombre);
        actualizar();
        campo.value = "";
    }
}

// Eliminar último
function popPersonaje() {
    personajes.pop();
    actualizar();
}

// Añadir al inicio
function unshiftPersonaje() {
    let nombre = campo.value;

    if (nombre != "") {
        personajes.unshift(nombre);
        actualizar();
        campo.value = "";
    }
}

// Eliminar primero
function shiftPersonaje() {
    personajes.shift();
    actualizar();
}

// Ordenar
function ordenarPersonajes() {
    personajes.sort();
    actualizar();
}

// Limpiar lista
function limpiarPersonajes() {
    personajes = [];
    actualizar();
}

// Mostrar al cargar
actualizar();