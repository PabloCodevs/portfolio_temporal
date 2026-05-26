class Personaje {
    constructor(nombre, vida, poder, posX) {
        this.nombre = nombre;
        this.vida = vida;
        this.poder = poder;
        this.posX = posX;
    }

    atacar() {
        return this.poder;
    }

    recibirDano(dano) {
        this.vida -= dano;

        if (this.vida < 0) {
            this.vida = 0;
        }
    }

    mover(dx) {
        this.posX += dx;

        if (this.posX < 0) this.posX = 0;
        if (this.posX > 620) this.posX = 620;
    }
}

class Mario extends Personaje {
    constructor(nombre, vida, poder) {
        super(nombre, vida, poder, 50);
    }

    saltar() {
        return "Mario salta";
    }
}

class Enemigo extends Personaje {
    lanzarFuego() {
        return this.nombre + " lanza fuego";
    }
}

const mario = new Mario("Mario", 100, 20);
const bowser = new Enemigo("Bowser", 80, 15, 400);

let log = [];

function actualizar() {
    document.getElementById("mario-char").style.left = mario.posX + "px";
    document.getElementById("enemigo1-char").style.left = bowser.posX + "px";

    document.getElementById("mario-vida").innerHTML = mario.vida;
    document.getElementById("enemigo1-vida").innerHTML = bowser.vida;

    document.getElementById("mario-pos").innerHTML = mario.posX;
    document.getElementById("enemigo1-pos").innerHTML = bowser.posX;

    document.getElementById("log").innerHTML =
        log.map(x => "<div class='log-item'>" + x + "</div>").join("");
}

function agregarLog(msg) {
    log.unshift(msg);

    if (log.length > 8) {
        log.pop();
    }

    actualizar();
}

document.addEventListener("keydown", function(e) {

    if (e.key === "ArrowLeft") {
        mario.mover(-20);
        agregarLog("Mario va izquierda");
    }

    if (e.key === "ArrowRight") {
        mario.mover(20);
        agregarLog("Mario va derecha");
    }

    if (e.key === "ArrowUp") {
        agregarLog(mario.saltar());
    }

    if (e.code === "Space") {

        e.preventDefault();

        let distancia = Math.abs(mario.posX - bowser.posX);

        if (distancia < 100) {

            bowser.recibirDano(mario.atacar());

            agregarLog("Mario ataca");

            if (bowser.vida <= 0) {
                agregarLog("Bowser derrotado");
            }

        } else {
            agregarLog("Muy lejos");
        }
    }

    if (e.key === "f") {

        mario.recibirDano(10);

        agregarLog("Bowser ataca");

        if (mario.vida <= 0) {
            agregarLog("Game Over");
        }
    }
});

agregarLog("Mario vs Bowser");