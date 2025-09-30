let amigos = [];

// Funciones de botones INICIO
/**
 * Agrega nombre de amigo a la lista para el sorteo.
 */
function agregarAmigo() {
    let nombreAmigo = document.getElementById("txtAmigo").value;
    if(validarNombreAmigo(nombreAmigo)) {
        nombreAmigo = darFormatoAmigo(nombreAmigo);
        limpiarResultado();
        if(validarNombreUnico(nombreAmigo)) {
            amigos.push(nombreAmigo);
            document.getElementById("txtAmigo").value = "";
            mostrarEnLista();
        } else alert("El nombre ya se encuentra registrado.");
    } else alert("Por favor, inserte un nombre.");
    document.getElementById("txtAmigo").focus();
}

/**
 * Realiza el sorteo con la lista de amigos actualizada.
 */
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
/**
 * Da formato al nombre del amigo, quitándole los espacios en blanco iniciales y finales de la cadena, e iniciando la cadena con mayúscula.
 * @param {string} amigo - Nombre del amigo
 * @returns {string} Nombre del amigo con formato
 */
function darFormatoAmigo(amigo) {
    amigo = amigo.trim();
    return amigo[0].toUpperCase() + amigo.substring(1);
}

/**
 * Valida que el nombre del amigo no sea una cadena vacía o con espacios en blanco.
 * @param {string} amigo - Nombre del amigo
 * @returns {boolean} Devuelve true si el nombre de amigo es válido
 */
function validarNombreAmigo(amigo) {
    if(amigo.trim() === "") return false;
    else return true;
}

/**
 * Valida que tamaño del arreglo sea mayor a cero.
 * @returns {boolean} Devuelve true si el tamaño del arreglo es diferente a cero.
 */
function validarLista() {
    if(amigos.length === 0) return false;
    else return true;
}

/**
 * Valida que el nombre del amigo no se encuentre registrado.
 * @param {string} amigo - Nombre del amigo 
 * @returns {boolean} Devuelve true si el nombre del amigo no ha sido registrado antes
 */
function validarNombreUnico(amigo) {
    return !amigos.includes(amigo);
}
// Funciones de validación FIN

// Funciones secundarias INICIO
/**
 * Genera un número al azar de entre las posiciones del arreglo de amigos.
 * @returns {int} Posición del arreglo de amigos resultante del sorteo
 */
function generarNumeroRandom() {
    return Math.floor(Math.random() * amigos.length);
}

/**
 * Muestra todos a los amigos del arreglo en la lista de amigos.
 */
function mostrarEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(elem => lista.innerHTML += `<li>${elem}</li>`);
}

/**
 * Muestra el amigo elegido por sorteo en la lista del resultado.
 * @param {string} amigo - Nombre del amigo elegido por el sorteo
 */
function mostrarSorteado(amigo) {
    let lista = document.getElementById("resultado");
    document.getElementById("listaAmigos").innerHTML = "";
    lista.innerHTML = `<li>El amigo secreto es ${amigo}.</li>`;
}

/**
 * Reinicia el sorteo limpiando el arreglo y la lista de amigos.
 */
function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

/**
 * Limpia la lista del resultado del sorteo.
 */
function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}
// Funciones secundarias FIN