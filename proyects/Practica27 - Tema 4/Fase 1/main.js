let padre = document.getElementById("padre");

let hijo1 = document.createElement("div");
hijo1.innerHTML = "paco paco";
padre.appendChild(hijo1);

let hijo2 = document.createElement("div");
hijo2.className = "circulo";
hijo2.innerHTML = "O";
padre.appendChild(hijo2);

let hijo3 = document.createElement("ul");
hijo3.innerHTML = "Caballeros del Zodiaco";
padre.appendChild(hijo3);

let nieto1 = document.createElement("li");
nieto1.innerHTML = "Seiya";
hijo3.appendChild(nieto1);

let nieto2 = document.createElement("li");
nieto2.innerHTML = "Sergiu";
hijo3.appendChild(nieto2);

let hijo22 = document.createElement("div");
hijo22.className = "circuloRojo";
hijo22.innerHTML = "O";
padre.appendChild(hijo22);

//Cuadrado azul fondo rosa
let hijo5 = document.createElement("div");
hijo5.className = "cuadradoAzul";
padre.appendChild(hijo5);

let cain = document.createElement("input");
cain.setAttribute("type", "button");
cain.setAttribute("value", "Matar a hijo");
cain.setAttribute("id", "uno");
cain.setAttribute("class", "circulo");

cain.onclick = function () {
  padre.removeChild(hijo22);
};

/*
cain.addEventListener("click", function () {
  padre.removeChild(hijo5);
});
*/
padre.appendChild(cain);

cain.onclick = function () {
  padre.appendChild(hijo22);
};
