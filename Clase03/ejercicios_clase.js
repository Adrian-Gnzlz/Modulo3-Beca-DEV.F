// Usar cualquier tipo de bucle para realizar una tabla de multiplicar
let numero = parseInt(prompt("Ingresa el numero del que quieres conocer su tabla: "));
let tabla = "";

for(let i = 1; i <= 10; i++){
    tabla += numero + "x" + i + "=" + (numero*i) + "\n";
}

alert("La tabla del numero " + numero + " es:\n " + tabla)



// Contar los digitos de un numero
let numero2 = prompt("Ingrese un numero para contar cuantos digitos tiene: ");
let listaNumeros = numero2.split("");
let contador = 0;

for(i = 0; i < listaNumeros.length; i++){
    contador ++;
}

alert("El numero introducido tiene: " + contador + " digitos");



// Obtener la suma de los digitos de un numero (ej. 55 = 10)
let numero3 = prompt("Ingresa un numero para sumar sus digitos: ") // siempre devuelve string 
let suma = 0;

for(let i = 0; i < numero3.length; i++){
    suma += parseInt(numero3[i]);
}

alert("Suma: " + suma);



// Encontrar el numero mayor de un arreglo
let arreglo = [3, 23, 24, 58, 4, 12, 39, 8, 46, 25, 10, 2, 15, 33, 28];
let numeroMayor = 0

for(let i = 1; i < arreglo.length; i++){
    if(arreglo[i] > numeroMayor){
        numeroMayor = arreglo[i];
    }
}

console.log(numeroMayor);
