let construccion = document.getElementsByClassName("construccion")[0];
let investigacion = document.getElementsByClassName("investigacion")[0];
let caceria = document.getElementsByClassName("caceria")[0];
let ataqueMix = document.getElementsByClassName("ataque-mix")[0];
let ataque60 = document.getElementsByClassName("ataque-lvl60")[0];

let botonConstruccion = document.getElementsByClassName("boton-construccion")[0];
let botonInvestigacion = document.getElementsByClassName("boton-investigacion")[0];
let botonCaceria = document.getElementsByClassName("boton-caceria")[0];
let botonAtaqueMix = document.getElementsByClassName("boton-ataquemix")[0];
let botonAtaque60 = document.getElementsByClassName("boton-ataque60")[0];

botonConstruccion.addEventListener("click", mostrarConstruccion);
botonInvestigacion.addEventListener("click", mostrarInvestigacion);
botonCaceria.addEventListener("click", mostrarCaceria);
botonAtaqueMix.addEventListener("click", mostrarAtaqueMix);
botonAtaque60.addEventListener("click", mostrarAtaque60);

function mostrarConstruccion() {
    console.log(construccion.style.display);
    if (construccion.style.display == "none" || construccion.style.display == "") {
        construccion.style.display = "grid";
        investigacion.style.display = "none";
        caceria.style.display = "none";
        ataqueMix.style.display = "none";
        ataque60.style.display = "none";
    }
}

function mostrarInvestigacion() {
    if (investigacion.style.display == "none" || investigacion.style.display == "") {
        construccion.style.display = "none";
        investigacion.style.display = "grid";
        caceria.style.display = "none";
        ataqueMix.style.display = "none";
        ataque60.style.display = "none";
    }
}

function mostrarCaceria() {
    if (caceria.style.display == "none" || caceria.style.display == "") {
        construccion.style.display = "none";
        investigacion.style.display = "none";
        caceria.style.display = "grid";
        ataqueMix.style.display = "none";
        ataque60.style.display = "none";
    }
}

function mostrarAtaqueMix() {
    if (ataqueMix.style.display == "none" || ataqueMix.style.display == "") {
        construccion.style.display = "none";
        investigacion.style.display = "none";
        caceria.style.display = "none";
        ataqueMix.style.display = "grid";
        ataque60.style.display = "none";
    }
}
function mostrarAtaque60() {
    if (ataque60.style.display == "none" || ataque60.style.display == "") {
        construccion.style.display = "none";
        investigacion.style.display = "none";
        caceria.style.display = "none";
        ataqueMix.style.display = "none";
        ataque60.style.display = "grid";
    }
}