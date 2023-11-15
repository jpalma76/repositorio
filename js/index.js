function visitar() {
    var projects = document.getElementById("projects");
    if (projects.value == 0) {
        $('#message').html("Debe seleccionar una página");
    } else if(projects.value == 1) {
        window.open("https://otro-portafolio.netlify.app/", "_blank");
    } else if(projects.value == 2) {
        window.open("https://juego-mokepon-platzi.netlify.app/", "_blank");
    } else if(projects.value == 3) {

        window.open("https://ejercicio-de-validacion-rut-chileno.netlify.app/", "_blank");
    } else if(projects.value == 4) {
        window.open("https://renderizado-de-peliculas.netlify.app/", "_blank");
    } else if(projects.value == 5) {
        window.open("https://github.com/jpalma76", "_blank");
    } 
}