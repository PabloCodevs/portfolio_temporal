function edad() {
    var asdf = document.getElementById("uno");
    var edad = parseInt(prompt("¿Cuántos años tienes?"));

    if(edad >= 18){
        asdf.style.backgroundImage = "url('camion.jpg')";
    } else if (edad >= 12){
        asdf.style.backgroundImage = "url('coche.jpg')";
    } else {
        asdf.style.backgroundImage = "url('moto.jpg')";
    }

    asdf.style.backgroundSize = "cover";
    asdf.style.backgroundPosition = "center";
    asdf.style.backgroundRepeat = "no-repeat";
}
