const botones = document.getElementById('buttons');
const notificaciones = document.getElementById('toast');

botones.addEventListener('click', (e) => {
    switch(e.target.className) {
     case 'btn-sucess':
        let exitCode = 
        `<div class="toast sucess tiempo">
            <div class="toast-icon">
                <img src="icons/check-circle.svg" alt="advertencia">
            </div>
            <div class="toast-text">
                <h3>Exito</h3>
                <p>Todo correcto</p>
            </div>
            <div class="toast-button">
                <button id="closeSucess"><img src="icons/x.svg" alt=""></button>
            </div>
        </div>`
      
        notificaciones.insertAdjacentHTML('beforeend', exitCode)
        cierreAutomatico(notificaciones.lastElementChild);
     break;

     case 'btn-warning':
        let warningCode = `
        <div class="toast warning tiempo">
            <div class="toast-icon">
                <img src="icons/alert-triangle.svg" alt="advertencia">
            </div>
            <div class="toast-text">
                <h3>Advertencia</h3>
                <p>Hay ligeros detalles</p>
            </div>
            <div class="toast-button">
                <button id="closeWarning"><img src="icons/x.svg" alt=""></button>
            </div>
        </div>`

        notificaciones.insertAdjacentHTML('beforeend', warningCode)
        cierreAutomatico(notificaciones.lastElementChild);
     break;

     case 'btn-error':
         let errorCode = `
        <div class="toast error tiempo">
            <div class="toast-icon">
                <img src="icons/x-circle.svg" alt="advertencia">
            </div>
            <div class="toast-text">
                <h3>Error</h3>
                <p>No se pudo completar la accion</p>
            </div>
            <div class="toast-button">
                <button id="closeError"><img src="icons/x.svg" alt=""></button>
            </div>
        </div>`

        notificaciones.insertAdjacentHTML('beforeend', errorCode) 
        cierreAutomatico(notificaciones.lastElementChild);
     break;
    }  
});

notificaciones.addEventListener('click', (e) => {
   const botonCerrar = e.target.closest('button')
   if(!botonCerrar) return 
   
   const toast = botonCerrar.closest('.toast')
   toast.classList.add('.cierre')

   setTimeout(() => {
      toast.remove();
   }, 300)
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


