const uno = document.getElementById('uno')

function muestraDatos(){
    // No hemos visto ni `const` ni `let´ donde:
    // let: se usa para variables que pueden ser reasignadas
    // const: para constantes que no pueden ser reasignadas una vez que se les asigna un valor
    // .value: se refiere a la propiedad de un elemento de formulario (como input o textarea)
    //      que almacena y recupera el contenido de texto que el usuario ha ingresado.
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')

    let mensaje = '';
    mensaje+= nombre.value;
    mensaje+= ' '
    mensaje+=apellido.value;

    uno.innerHTML=mensaje

}