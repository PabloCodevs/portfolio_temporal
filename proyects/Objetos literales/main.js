const goku = {
    x: 0,
    y: 0,
    vel: 20,
    elemento: null,

    init() {
        this.elemento = document.getElementById("goku");
        this.actualizar();
    },

    mover(dx, dy) {
        const mapa = document.querySelector(".mapa");

        this.x += dx * this.vel;
        this.y += dy * this.vel;

        const maxX = mapa.clientWidth - 50;
        const maxY = mapa.clientHeight - 50;

        if (this.x < 0) this.x = 0;
        if (this.x > maxX) this.x = maxX;

        if (this.y < 0) this.y = 0;
        if (this.y > maxY) this.y = maxY;

        this.actualizar();
        this.efecto("Movimiento");
    },

    teletransportar() {
        const mapa = document.querySelector(".mapa");

        this.x = Math.random() * (mapa.clientWidth - 50);
        this.y = Math.random() * (mapa.clientHeight - 50);

        this.actualizar();
        this.efecto("Teletransporte");
    },

    actualizar() {
        this.elemento.style.left = this.x + "px";
        this.elemento.style.top = this.y + "px";

        document.getElementById("posX").textContent = Math.round(this.x);
        document.getElementById("posY").textContent = Math.round(this.y);
    },

    efecto(texto) {
        const cont = document.getElementById("efectos");

        const div = document.createElement("div");
        div.classList.add("efecto");
        div.textContent = texto;

        cont.appendChild(div);

        setTimeout(() => div.remove(), 1000);
    }
};

goku.init();

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            goku.mover(0, -1);
            break;
        case "ArrowDown":
            goku.mover(0, 1);
            break;
        case "ArrowLeft":
            goku.mover(-1, 0);
            break;
        case "ArrowRight":
            goku.mover(1, 0);
            break;
        case " ":
            e.preventDefault();
            goku.teletransportar();
            break;
    }
});