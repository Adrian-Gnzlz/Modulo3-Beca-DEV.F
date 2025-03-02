// Users
const users = [
    {name: "Adrian Gonzalez", username: "AdrianGoz", password: "12345", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Ian Ricardo", username: "Ian", password: "12345", image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Natalia", username: "Nat", password: "12345", image: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    
]

function login(){
    // Esto 
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    // find: metodo que ayuda a buscar la informacion necesaria
    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if(userFind){
        localStorage.setItem("loggedUser", JSON.stringify(userFind)) // Metodo que guardara un valor (como crear una variable en la que guardamos un valor)
        window.location.href = "home.html";
    } else{
        error.textContent = "Usuario o Contraseña incorrectos"
    }
}
