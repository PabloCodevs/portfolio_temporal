// FASE 3: TODO LIST

let listaTareas = document.getElementById("listaTareas");
let inputNombre = document.getElementById("inputNombre");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputFecha = document.getElementById("inputFecha");
let btnCrear = document.getElementById("btnCrear");
let btnEliminarTodas = document.getElementById("btnEliminarTodas");

// Array para guardar las tareas
let tareas = [];

// Función para crear una tarea
btnCrear.onclick = function() {
    // Validar que no estén vacíos
    if (inputNombre.value === "" || inputDescripcion.value === "" || inputFecha.value === "") {
        alert("Por favor, completa todos los campos");
        return;
    }
    
    // Crear objeto tarea
    let tarea = {
        id: Math.random(),
        nombre: inputNombre.value,
        descripcion: inputDescripcion.value,
        fecha: inputFecha.value,
        completada: false
    };
    
    // Añadir a array
    tareas.push(tarea);
    
    // Limpiar inputs
    inputNombre.value = "";
    inputDescripcion.value = "";
    inputFecha.value = "";
    
    // Mostrar la tarea
    mostrarTareas();
};

// Función para mostrar todas las tareas
function mostrarTareas() {
    listaTareas.innerHTML = "";
    
    tareas.forEach(function(tarea) {
        // Crear contenedor de la tarea
        let divTarea = document.createElement("div");
        divTarea.classList.add("tarea");
        
        if (tarea.completada) {
            divTarea.classList.add("completada");
        }
        
        // Nombre de la tarea
        let nombre = document.createElement("div");
        nombre.classList.add("nombre-tarea");
        nombre.innerHTML = tarea.nombre;
        
        // Descripción
        let descripcion = document.createElement("div");
        descripcion.classList.add("descripcion-tarea");
        descripcion.innerHTML = "Descripción: " + tarea.descripcion;
        
        // Fecha
        let fecha = document.createElement("div");
        fecha.classList.add("fecha-tarea");
        fecha.innerHTML = "Fecha: " + tarea.fecha;
        
        // Botón Completar
        let btnCompletar = document.createElement("button");
        btnCompletar.innerHTML = "Completar";
        btnCompletar.classList.add("btn-completar");
        
        btnCompletar.onclick = function() {
            tarea.completada = !tarea.completada;
            mostrarTareas();
        };
        
        // Botón Eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        
        btnEliminar.onclick = function() {
            // Buscar el índice de la tarea
            let indice = tareas.indexOf(tarea);
            if (indice > -1) {
                tareas.splice(indice, 1);
            }
            mostrarTareas();
        };
        
        // Añadir elementos a la tarea
        divTarea.appendChild(nombre);
        divTarea.appendChild(descripcion);
        divTarea.appendChild(fecha);
        divTarea.appendChild(btnCompletar);
        divTarea.appendChild(btnEliminar);
        
        // Añadir tarea a la lista
        listaTareas.appendChild(divTarea);
    });
}

// Función para eliminar todas las tareas
btnEliminarTodas.onclick = function() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar");
        return;
    }
    
    if (confirm("¿Estás seguro de que quieres eliminar todas las tareas?")) {
        tareas = [];
        mostrarTareas();
    }
};
