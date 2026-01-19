let padre = document.getElementById("padre");
let btnCrear = document.getElementById("btnCrear");
let btnBorrar = document.getElementById("btnBorrar");
let p1, p2, p3, p4, p5;

// Función para un sprite con posición aleattoria
function crearCinco() {
    p1 = document.createElement("div");
    p1.innerHTML = '<img src="https://projectpokemon.org/images/normal-sprite/pikachu.gif">';
    p1.style.position = "absolute";
    p1.className = "pokemon";
    p1.style.left = Math.floor(Math.random() * 1000) + "px";
    p1.style.top = Math.floor(Math.random() * 300) + "px";
    padre.appendChild(p1);

    p2 = document.createElement("div");
    p2.innerHTML = '<img src="https://projectpokemon.org/images/normal-sprite/bulbasaur.gif">';
    p2.style.position = "absolute";
    p2.style.left = Math.floor(Math.random() * 1000) + "px";
    p2.style.top = Math.floor(Math.random() * 300) + "px";
    padre.appendChild(p2);

    p3 = document.createElement("div");
    p3.innerHTML = '<img src="https://projectpokemon.org/images/normal-sprite/charmander.gif">';
    p3.style.position = "absolute";
    p3.style.left = Math.floor(Math.random() * 1000) + "px";
    p3.style.top = Math.floor(Math.random() * 300) + "px";
    padre.appendChild(p3);

    p4 = document.createElement("div");
    p4.innerHTML = '<img src="https://projectpokemon.org/images/normal-sprite/squirtle.gif">';
    p4.style.position = "absolute";
    p4.style.left = Math.floor(Math.random() * 1000) + "px";
    p4.style.top = Math.floor(Math.random() * 300) + "px";
    padre.appendChild(p4);

    p5 = document.createElement("div");
    p5.innerHTML = '<img src="https://projectpokemon.org/images/normal-sprite/rapidash.gif">';
    p5.style.position = "absolute";
    p5.style.left = Math.floor(Math.random() * 1000) + "px";
    p5.style.top = Math.floor(Math.random() * 300) + "px";
    padre.appendChild(p5);

}

btnCrear.onclick = function () {
  crearCinco();
};

/*btnBorrar.onclick = function () {
    padre.innerHTML = "";
}
*/
btnBorrar.onclick = function () {
    padre.removeChild(p1);
    padre.removeChild(p2);
    padre.removeChild(p3);
    padre.removeChild(p4);
    padre.removeChild(p5);
}

// Forzar pulsado al iniciar la pagina
btnCrear.click();

