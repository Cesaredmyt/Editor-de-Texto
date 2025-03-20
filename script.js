function formatearTexto(comando, valor = null) {
    document.execCommand(comando, false, valor);
}

function aplicarColor(color) {
    formatearTexto('foreColor', color);
}

function cambiarTamanioFuente(size) {
    formatearTexto('fontSize', size);
}

function resaltarTexto() {
    let textoBusqueda = document.getElementById("buscarTexto").value;
    let editor = document.getElementById("editor");
    let contenido = editor.innerHTML;

    let regex = new RegExp(textoBusqueda, "gi");
    let nuevoContenido = contenido.replace(/<mark>|<\/mark>/gi, "");

    if (textoBusqueda !== "") {
        nuevoContenido = nuevoContenido.replace(regex, match => `<mark>${match}</mark>`);
    }

    editor.innerHTML = nuevoContenido;
}

function abrirModalReemplazo() {
    document.getElementById("modalReemplazo").style.display = "flex";
}

function cerrarModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}

function reemplazarTexto() {
    let buscar = document.getElementById("textoBuscarReemplazo").value;
    let nuevoTexto = document.getElementById("textoNuevo").value;

    if (!buscar || nuevoTexto === null) return;

    let editor = document.getElementById("editor");
    let contenido = editor.innerHTML;
    let regex = new RegExp(buscar, "gi");

    let nuevoContenido = contenido.replace(regex, nuevoTexto);
    editor.innerHTML = nuevoContenido;

    cerrarModal("modalReemplazo");
}

function cambiarMayusculas(tipo) {
    let editor = document.getElementById("editor");
    let texto = window.getSelection().toString();

    if (tipo === "upper") {
        document.execCommand("insertText", false, texto.toUpperCase());
    } else if (tipo === "lower") {
        document.execCommand("insertText", false, texto.toLowerCase());
    } else if (tipo === "capitalize") {
        document.execCommand("insertText", false, texto.replace(/\b\w/g, char => char.toUpperCase()));
    }
}

function alinearTexto(align) {
    formatearTexto(align);
}

function actualizarContadores() {
    let editor = document.getElementById("editor").innerText;
    document.getElementById("contadorCaracteres").innerText = "Caracteres: " + editor.length;
    document.getElementById("contadorPalabras").innerText = "Palabras: " + editor.trim().split(/\s+/).length;
}
