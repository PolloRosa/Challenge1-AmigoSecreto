let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("txtAmigo").value;
    if(validarNombreAmigo(nombreAmigo)) {
        amigos.push(nombreAmigo);
        document.getElementById("txtAmigo").value = "";
    } else alert("Por favor, inserte un nombre.");
}

function validarNombreAmigo(amigo) {
    if(amigo === "") return false;
    else return true;
}