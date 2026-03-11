const botones = document.getElementById('buttons');
const notificaciones = document.getElementById('toast');

botones.addEventListener('click', (e) => {
    switch(e.target.className) {
     case 'btn-sucess':
       addNotification('sucess', 'check-circle.svg', 'Exito', 'Todo correcto')
     break;

     case 'btn-warning':
      addNotification('warning', 'alert-triangle.svg', 'Advertencia', 'Hay ligeros detalles')
     break;

     case 'btn-error':
      addNotification('error', 'x-circle.svg', 'Error', 'No se pudo completar la accion')
     break;
    }  
});

//Funcion para crear las notificaciones 
function addNotification(type, image, title, content) {
   const Code = `
   <div class="toast ${type} tiempo">
      <div class="toast-icon">
            <img src="icons/${image}" alt="Notificacion">
      </div>
      <div class="toast-text">
            <h3>${title}</h3>
            <p>${content}</p>
      </div>
         <div class="toast-button">
            <button id="closeSucess"><img src="icons/x.svg" alt=""></button>
      </div>
   </div>
   `
   notificaciones.insertAdjacentHTML('beforeend', Code) 
   cierreAutomatico(notificaciones.lastElementChild);
}

//Cierre manual por boton
notificaciones.addEventListener('click', (e) => {
   const botonCerrar = e.target.closest('button')
   if(!botonCerrar) return 
   
   const toast = botonCerrar.closest('.toast')
   toast.classList.add('cierre')

   setTimeout(() => {
      toast.remove();
   }, 400)
})

//Funcion para manejar el cierre - Pendiente
function cierreAutomatico(toast) {
   setTimeout(() => {
         toast.classList.add('cierre')

         setTimeout(() => {
            toast.remove()
      }, 400)
   }, 4000)
}


