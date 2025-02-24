function agregarComentario() {
    let comentarioTexto = document.getElementById("comentario").value;
    
    if (comentarioTexto === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    let comentario = document.createElement("div");
    comentario.classList.add("comentario");

    let fecha = new Date();
    let fechaHora = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;

    let contenido = `<p><strong>Comentario:</strong> ${comentarioTexto}</p>
                    <p><em>Publicado el: ${fechaHora}</em></p>
                    <button class="boton-eliminar" onclick="eliminarComentario(this)">Eliminar</button>`;

    comentario.innerHTML = contenido;

    document.getElementById("comentarios").appendChild(comentario);
    document.getElementById("comentario").value = "";
}

function eliminarComentario(button) {
    let comentario = button.parentElement;
    comentario.remove();
}
