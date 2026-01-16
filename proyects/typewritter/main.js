let folio = document.getElementById("folio");
let btnBorrar = document.getElementById("borrar");
let btnToggle = document.getElementById("toggle");
let activo = true;
document.addEventListener("keydown", escribir);
function escribir(event) {
    if (activo) {
        folio.innerHTML = folio.innerHTML + event.key;
    }
}
btnBorrar.addEventListener("click", borrar);
function borrar() {
    folio.innerHTML = "";
}
btnToggle.addEventListener("click", activarDesactivar);
function activarDesactivar() {
    if (activo) {
        activo = false;
        btnToggle.innerHTML = "Enable";
    } else {
        activo = true;
        btnToggle.innerHTML = "Disable";
    }
}