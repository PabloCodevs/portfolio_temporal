// Objeto Goku simple

const goku = {
    nombre: "Goku",
    x: 0,
    y: 0,
    vel: 50,
    elemento: null,
    
    init: function() {
        this.elemento = document.getElementById("goku");
        this.actualizar();
    },
    
    mover: function(dirX, dirY) {
        this.x = this.x + (dirX * this.vel);
        this.y = this.y + (dirY * this.vel);
        
        let mapa = document.querySelector(".mapa");
        let maxW = mapa.offsetWidth;
        let maxH = mapa.offsetHeight;
        
        if (this.x < 0) this.x = 0;
        if (this.x > maxW - 50) this.x = maxW - 50;
        if (this.y < 0) this.y = 0;
        if (this.y > maxH - 50) this.y = maxH - 50;
        
        this.mostrarEfecto("Mov!");
        this.actualizar();
    },
    
    teletransportar: function() {
        let mapa = document.querySelector(".mapa");
        this.x = Math.random() * (mapa.offsetWidth - 50);
        this.y = Math.random() * (mapa.offsetHeight - 50);
        
        this.mostrarEfecto("TELE!");
        this.actualizar();
    },
    
    actualizar: function() {
        this.elemento.style.left = this.x + "px";
        this.elemento.style.top = this.y + "px";
        
        document.getElementById("posX").innerHTML = Math.round(this.x);
        document.getElementById("posY").innerHTML = Math.round(this.y);
    },
    
    mostrarEfecto: function(msg) {
        let div = document.createElement("div");
        div.className = "efecto";
        div.innerHTML = msg;
        document.getElementById("efectos").appendChild(div);
        
        setTimeout(function() {
            div.remove();
        }, 1000);
    }
};

// Iniciar
goku.init();

// Controles
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        goku.mover(0, -1);
    }
    if (e.key === "ArrowDown") {
        goku.mover(0, 1);
    }
    if (e.key === "ArrowLeft") {
        goku.mover(-1, 0);
    }
    if (e.key === "ArrowRight") {
        goku.mover(1, 0);
    }
    if (e.key === " ") {
        e.preventDefault();
        goku.teletransportar();
    }
});
