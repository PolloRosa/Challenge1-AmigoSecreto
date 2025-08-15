let amigos = [];

// Funciones de botones INICIO
function agregarAmigo() {
    let nombreAmigo = document.getElementById("txtAmigo").value;
    if(validarNombreAmigo(nombreAmigo)) {
        amigos.push(nombreAmigo);
        document.getElementById("txtAmigo").value = "";
        agregarEnLista();
        document.getElementById("txtAmigo").focus();
    } else alert("Por favor, inserte un nombre.");
}

function sortearAmigo() {
    if(validarLista()) {
        let elegido = generarNumeroRandom();
        let amigoElegido = amigos[elegido];
        mostrarSorteado(amigoElegido);
        reiniciarSorteo();
    } else alert("Por favor, agregue amigos.");
}
// Funciones de botones FIN

// Funciones de validación INICIO
function validarNombreAmigo(amigo) {
    if(amigo === "") return false;
    else return true;
}

function validarLista() {
    if(amigos.length === 0) return false;
    else return true;
}
// Funciones de validación FIN

// Funciones secundarias INICIO
// Función que genera un índice random del arreglo amigos
function generarNumeroRandom() {
    return Math.floor(Math.random() * amigos.length);
}

function agregarEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]}</li>`;
    }
}

function mostrarSorteado(amigo) {
    let lista = document.getElementById("resultado");
    document.getElementById("listaAmigos").innerHTML = "";
    lista.innerHTML = `<li>El amigo secreto es ${amigo}.</li>`;
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
// Funciones secundarias FIN