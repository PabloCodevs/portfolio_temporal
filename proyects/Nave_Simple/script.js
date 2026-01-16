function moverArriba(){
            var miDiv = document.getElementById("miDiv");
            miDiv.style.top = "0px";
        }

        function moverAbajo(){
            var miDiv = document.getElementById("miDiv");
            miDiv.style.bottom = "0px";
        }

        function moverIzquierda(){
            var miDiv = document.getElementById("miDiv");
            miDiv.style.left = "0px";
        }

        function moverDerecha(){
            var miDiv = document.getElementById("miDiv");
            miDiv.style.right = "0px"; // mueve hacia la derecha
        }

        function volver(){
            var miDiv = document.getElementById("miDiv");
            miDiv.style.top = "50px";
            miDiv.style.left = "50px";
        }