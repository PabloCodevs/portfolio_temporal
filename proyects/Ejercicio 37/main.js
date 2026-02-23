class Personaje {
    constructor(nombre, vida, ataques) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataques = ataques;
    }

    recibirDanio(puntos) {
        this.vida -= puntos;
        if (this.vida < 0) this.vida = 0;
    }

    curar(puntos) {
        this.vida += puntos;
    }
}

class Heroe extends Personaje {
    constructor(nombre, vida, ataques) {
        super(nombre, vida, ataques);
        this.tipo = "Heroe";
    }
}

class Villano extends Personaje {
    constructor(nombre, vida, ataques) {
        super(nombre, vida, ataques);
        this.tipo = "Villano";
    }
}

const heroes = [
    new Heroe("Once", 120, [
        { nombre: "Onda mental", puntos: 25, tipo: "daño" },
        { nombre: "Meditacion", puntos: 20, tipo: "cura" },
        { nombre: "Psicogolpe", puntos: 30, tipo: "daño" }
    ]),
    new Heroe("Mike", 95, [
        { nombre: "Batazo", puntos: 15, tipo: "daño" },
        { nombre: "Primeros auxilios", puntos: 18, tipo: "cura" },
        { nombre: "Embestida", puntos: 20, tipo: "daño" }
    ]),
    new Heroe("Dustin", 85, [
        { nombre: "Pedrada", puntos: 12, tipo: "daño" },
        { nombre: "Reparacion", puntos: 15, tipo: "cura" },
        { nombre: "Electropulso", puntos: 18, tipo: "daño" }
    ])
];

const villanos = [
    new Villano("Azotamentes", 150, [
        { nombre: "Azote", puntos: 22, tipo: "daño" },
        { nombre: "Absorcion", puntos: 15, tipo: "cura" },
        { nombre: "Tinieblas", puntos: 28, tipo: "daño" }
    ]),
    new Villano("Vecna", 130, [
        { nombre: "Maldicion", puntos: 24, tipo: "daño" },
        { nombre: "Drenaje", puntos: 20, tipo: "cura" },
        { nombre: "Crujido", puntos: 30, tipo: "daño" }
    ]),
    new Villano("Demogorgon", 100, [
        { nombre: "Zarpazo", puntos: 18, tipo: "daño" },
        { nombre: "Festin", puntos: 14, tipo: "cura" },
        { nombre: "Desgarro", puntos: 24, tipo: "daño" }
    ])
];

let jugador1 = heroes[Math.floor(Math.random() * heroes.length)];
let jugador2 = villanos[Math.floor(Math.random() * villanos.length)];

let turno = 1;



let nombre1 = document.getElementById("nombre1");
let nombre2 = document.getElementById("nombre2");

let vida1 = document.getElementById("vida1");
let vida2 = document.getElementById("vida2");

let mano1 = document.getElementById("mano1");
let mano2 = document.getElementById("mano2");

let log = document.getElementById("log");

let turnoTexto = document.getElementById("turno");
let boton = document.getElementById("robar");



function actualizar() {
    nombre1.innerHTML = jugador1.nombre;
    nombre2.innerHTML = jugador2.nombre;
    vida1.innerHTML = "Vida: " + jugador1.vida;
    vida2.innerHTML = "Vida: " + jugador2.vida;
    turnoTexto.innerHTML = turno == 1 ? "Turno: " + jugador1.nombre : "Turno: " + jugador2.nombre;
}

function robarCarta() {
    boton.disabled = true;
    let mazo = turno == 1 ? jugador1.ataques : jugador2.ataques;
    let ataque = mazo[Math.floor(Math.random() * mazo.length)];

    if (turno == 1) {
        mostrarCarta(ataque, mano1, 1);
    } else {
        mostrarCarta(ataque, mano2, 2);
    }
}

function mostrarCarta(carta, contenedor, jugador) {
    let div = document.createElement("div");
    div.className = "carta";
    let especial = carta.puntos >= 18 ? " [POTENTE]" : "";
    div.innerHTML = carta.nombre + especial + " (" + carta.tipo + " " + carta.puntos + ")";

    div.onclick = function () {
        jugarCarta(jugador, carta);
        div.remove();
    };
    contenedor.appendChild(div);
}

function jugarCarta(numJugador, carta) {
    let atacante = numJugador == 1 ? jugador1 : jugador2;
    let objetivo = numJugador == 1 ? jugador2 : jugador1;

    if (carta.tipo == "daño") {
        objetivo.recibirDanio(carta.puntos);
    } else {
        atacante.curar(carta.puntos);
    }

    actualizar();
    log.innerHTML += "<br>" + atacante.nombre + " usa " + carta.nombre;

    if (jugador1.vida <= 0) {
        log.innerHTML += "<br>FIN: Ha ganado " + jugador2.nombre;
        boton.disabled = true;
        return;
    }

    if (jugador2.vida <= 0) {
        log.innerHTML += "<br>FIN: Ha ganado " + jugador1.nombre;
        boton.disabled = true;
        return;
    }

    turno = turno == 1 ? 2 : 1;

    actualizar();
    boton.disabled = false;
}

boton.onclick = function () {
    robarCarta();
};

actualizar();