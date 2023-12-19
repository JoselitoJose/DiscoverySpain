
    // Mostrar el logotipo durante 3 segundos y luego ocultarlo
    var logoContainer = document.querySelector(".logo-container");

    setTimeout(function () {
        logoContainer.style.display = "none";
    }, 3000);

    // Mostrar la página principal después de 3 segundos
    setTimeout(function () {
        var container = document.querySelector(".container");
        container.style.display = "block";
    }, 3000);

    // Obtén el botón "Mis destinos"
    var misDestinosButton = document.getElementById("mis-destinos-link");
    var destinosSection = document.querySelector(".destinos");
    var backButton = document.querySelector(".back-button");

    // Oculta el botón "Atrás" inicialmente
    backButton.style.display = "none";

    // Escucha el evento clic en el botón "Mis destinos"
    misDestinosButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la recarga de la página

        // Oculta el mapa y el buscador
        var mapImage = document.querySelector(".image");
        var searchForm = document.querySelector(".search");
        mapImage.style.display = "none";
        searchForm.style.display = "none";

        // Muestra la sección de destinos
        destinosSection.style.display = "flex";

        // Muestra el botón "Atrás"
        backButton.style.display = "block";
    });

    function goBack() {
        var mapImage = document.querySelector(".image");
        var searchForm = document.querySelector(".search");
        var backButton = document.querySelector(".back-button");
        var destinosSection = document.querySelector(".destinos");

        // Muestra el mapa y el buscador
        mapImage.style.display = "block";
        searchForm.style.display = "block";
        backButton.style.display = "none";

        // Oculta la sección de destinos
        destinosSection.style.display = "none";
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------

    var modoNocturno = false; // Inicialmente, el modo nocturno está desactivado


    function cambiarModo() {
        var body = document.body;
        var content = document.getElementById("container");

        var map = document.getElementById("map");
        var modoNocturnoButton = document.getElementById("modoNocturno");
        // var night = document.getElementById("night");

        if (modoNocturno) {
            // Cambiar al modo día
            body.classList.remove("modo-nocturno");
            content.style.backgroundColor = "white";
            content.style.color = "black";

            map.style.backgroundColor = "white";
            map.style.color = "black";

            modoNocturnoButton.textContent = "Modo Nocturno";
        } else {
            // Cambiar al modo nocturno
            body.classList.add("modo-nocturno");
            content.style.backgroundColor = "black";
            content.style.color = "white";

            map.style.backgroundColor = "black";
            map.style.color = "white";
            modoNocturnoButton.textContent = "Modo Día";
        }

        modoNocturno = !modoNocturno; // Cambia el estado del modo
    }


    //---------------------------------------------------------------------------------------------------------------------------------------------


    function mostrarPopup() {
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
        overlay.style.display = "block";
        popup.style.display = "block";
    }

    // Función para seleccionar una opción
    function seleccionarOpcion(opcion) {
        alert("Has seleccionado: " + opcion);
        cerrarPopup();
    }

    // Función para cerrar la ventana emergente
    function cerrarPopup() {
        var overlay = document.getElementById("overlay");
        var popup = document.getElementById("popup");
    //  var op = document.getElementById("opciones");
    //  op.style.display = "none";
        overlay.style.display = "none";
        popup.style.display = "none";
    }


    // Variables para almacenar las selecciones
    var idiomaSeleccionado = 'es';
    var daltonismoSeleccionado = 'normal';

    // Funciones para seleccionar idioma y daltonismo
    function seleccionarIdioma(idioma) {
        idiomaSeleccionado = idioma;
        document.getElementById('idiomaBtn').innerText = 'Idioma: ' + idioma.toUpperCase();
    }

    function seleccionarDaltonismo(tipo) {
        daltonismoSeleccionado = tipo;
        document.getElementById('daltonismoBtn').innerText = 'Daltonismo: ' + tipo.charAt(0).toUpperCase() + tipo.slice(1);
    }

