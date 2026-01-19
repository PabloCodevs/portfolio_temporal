let campo = document.getElementById("campo")
let marcador = document.getElementById("marcador")
let intervalo
let timeout
let puntos = 0
let pausa = false

// Generar sprite
function crearSprite() {
    if (!pausa) {
        let sprite = document.createElement("div")
        sprite.className = "sprite"

        sprite.style.left = Math.floor(Math.random() * 360) + "px"
        sprite.style.top = Math.floor(Math.random() * 360) + "px"

        let colores = ["red","blue","green","yellow","purple"]
        sprite.style.background = colores[Math.floor(Math.random() * colores.length)]

        sprite.onclick = function() {
            campo.removeChild(sprite)
            puntos++
            marcador.innerHTML = puntos
        }

        campo.appendChild(sprite)
    }
}

// Empezar
document.getElementById("start").onclick = function() {
    pausa = false
    puntos = 0
    marcador.innerHTML = puntos
    campo.innerHTML = ""

    crearSprite()
    timeout = setTimeout(crearSprite, 2000)
    intervalo = setInterval(crearSprite, 3000)
}

// Pausar
document.getElementById("pause").onclick = function() {
    pausa = !pausa
}

// Reiniciar
document.getElementById("reset").onclick = function() {
    clearInterval(intervalo)
    clearTimeout(timeout)
    pausa = false
    puntos = 0
    marcador.innerHTML = puntos
    campo.innerHTML = ""
}
