let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo)
}

function mostrarLibrosLeidos(){
    console.log(librosLeidos);
}

agregarLibro('El camino de los reyes');
agregarLibro('El imperio final');
agregarLibro('Juramentada');
agregarLibro('Palabras radiantes');
agregarLibro('El ojo del mundo')


mostrarLibrosLeidos()