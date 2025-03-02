
// Comentarios segun la pagina
function llaveComentarios(){
    let pagina = document.body.getAttribute('data-comments') || 'default';
    return 'comments_' + pagina;
}

// Asegurarse que el usuario haya entrado correctamente
document.addEventListener("DOMContentLoaded", function(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if(!user){
        window.location.href = "index.html";
        return;
    }

    mostrarComentarios();
})

function postComment(){
    const commentText = document.getElementById('comment').value;
    // const commentSection = document.getElementById('comment-section');
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString() // Convertir la fecha en un string

    // .trim es un metodo para eliminar espacios vacios
    if(commentText.trim() === ""){
        alert("El comentario no puede ir vacio")
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    }

    // Obteniendo comentarios y almacenandolos
    let llave = llaveComentarios();
    let comments = JSON.parse(localStorage.getItem(llave)) || [];
    comments.push(newComment);

    localStorage.setItem(llave, JSON.stringify(comments))

    document.getElementById('comment').value = ""

    mostrarComentarios();
}

function mostrarComentarios(){
    let llave = llaveComentarios();
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem(llave)) || [];
    commentSection.innerHTML = '';
    
    // Usar foreach porque no sabemos el tamano de la lista de usuarios y este ciclo recorrera todos
    comments.forEach((comment, index) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `<img src="${comment.image}" class="user-image"> <strong>${comment.name}</strong>  <br><p>${comment.timestamp}</p><br> ${comment.commentText}`;
    
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar Comentario";
        botonEliminar.addEventListener("click", function(){
            eliminarComentario(index);
        });
        comentarioSection.appendChild(botonEliminar);
        commentSection.appendChild(comentarioSection);
    });
}



function eliminarComentario(index) {
    let llave = llaveComentarios();
    let comments = JSON.parse(localStorage.getItem(llave)) || [];
    comments.splice(index, 1);
    localStorage.setItem(llave, JSON.stringify(comments));
    mostrarComentarios();
}

