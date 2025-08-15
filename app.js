let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("txtAmigo").value;
    if(validarNombreAmigo(nombreAmigo)) {
        amigos.push(nombreAmigo);
        document.getElementById("txtAmigo").value = "";
        agregarEnLista();
    } else alert("Por favor, inserte un nombre.");
}

function validarNombreAmigo(amigo) {
    if(amigo === "") return false;
    else return true;
}

function agregarEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]}</li>`;
    }
}