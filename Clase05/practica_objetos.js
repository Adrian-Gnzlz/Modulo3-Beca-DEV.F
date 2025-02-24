class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [];
    }

    describirLibro() {
        console.log(`"${this.titulo}" de ${this.autor} (${this.anio}). Estado: ${this.estado}.`);
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
    }

    eliminarCapitulo(capitulo) {
        this.capitulos = this.capitulos.filter(c => c !== capitulo);
    }

    mostrarCapitulos(){
        if(this.capitulos.length === 0){
            console.log("No hay capitulos para este libro.");
        } else{
            console.log(`Capítulos de "${this.titulo}": ${this.capitulos.join(", ")}`);
        }
    }
}

const libros = [];

const libro1 = new Libro("El Camino de los Reyes", "Brandon Sanderson", 2010, "disponible");
const libro2 = new Libro("El Imperio Final", "Brandon Sanderson", 2006, "prestado");
const libro3 = new Libro("El Ojo del Mundo", "Robert Jordan", 1990, "disponible");

libros.push(libro1, libro2, libro3)

function mostrarLibros(){
    libros.forEach(libro => libro.describirLibro());
}

mostrarLibros();



libro1.agregarCapitulo("Bendito por la tormenta");
libro1.agregarCapitulo("El honor ha muerto");
libro1.agregarCapitulo("Capitulo que no existe")
libro1.mostrarCapitulos();
libro1.eliminarCapitulo("Capitulo que no existe");
libro1.mostrarCapitulos();