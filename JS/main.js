//CAPTURAMOS EL BOTON Y EL INPUT
const botonAgregar = document.querySelector('#agregarTarea');
const tareaAgregada = document.querySelector('#tarea');
const listadoTareas = document.querySelector('.listado');


//FUNCION PARA CRAGAR LAS TAREAS QUE ESTAN ALMACENADAS EN EL LOCAL STORAGE
function cargarTareas() {
     const tareasGuardadas = localStorage.getItem('tareas')
     if (tareasGuardadas) {
          const tareas = JSON.parse(tareasGuardadas);
          tareas.forEach(tarea => {
               agragarTareaDOM(tarea.texto, tarea.comletada)
          });

     }
}
//FUNCION PARA GUARDAR LAS TAREAS EN EL LOCAL STORAGE
function guardarTareas() {
     const tareas = [];
     document.querySelectorAll('.listado li').forEach(itemsTarea => {
          const spanTarea = itemsTarea.querySelector('.texto-tarea');
          if (spanTarea) {
               tareas.push({
                    texto: spanTarea.textContent,
                    completada: itemsTarea.classList.contains('completada')
               });
          }
     })

     localStorage.setItem('tareas', JSON.stringify(tareas));
}

//FUNCION PARA AGREGAR UNA TAREA AL DOM

function agragarTareaDOM(texto, completada = false) {
     const itemsTarea = document.createElement('li');
     itemsTarea.className = 'list-group-item d-flex justify-content-between align-items-center';

     if (completada) {
          itemsTarea.classList.add('completada');
     }

     const spanTarea = document.createElement('span');
     spanTarea.className = 'texto-tareas';
     spanTarea.textContent = texto;

     //CONTENEDOR PARA LOS BOTONES
     const contenedorBotones = document.createElement('div');

     //BOTON PARA MARCAR LA TAREA COMO COMPLETADA
     const botonCompletado = document.createElement('button');
     botonCompletado.className = 'btn btn-succes btn-sm me-2'
     botonCompletado.textContent = "✓";
     botonCompletado.style.marginLeft = '10px';
     botonCompletado.onclick = () => {
          itemsTarea.classList.toggle('completada');
          guardarTareas();
     }

     contenedorBotones.appendChild(botonCompletado);

     //BOTON PARA ELIMINAR TAREA
     const botonEliminar = document.createElement('button');
     botonCompletado.className = 'btn btn-succes btn-sm '
     botonEliminar.textContent = "✗";
     botonEliminar.style.marginLeft = "5px";
     botonEliminar.onclick = () => {
          itemsTarea.remove();
          guardarTareas();
     }
     contenedorBotones.appendChild(botonEliminar);

     //AGREGAMOS LOS BOTONES AL ITEM DE LA TAREA
     itemsTarea.appendChild(spanTarea);
     itemsTarea.appendChild(contenedorBotones);

     //AGREGAMOS LA TAREA A LA LISTA
     listadoTareas.appendChild(itemsTarea);
}



//FUNCION PARA AGREGAR TAREAS
function sumarTarea() {
     const textoTarea = tareaAgregada.value.trim();

     if (textoTarea === '') {
          Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Error, debes ingresar una tarea!",

          });
          return;
     }
     agragarTareaDOM(textoTarea);
     guardarTareas();

     tareaAgregada.value = '';
}

botonAgregar.addEventListener('click', sumarTarea);
tareaAgregada.addEventListener('keypress', function (e) {
     if (e.key === 'Enter') {
          sumarTarea();
     }
});

//CARGAMOS LAS TAREAS AL INICIAR
cargarTareas();




