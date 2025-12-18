const teclaA = document.getElementById("teclaA");
const teclaS = document.getElementById("teclaS");
const teclaD = document.getElementById("teclaD");
const teclaW = document.getElementById("teclaW");
const teclaLlamada = document.getElementById("llamada");

const sonidoA = new Audio("audio/discord1.mp3");
const sonidoS = new Audio("audio/discord2.mp3");
const sonidoD = new Audio("audio/discord3.mp3");
const sonidoW = new Audio("audio/discord4.mp3");
const sonidoLlamada = new Audio("audio/discord5.mp3");

const coordX = document.querySelector(".coordX");
const coordY = document.querySelector(".coordY");


document.addEventListener("keydown", manejarTecla);
document.addEventListener("keyup", manejarTecla);

document.addEventListener()

function manejarTecla(e){
    switch(e.key.toLowerCase()){
        case "a":
            if(e.type === "keydown"){
                teclaA.style.backgroundColor = "red";
                teclaA.style.boxShadow = "0 0 10px rgba(52, 224, 55, 1)";
                teclaA.style.transform = "scale(1.2)";
                teclaA.style.transition = "transform 0.1s, box-shadow 0.1s";
                sonidoA.currentTime = 0;
                sonidoA.play();
                console.log("Has apretado 'a'");
            } else if(e.type === "keyup"){
                teclaA.style.backgroundColor = "";
                teclaA.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
                teclaA.style.transform = "scale(1)";
                console.log("Has soltado 'a'");
            }
        break;

        case "s":
            if(e.type === "keydown"){
                teclaS.style.backgroundColor = "green";
                teclaS.style.boxShadow = "0 0 10px rgba(224, 52, 190, 1)"
                teclaS.style.transform = "scale(1.2)";
                teclaS.style.transition = "transform 0.1s, box-shadow 0.1s";

                sonidoS.currentTime = 0;
                sonidoS.play();


                console.log("Has apretado 's'");
               } else if(e.type === "keyup"){
                teclaS.style.backgroundColor = "";
                teclaS.style.boxShadow = ""
                teclaS.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
                teclaS.style.transform = "scale(1)";
                console.log("Has soltado 's'");
               }
        break;

        case "d":
            if(e.type === "keydown"){
                teclaD.style.backgroundColor = "blue";
                teclaD.style.boxShadow = "0 0 10px rgba(224, 52, 52, 1)";
                teclaD.style.transform = "scale(1.2)";
                teclaD.style.transition = "transform 0.1s, box-shadow 0.1s";
                sonidoD.currentTime = 0;
                sonidoD.play();
                console.log("Has apretado 'd'");
            } else if(e.type === "keyup"){
                teclaD.style.backgroundColor = "";
                teclaD.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
                teclaD.style.transform = "scale(1)";
                console.log("Has soltado 'd'");
            }
        break;

        case "w":
            if(e.type === "keydown"){
                teclaW.style.backgroundColor = "yellow";
                teclaW.style.boxShadow = "0 0 10px rgba(52, 224, 78, 1)";
                teclaW.style.transform = "scale(1.2)";
                teclaW.style.transition = "transform 0.1s, box-shadow 0.1s";
                sonidoW.currentTime = 0;
                sonidoW.play();
                console.log("Has apretado 'w'");
            } else if(e.type === "keyup"){
                teclaW.style.backgroundColor = "";
                teclaW.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
                teclaW.style.transform = "scale(1)";
                console.log("Has soltado 'w'");
            }
        break;

        case " ":
            if(e.type === "keydown"){
                teclaLlamada.style.backgroundColor = "chartreuse";
                teclaLlamada.style.boxShadow = "0 0 10px rgba(52, 224, 78, 1)";
                teclaLlamada.style.transform = "scale(1.2)";
                teclaLlamada.style.transition = "transform 0.1s, box-shadow 0.1s";

                sonidoLlamada.currentTime = 0;
                sonidoLlamada.play();

                console.log("Has apretado barra espaciadora");
            } else if(e.type === "keyup"){
                teclaLlamada.style.backgroundColor = "";
                teclaLlamada.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
                teclaLlamada.style.transform = "scale(1)";
                console.log("Has soltado barra espaciadora");
            }
        break;

        default:
                console.warn("Tecla sin apretar");
    }

    document.addEventListener("mousemove", (e) => {
    coordX.textContent = `Coordenada X: ${e.clientX}`;
    coordY.textContent = `Coordenada Y: ${e.clientY}`;
    });
}


