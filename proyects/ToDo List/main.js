let padre = document.getElementById("padre");

// Formulario
let formulario = document.createElement("div");

let inputNombre = document.createElement("input");
inputNombre.setAttribute("type", "text");
inputNombre.setAttribute("placeholder", "Nombre de la tarea");

let inputDescripcion = document.createElement("input");
inputDescripcion.setAttribute("type", "text");
inputDescripcion.setAttribute("placeholder", "Descripción");

let inputFecha = document.createElement("input");
inputFecha.setAttribute("type", "date");

let selectPrioridad = document.createElement("select");

let alta = document.createElement("option");
alta.value = "alta";
alta.innerHTML = "Alta";

let media = document.createElement("option");
media.value = "media";
media.innerHTML = "Media";

let baja = document.createElement("option");
baja.value = "baja";
baja.innerHTML = "Baja";

selectPrioridad.appendChild(alta);
selectPrioridad.appendChild(media);
selectPrioridad.appendChild(baja);

let btnCrear = document.createElement("input");
btnCrear.setAttribute("type", "button");
btnCrear.setAttribute("value", "Crear tarea");


formulario.appendChild(inputNombre);
formulario.appendChild(inputDescripcion);
formulario.appendChild(inputFecha);
formulario.appendChild(selectPrioridad);
formulario.appendChild(btnCrear);

padre.appendChild(formulario);

// Eliminar todas las tareas
let btnEliminarTodo = document.createElement("input");
btnEliminarTodo.type = "button";
btnEliminarTodo.value = "Eliminar todas";

padre.appendChild(btnEliminarTodo);

// Lista
let listaTareas = document.createElement("div");
padre.appendChild(listaTareas);

// Funcionamiento
btnCrear.onclick = function () {
  let tarea = document.createElement("div");

  tarea.classList.add(selectPrioridad.value);

  let nombre = document.createElement("div");
  nombre.innerHTML = "Tarea: " + inputNombre.value;

  let descripcion = document.createElement("div");
  descripcion.innerHTML = "Descripción: " + inputDescripcion.value;

  let fecha = document.createElement("div");
  fecha.innerHTML = "Fecha: " + inputFecha.value;

  let prioridadTexto = document.createElement("div");
  prioridadTexto.innerHTML = "Prioridad: " + selectPrioridad.value;

  let estado = document.createElement("div");
  estado.innerHTML = "Estado: Por completasr";

  let btnCompletar = document.createElement("input");
  btnCompletar.type = "button";
  btnCompletar.value = "Completar";

  let btnEliminar = document.createElement("input");
  btnEliminar.type = "button";
  btnEliminar.value = "Eliminar";

  btnCompletar.onclick = function () {
    nombre.style.textDecoration = "line-through";
    descripcion.style.textDecoration = "line-through";
    estado.innerHTML = "Estado: completada";
  };

  btnEliminar.onclick = function () {
    listaTareas.removeChild(tarea);
  };

  tarea.appendChild(nombre);
  tarea.appendChild(descripcion);
  tarea.appendChild(fecha);
  tarea.appendChild(prioridadTexto);
  tarea.appendChild(estado);
  tarea.appendChild(btnCompletar);
  tarea.appendChild(btnEliminar);

  listaTareas.appendChild(tarea);

  inputNombre.value = "";
  inputDescripcion.value = "";
  inputFecha.value = "";
};

btnEliminarTodo.onclick = function () {
  listaTareas.innerHTML = "";
};