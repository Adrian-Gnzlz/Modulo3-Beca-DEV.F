// Cambiar color de un texto cuando presiono el boton
function cambiarColor(){
    let texto = document.getElementById("textoColor")

    if(texto.style.color === "red"){
        texto.style.color = "black";
    } else{
        texto.style.color = "red";
    }
}




// Crea un elemento que permita ocultar o mostrar un parrafo cada vez que se presione
function ocultarParrafo(){
    let parrafo = document.getElementById("textoParrafo")

    if(parrafo.style.display === "none"){
        parrafo.style.display = "block";
    } else{
        parrafo.style.display = "none";
    }
}




// Contador de clicks
let contador = 0;

function contarClicks(){
    contador ++;
    let clicks = document.getElementById("clicks")
    clicks.innerText = `Número de clicks: ${contador}`;
}