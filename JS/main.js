//CAPTURAMOS EL BOTON Y EL INPUT
const botonAgregar = document.querySelector ('#agregarTarea');
const tareaAgregada = document.querySelector ('#tarea');
const listadoTareas = document.querySelector ('.listado-tareas');



//fUNCION PARA AGREGAR TAREAS
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

     //CREAMOS EL ELEMTNO PARA LA  TAREA
     const agregarItem = document.createElement('li');
     agregarItem.textContent = textoTarea;

     //BOTON PARA MARCAR LA TAREA COMO COMPLETADA
     const botonCompletado = document.createElement('button');
     botonCompletado.textContent = "✓";
     botonCompletado.style.marginLeft = '10px';
     botonCompletado.onclick = () => agregarItem.style.textDecoration = "line-throughdsgdgg"; 

      //BOTON PARA ELIMINAR TAREA
     const botonEliminar = document.createElement('button');
     botonEliminar.textContent = "✗";
     botonEliminar.style.marginLeft = "5px";
     botonEliminar.onclick = () => listadoTareas.removeChild(agregarItem);

     //AGREGAMOS LOS BOTONES AL ITEM DE LA TAREA
     agregarItem.appendChild(botonCompletado);
     agregarItem.appendChild(botonEliminar);

     //AGREGAMOS LA TAREA A LA LISTA
     listadoTareas.appendChild(agregarItem);

     //LLIMPIAMOS EL INPUT, PARA UNA TAREA NUEVA
     tareaAgregada.value = '';
}






botonAgregar.addEventListener('click', sumarTarea);
tareaAgregada.addEventListener('keypress', function (e) {
     if (e.key === 'Enter') {
     sumarTarea();
     }
});
     
