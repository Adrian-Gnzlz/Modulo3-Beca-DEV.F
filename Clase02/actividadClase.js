// Comprobacion numeros pares e impares
let numero = Math.floor(Math.random() * 101);
console.log(numero);

if (numero%2 == 0){
    console.log('El numero',numero,'es par');
} else{
    console.log('El numero',numero,'es impar');
}



// Comparar si un numero es primo o no es primo
let numero2 = Math.floor(Math.random() * 101);
console.log(numero2);

function Primo(n, divisor = 2) {
    if(n < 2){
        return false
    } else if(divisor > Math.sqrt(n)){
        return true
    } else{
        return (n % divisor !== 0) && Primo(n, divisor + 1);
    }
}

console.log(numero2, Primo(numero2) ? ': Es primo' : ': No es primo');




// Averiguar la estacion del ano en la que estamos (3-5, 6-8, 9-11, 12-1)
let mes = Math.floor(Math.random() * 12) + 1;
console.log(mes);

if(mes>=3 && mes<=5){
    console.log('Es primavera');
} else if(mes>=6 && mes<=8){
    console.log('Es verano');
} else if(mes>=9 && mes<=11){
    console.log('Es otono');
} else{
    console.log('Es invierno');
}