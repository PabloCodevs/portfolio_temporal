let boton = document.getElementById("boton-fortuna");
let proverbio = document.getElementById("resultado");

let proverbio1 = "La paciencia es un árbol de raíz amarga pero de frutos dulces";
let proverbio2 = "Quien pregunta es tonto un minuto, quien no pregunta es tonto siempre";
let proverbio3 = "El silencio es una fuente de gran fuerza";
let proverbio4 = "Un viaje de mil millas comienza con un solo paso";
let proverbio5 = "Aprender sin pensar es inútil, pensar sin aprender es peligroso";
let proverbio6 = "El que mueve montañas comienza quitando pequeñas piedras";
let proverbio7 = "Mejor encender una vela que maldecir la oscuridad";
let proverbio8 = "Cuando soplan vientos de cambio, algunos construyen muros y otros molinos";
let proverbio9 = "No temas crecer lentamente, teme solo quedarte quieto";
let proverbio10 = "La experiencia es un peine que te dan cuando ya te has quedado calvo";
let proverbio11 = "El sabio no dice lo que sabe, el necio no sabe lo que dice";
let proverbio12 = "El mejor momento para plantar un árbol fue hace 20 años";

let proverbios = [
    proverbio1, proverbio2, proverbio3, proverbio4, proverbio5, proverbio6,
    proverbio7, proverbio8, proverbio9, proverbio10, proverbio11, proverbio12
];

function mostrarProverbio() {
    let indice = Math.floor(Math.random() * proverbios.length);
    console.log(proverbios[indice])
    proverbio.innerHTML = "<p>" + proverbios[indice] + "</p>";
}

boton.addEventListener("click", mostrarProverbio);