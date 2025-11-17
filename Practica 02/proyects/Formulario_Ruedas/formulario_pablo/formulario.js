const uno = document.getElementById('uno');
const selectRueda = document.getElementById('categoriaRueda');
const ruedaImg = document.getElementById('rueda');

function muestraDatos() {
    // Variables constantes
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const categoria = document.getElementById('categoria');
    const color = document.getElementById('colorFondo'); // colorpicker

    // Mensajes
    let mensaje = '';
    mensaje += '<strong>Nombre:</strong> ' + nombre.value + ' ' + apellido.value;
    mensaje += '<br><strong>Edad:</strong> ' + edad.value;
    mensaje += '<br><strong>Categoría:</strong> ' + categoria.value;

    // Switch para mensaje extra
    switch(categoria.value) {
        case "principiante":
            mensaje += '<br>Has elegido el nivel Principiante';
            break;
        case "intermedio":
            mensaje += '<br>Has elegido el nivel Intermedio';
            break;
        case "experto":
            mensaje += '<br>Has elegido el nivel Experto';
            break;
    }

    // Mostrar el mensaje en el div
    uno.innerHTML = mensaje;

    // Cambiar el color del fondo
    uno.style.backgroundColor = color.value;

    // Cambiar imagen de la rueda según la selección
    let imagen = '';
    switch(selectRueda.value) {
        case "soft":
            imagen = "images/soft.webp";
            break;
        case "medium":
            imagen = "images/medium.webp";
            break;
        case "hard":
            imagen = "images/hard.webp";
            break;
    }

    ruedaImg.src = imagen;
}