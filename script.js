var fotoPregunta = document.querySelectorAll(".tarjeta");
var tablero = document.querySelector(".tablero");
var contintentos = document.querySelector(".intentos")

let img1, img2;  
let intentos = 0;

fotoPregunta.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function(){
        
        //escuchar clicks de las tarjetas
        chequearTarjetas(tarjeta)
        
    })
});

let contadorGanador = 0;

var imgCapturadas = 0; // contador de imagenes capturadas, al tener 2 compara
function chequearTarjetas(tarjeta) 
{   
    //bandera para saber cuantas cartas tengo dada vuelta
    if (imgCapturadas == 0) 
        {   
            
            img1 = tarjeta;
            img1.children[0].classList.add("transparente")
            img1.children[1].classList.add("mostrar")
            img1.children[1].classList.remove("transparente")

            //bloquear click en la imagen que ya esta dada vuelta
            img1.classList.add("disabled")
            imgCapturadas++;

            /*console.log("img otra")
            console.log(tarjeta)
            console.log("imagen 1")
            console.log(img1.children[1])*/
        }
        
        else 
        {   img2 = tarjeta;
            img2.children[0].classList.add("transparente")
            img2.children[1].classList.add("mostrar")
            img2.children[1].classList.remove("transparente")

            img2.classList.add("disabled")

            //bloquear tablero mientras compara
            tablero.classList.add("disabled")
            imgCapturadas++

            /*console.log("imagen 2")
            console.log(img2.children[1])
            console.log("img")
            console.log(tarjeta)*/
            
        }
        

        if (imgCapturadas == 2)
        {
         setTimeout(() => {

         compararImagen(img1, img2)
         }, 700);
         }


    } 


 function compararImagen(img1, img2){
    
        /*console.log("comparacion:")
        console.log(img1.children[1].dataset.value)
        console.log(img2.children[1].dataset.value)*/

        intentos++
        
    if(img1.children[1].dataset.value == img2.children[1].dataset.value)
        {   

            // dejar permanentes las imagenes que coincidieron
                
                img1.classList.add("disabled")
                img2.classList.add("disabled")
                
                contadorGanador++;
                
                // popup ganador
                if(contadorGanador > 7)
                {alert("Ganaste!")

                reiniciarJuego()
                }
        }
    
    else
     {
    //volver las dos imagen al estado inicial si no coincidieron
    img1.children[0].classList.remove("transparente")
    img1.children[1].classList.remove("mostrar")
    img1.children[1].classList.add("transparente")
    
    img1.classList.remove("disabled")

    img2.children[0].classList.remove("transparente")
    img2.children[1].classList.remove("mostrar")
    img2.children[1].classList.add("transparente")

    img2.classList.remove("disabled")

    
    }
    
    //habilitar tablero para poder capturar dos cartas de nuevo
    tablero.classList.remove("disabled")

    imgCapturadas = 0; // volver contador a 0
    
   
    contintentos.innerHTML = " "+intentos;
  }

  function reiniciarJuego()
  {
    fotoPregunta.forEach(function(tarjeta)
    {
    tarjeta.children[0].classList.remove("transparente")
    tarjeta.children[1].classList.remove("mostrar")
    tarjeta.children[1].classList.add("transparente")
    tarjeta.classList.remove("disabled")
    
    })

    intentos = 0;
    contadorGanador = 0;
    imgCapturadas = 0;
    contintentos.innerHTML = " "+intentos;
  }