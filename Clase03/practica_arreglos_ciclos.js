// acidas, semi acidas, neutras, dulces

const frutas = ['ciruela', 'limon', 'nuez', 'nispero', 'platano','frambuesa', 'melocoton', 'mango', 'naranja', 
    'membrillo', 'manzana', 'cereza','pomelo', 'kiwi', 'sandia', 'uva', 'arandano', 'avellana', 'chirimoya', 
    'pina', 'granada','fresa', 'mandarina', 'almendra', 'cacahuate', 'higo', 'coco', 'pera', 'melon']


let clasificacion = {
    acida:['kiwi', 'limon', 'pomelo', 'naranja', 'manzana', 'uva', 'arandano', 'pina'],
    semiAcida:['fresa', 'membrillo', 'nispero', 'ciruela', 'melocoton', 'mango', 'mandarina', 'frambuesa'],
    neutra:['coco', 'almendra', 'avellana', 'cacahuate', 'nuez'],
    dulce:['platano', 'cereza', 'higo', 'melon', 'sandia', 'pera', 'granada', 'chirimoya']
}


let contarTipoFor = {
    acida: 0,
    semiAcida: 0,
    neutra: 0,
    dulce: 0
}

for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    if(clasificacion.acida.includes(fruta)){
        contarTipoFor.acida++;
    } else if(clasificacion.semiAcida.includes(fruta)){
        contarTipoFor.semiAcida++;
    } else if(clasificacion.neutra.includes(fruta)){
        contarTipoFor.neutra++;
    } else{
        contarTipoFor.dulce++;
    }
}

console.log("Tipo de frutas con for: ", contarTipoFor);


let contarTipoWhile = {
    acida: 0,
    semiAcida: 0,
    neutra: 0,
    dulce: 0
}

let x = 0;
while(x < frutas.length){
    let fruta = frutas[x];
    if(clasificacion.acida.includes(fruta)){
        contarTipoWhile.acida++;
    } else if(clasificacion.semiAcida.includes(fruta)){
        contarTipoWhile.semiAcida++;
    } else if(clasificacion.neutra.includes(fruta)){
        contarTipoWhile.neutra++;
    } else{
        contarTipoWhile.dulce++;
    }
    x++;
}

console.log("Tipo de frutas con while: ", contarTipoWhile);
