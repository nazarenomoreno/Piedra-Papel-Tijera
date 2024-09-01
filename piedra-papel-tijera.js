let puntuacion = JSON.parse(localStorage.getItem('puntuacion')) || {     // obtener puntuación de localStorage al cargar la página o inicializar
  victorias:0,
  perdidas:0,
  empates:0
}                        

document.querySelector('.js-puntuacion').innerHTML=`Victorias: ${puntuacion.victorias}. Empates: ${puntuacion.empates}. Perdidas: ${puntuacion.perdidas}`;


function Juego(yo) {
  const computer = generadorAleatorio();                             // se guarda el valor retornado en computer                            
  let resultado='';                                                  // let porque su valor cambiará al menos una vez durante la ejecución

  if (yo=='Piedra'){
    if(computer===yo){
      resultado = 'es un Empate'
      
    } else if (computer==='Papel'){
      resultado='Has perdido'

    } else if(computer==='Tijera'){
      resultado='¡Has ganado!'
    }
  }

  if (yo=='Papel'){
    if(computer===yo){
      resultado = 'es un Empate'


    } else if (computer==='Tijera'){
       resultado='Has perdido'


    } else if(computer==='Piedra'){
      resultado='¡Has ganado!'
    }
  
  
  }        

  if (yo=='Tijera'){
    if(computer===yo){
      resultado = 'es un Empate'


    } else if (computer==='Piedra'){
       resultado='Has perdido'


    } else if(computer==='Papel'){
     resultado='¡Has ganado!'
    }   
  }

  
  if(resultado==='es un Empate'){
    puntuacion.empates= puntuacion.empates+1

  } else if(resultado==='Has perdido'){
    puntuacion.perdidas=puntuacion.perdidas+1

  }else if(resultado==='¡Has ganado!'){
    puntuacion.victorias=puntuacion.victorias+1
  }
  


  localStorage.setItem('puntuacion', JSON.stringify(puntuacion))         



  document.querySelector('.js-comosalio').innerHTML=`${resultado}`
  document.querySelector('.js-queeligiocadauno').innerHTML=`Tu
  <img src="imagenes/${yo}.png" class="icono">                         <!--Comentario aquí-->
  <img src="imagenes/${computer}.png" class="icono">
  Computadora`
  document.querySelector('.js-puntuacion').innerHTML=`Victorias: ${puntuacion.victorias}. Empates: ${puntuacion.empates}. Perdidas: ${puntuacion.perdidas}`;

}

function generadorAleatorio() {
  const random = Math.random();                                 //genera un numero aleatorio entre 0 a 1

  if (random >= 0 && random < 1/3) {

    return 'Piedra';                                                //devuelve el valor de computer hacia donde fue llamada la funcion

  } else if (random >= 1/3 && random < 2/3) {

    return 'Papel';                                                 

  } else {

    return 'Tijera';                                                  

  }
}


function reseteo(){
  puntuacion.victorias=0; puntuacion.empates=0; puntuacion.perdidas=0;
  localStorage.removeItem('puntuacion');           //eliminamos del localstorage lo que hay guardado bajo la clave puntuacion
  document.querySelector('.js-puntuacion').innerHTML=`Victorias: ${puntuacion.victorias}. Empates: ${puntuacion.empates}. Perdidas: ${puntuacion.perdidas}`;
}
