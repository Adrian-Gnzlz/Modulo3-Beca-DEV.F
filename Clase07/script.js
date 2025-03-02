const checkboxes = document.querySelectorAll('.selector-caracteristicas input[type="checkbox"]');
const barras = document.querySelectorAll('.barra');
const nivelFuerza = document.getElementById('nivel-fuerza');

function actualizarBarras() {
    const contadorSeleccionadas = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    let fuerza = "";

    barras.forEach(barra => barra.style.backgroundColor = 'transparent');

    // Dependiendo la cantidad de ckeckboxes seleccionados pintara uno u otro color
    if (contadorSeleccionadas === 1) {
        for (let i = 0; i < 1; i++) {
            barras[i].style.backgroundColor = 'red';
        }
        fuerza = "DEBIL"
    } else if (contadorSeleccionadas === 2) {
        for (let i = 0; i < 2; i++) {
            barras[i].style.backgroundColor = 'orange';
        }
        fuerza = "DEBIL";
    } else if (contadorSeleccionadas === 3) {
        for (let i = 0; i < 3; i++) {
            barras[i].style.backgroundColor = 'yellow';
        }
        fuerza = "MEDIA";
    } else if (contadorSeleccionadas === 4) {
        for (let i = 0; i < 4; i++) {
            barras[i].style.backgroundColor = 'green';
        }
        fuerza = "FUERTE";
    } else{
        fuerza = ""
    }

    nivelFuerza.textContent = fuerza;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarBarras);
});

const slider = document.getElementById('slider');
const cantidadCaracteres = document.getElementById('cantidad-caracteres');

slider.addEventListener('input', function(){
    cantidadCaracteres.textContent = slider.value;
})

const checkboxUpper = document.getElementById('checkbox1');
const checkboxLower = document.getElementById('checkbox2');
const checkboxNumber = document.getElementById('checkbox3');
const checkboxSymbol = document.getElementById('checkbox4');

const mostrarContrasena = document.querySelector('.subcontenedor-top span');

function generarContrasena(){
    const largo = parseInt(slider.value);
    let caracteresDisponibles = "";

    if (checkboxUpper.checked) {
        caracteresDisponibles += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checkboxLower.checked) {
        caracteresDisponibles += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkboxNumber.checked) {
        caracteresDisponibles += "0123456789";
    }
    if (checkboxSymbol.checked) {
        caracteresDisponibles += "!@#$%^&*()_+[]{}|;:,.<>?/~`";
    }
    if (caracteresDisponibles === "") {
        caracteresDisponibles = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/~`";
    }

    let password = "";
    for (let i = 0; i < largo; i++) {
        let indexRandom = Math.floor(Math.random() * caracteresDisponibles.length);
        password += caracteresDisponibles[indexRandom];
    }

    mostrarContrasena.removeAttribute('id');
    mostrarContrasena.textContent = password;
}


const botonCopiar = document.querySelector('.subcontenedor-top i');

botonCopiar.addEventListener('click', () => {
    const contrasena = mostrarContrasena.textContent;

    navigator.clipboard.writeText(contrasena)
    .then(() => {
        const mensajeCopiado = document.getElementById('mensajeCopiado');
        mensajeCopiado.style.display = 'block';
        mensajeCopiado.style.opacity = 1;

        setTimeout(() => {
            mensajeCopiado.style.display = 0;
            setTimeout(() => {
                mensajeCopiado.style.display = 'none';
            }, 500);
        }, 1000);
    })
    .catch(err => {
        console.error('Error al copiar la contraseña: ', err);
    });
})
