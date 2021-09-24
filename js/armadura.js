let construccion = document.getElementsByClassName("construccion")[0];
let investigacion = document.getElementsByClassName("investigacion")[0];

let botonConstruccion = document.getElementsByClassName("boton-construccion")[0];
let botonInvestigacion = document.getElementsByClassName("boton-investigacion")[0];

botonConstruccion.addEventListener("click", mostrarConstruccion);
botonInvestigacion.addEventListener("click", mostrarInvestigacion);

function mostrarConstruccion() {
    console.log(construccion.style.display);
    if (construccion.style.display == "none" || construccion.style.display == "") {
        construccion.style.display = "";
        investigacion.style.display = "none";
    }
}

function mostrarInvestigacion() {
    if (investigacion.style.display == "none" || investigacion.style.display == "") {
        construccion.style.display = "none";
        investigacion.style.display = "grid";
    }
}