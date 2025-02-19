// Palindromo
function esPalindromo(palabra){
    let palabraReversa = palabra.split('').reverse().join('');
    return palabra === palabraReversa;
}

let palabra = prompt("Ingrese una palabra: ");
if(esPalindromo(palabra)){
    alert(`La palabra ${palabra} es un palindromo`);
} else{
    alert(`La palabra ${palabra} NO es un palindromo`);
}




// Filtrar los numeros mayores de un numero > 5 (array, mostrar numeros arriba de 5)
let listaNumeros = [];
let listaMayores = [];

function pedirNum(){
    let cant = parseInt(prompt("Cuantos numeros agregara? "));
    for(let i = 0; i < cant; i++){
        let numero = parseInt(prompt(`Numero ${i+1}: `));
        listaNumeros.push(numero);
    }
}

function mayores(){
    for(let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] > 5){
            listaMayores.push(listaNumeros[i]);
        }
    }
}
pedirNum();
mayores();


alert("La lista de numeros mayores a 5 es: " + listaMayores.join(", "));




// Area de un circulo
let radio = parseFloat(prompt("Cual es el radio del circulo? "))
let area = Math.PI * Math.pow(radio, 2);

alert(`El area del circulo es: ${area}`);




// Escoger un ejercicio de anteriores clases y convertirlo en funcion

// // Encontrar el numero mayor de un arreglo (Ejercicio de Clase03)
// let arreglo = [3, 23, 24, 58, 4, 12, 39, 8, 46, 25, 10, 2, 15, 33, 28];
// let numeroMayor = 0

// for(let i = 1; i < arreglo.length; i++){
//     if(arreglo[i] > numeroMayor){
//         numeroMayor = arreglo[i];
//     }
// }

// console.log(numeroMayor);
let listaNumeros2 = []; 

function pedirNum2(){
    let cant = parseInt(prompt("Cuantos numeros agregara? "));
    for(let i = 0; i < cant; i++){
        let numero = parseInt(prompt(`Numero ${i+1}: `));
        listaNumeros2.push(numero);
    }
}

function numMayor(){
    let numeroMayor = listaNumeros2[0];
    for(let i = 1; i < listaNumeros2.length; i++){
        if(listaNumeros2[i] > numeroMayor){
            numeroMayor = listaNumeros2[i];
        }
    }
    alert(`El numero mayor es: ${numeroMayor}`);
}

pedirNum2();
numMayor();



// Crear operaciones matematicas
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Que operacion realizara? (+, -, *, /)");

let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Error";
    }
} else {
    resultado = "Operación no valida";
}

alert(`El resultado es: ${resultado}`);