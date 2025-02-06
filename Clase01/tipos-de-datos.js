console.log("Hola Mundo!!!!");

/**
 * El siguiente codigo corresponde a tipos de Datos Primitivas
 * 
 * Son los tipos mas basicos de JS
 */
// String:
let nombre = "Adrian";
// Number:
let edad = 21;
// Boolean:
let mayorEdad = true;
// Undefined (el cual no se ha definido un valor):
let indefinida;
// Null:
let noContestado = null;
// BigInt:
let dinero = 1234123412341234n;
// Symbol (Un valor que deba ser unico):
let cuentaBancaria = Symbol("cuentaBancaria");

/**
 * A continuacion se mostrar el tipo de dato que contienen
 * las variables antes declaradas.
 * 
 * Utilizando 'typeof'
 */
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof indefinida);
console.log(typeof noContestado);
console.log(typeof dinero);
console.log(typeof cuentaBancaria);

/**
 * De igual manera se mostraran los valores especificos
 * que tienen asignados dichas variables.
 * 
 * Utilizando 'console.log(variable)'
 */
console.log(nombre);
console.log(edad);
console.log(mayorEdad);
console.log(indefinida);
console.log(noContestado);
console.log(dinero);
console.log(cuentaBancaria);



/**
 * El siguiente codigo corresponde a tipos de Datos de Referencia (Compuestos):
 */
// Object:
let carro = {
    marca: "Jetta",
    Color: "Rojo",
    anoLanzamiento: 2003
}

// Array (lista de elementos):
let edades = [10, 12, 14, 21, 38, 45]

// Function:
let suma = function suma(a,b) {
    return a + b
}
// Fecha:
let fecha = new Date()



/**
 * Mostrar:
 * 
 * Tipo de Variable.
 */
console.log(typeof carro);
console.log(typeof edades);
console.log(typeof suma);
console.log(typeof fecha);

/**
 * Mostrar:
 * 
 * Valores especificos.
 */
console.log(carro);
// Mostrar cada valor por separado
console.log(carro.marca);
console.log(carro.Color);
console.log(carro.anoLanzamiento);

console.log(edades);
// Mostrar el valor en una posicion especrifica de una lista:
console.log(edades[3]); //21

// Mostrar un resultado mandando los parametros que la funcion utilizara
console.log(suma(2,5)); //7
console.log(fecha);


/**
 * Extras:
 */
console.log(Array.isArray(edades)); // Para ver si es una Array (true)
console.log(fecha instanceof Date); // mismo caso para fecha (true)
