let amigos = [];

// Funciones de botones INICIO
function agregarAmigo() {
    let nombreAmigo = document.getElementById("txtAmigo").value;
    if(validarNombreAmigo(nombreAmigo)) {
        limpiarResultado();
        amigos.push(nombreAmigo);
        document.getElementById("txtAmigo").value = "";
        mostrarEnLista();
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
function generarNumeroRandom() {
    return Math.floor(Math.random() * amigos.length);
}

function mostrarEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(elem => lista.innerHTML += `<li>${elem}</li>`);
}

function mostrarSorteado(amigo) {
    let lista = document.getElementById("resultado");
    document.getElementById("listaAmigos").innerHTML = "";
    lista.innerHTML = `<li>El amigo secreto es ${amigo}.</li>`;
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}
// Funciones secundarias FIN