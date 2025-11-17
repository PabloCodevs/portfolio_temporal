let div1 = document.getElementById("uno");
let div2 = document.getElementById("dos");
let div3 = document.getElementById("tres");
let div4 = document.getElementById("cuatro");
let div5 = document.getElementById("cinco");
let velocidad = document.getElementById("velocidad");

function moverDiv() {
  let aleatorio1x = Math.floor(Math.random() * 801);
  let aleatorio1y = Math.floor(Math.random() * 401);
  div1.style.transition = "all " + velocidad.value + "s ease";
  div1.style.left = aleatorio1x + "px";
  div1.style.top = aleatorio1y + "px";

  let aleatorio2x = Math.floor(Math.random() * 801);
  let aleatorio2y = Math.floor(Math.random() * 401);
  div2.style.transition = "all " + velocidad.value + "s ease";
  div2.style.left = aleatorio2x + "px";
  div2.style.top = aleatorio2y + "px";

  let aleatorio3x = Math.floor(Math.random() * 801);
  let aleatorio3y = Math.floor(Math.random() * 401);
  div3.style.transition = "all " + velocidad.value + "s ease";
  div3.style.left = aleatorio3x + "px";
  div3.style.top = aleatorio3y + "px";

  let aleatorio4x = Math.floor(Math.random() * 801);
  let aleatorio4y = Math.floor(Math.random() * 401);
  div4.style.transition = "all " + velocidad.value + "s ease";
  div4.style.left = aleatorio4x + "px";
  div4.style.top = aleatorio4y + "px";

  let aleatorio5x = Math.floor(Math.random() * 801);
  let aleatorio5y = Math.floor(Math.random() * 401);
  div5.style.transition = "all " + velocidad.value + "s ease";
  div5.style.left = aleatorio5x + "px";
  div5.style.top = aleatorio5y + "px";
}