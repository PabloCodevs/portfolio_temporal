// Captura de elementos del DOM
let campo = document.getElementById("nombre")
let resultado = document.getElementById("resultado")
let btnPush = document.getElementById("btn-push")
let btnPop = document.getElementById("btn-pop")
let btnUnshift = document.getElementById("btn-unshift")
let btnShift = document.getElementById("btn-shift")
let btnSort = document.getElementById("btn-sort")
let btnClear = document.getElementById("btn-clear")

let personajes = ["Goku", "Vegeta", "Gohan", "Piccolo", "Bulma"]

function actualizar() {
    resultado.innerHTML = "Personajes: " + personajes.join(", ")
}

// Añade al final
btnPush.onclick = function() {
    let nombre = campo.value.trim()
    if (nombre != "") {
        personajes.push(nombre)
        actualizar()
        campo.value = ""
    }
}

// Elimina el último
btnPop.onclick = function() {
    personajes.pop()
    actualizar()
}

// Añade a  l inicio
btnUnshift.onclick = function() {
    let nombre = campo.value.trim()
    if (nombre != "") {
        personajes.unshift(nombre)
        actualizar()
        campo.value = ""
    }
}

// Elimina el primero
btnShift.onclick = function() {
    personajes.shift()
    actualizar()
}

// Ordena alfabeticamente
btnSort.onclick = function() {
    personajes.sort()
    actualizar()
}

// limpia cadena
btnClear.onclick = function() {
    personajes = []
    actualizar()
}

actualizar()