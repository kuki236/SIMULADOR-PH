function calificarPretest() {
    const respuestas = {
        pregunta1: obtenerRespuesta('pregunta1', 'acido'),
        pregunta2: obtenerRespuesta('pregunta2', 'base'),
        pregunta3: obtenerRespuesta('pregunta3', 'acido'),
        pregunta4: obtenerRespuesta('pregunta4', 'base'),
        pregunta5: obtenerRespuesta('pregunta5', 'acido'),
        pregunta6: obtenerRespuesta('pregunta6', 'acido'),
        pregunta7: obtenerRespuesta('pregunta7', 'base'),
        pregunta8: obtenerRespuesta('pregunta8', 'acido'),
    };

    let puntaje = 0;
    for (const pregunta in respuestas) {
        if (respuestas[pregunta]) {
            puntaje++;
        }
    }

    alert("Has obtenido " + puntaje + " puntos de 8 posibles en el pretest.");
}

function obtenerRespuesta(nombrePregunta, respuestaCorrecta) {
    const respuesta = document.querySelector(`input[name="${nombrePregunta}"]:checked`);
    return respuesta && respuesta.value === respuestaCorrecta;
}

function mostrarOpciones(sustancia) {
    const popup = document.getElementById('opciones-popup');

    // Limpia el contenido anterior antes de agregar nuevos elementos
    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

    const contenidoContainer = document.createElement('div');
    contenidoContainer.className = 'contenido-container';

    const botonRojo = document.createElement('button');
    botonRojo.textContent = 'Tornasol Rojo';
    botonRojo.className = 'tornasol'; // Agrega la clase 'tornasol' al botón Rojo
    botonRojo.onclick = function () {
        mostrarImagenes(sustancia, 'rojo');
    };
    popup.appendChild(botonRojo); // Añade el botón al contenedor principal

    const botonAzul = document.createElement('button');
    botonAzul.textContent = 'Tornasol Azul';
    botonAzul.className = 'tornasol_azul'; // Agrega la clase 'tornasol' al botón Azul
    botonAzul.onclick = function () {
        mostrarImagenes(sustancia, 'azul');
    };
    popup.appendChild(botonAzul); // Añade el botón al contenedor principal


    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.onclick = function () {
        popup.style.display = 'none';
    };
    popup.appendChild(botonCerrar);

    popup.style.display = 'block';
}

function mostrarImagenes(sustancia, tipoTornasol) {
    const popup = document.getElementById('opciones-popup');

    // Limpia el contenido anterior antes de agregar nuevas imágenes
    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

    const imagenesContainer = document.createElement('div');
    imagenesContainer.className = 'imagenes-container';

    const imagenes = obtenerImagenes(sustancia, tipoTornasol);
    let imagenIndex = 0;

    const imgElement = document.createElement('img');
    imgElement.src = imagenes[imagenIndex];
    imagenesContainer.appendChild(imgElement);

    // Botón Previous
    const botonPrevious = document.createElement('button');
    botonPrevious.textContent = 'Previous';
    botonPrevious.onclick = function () {
        imagenIndex = (imagenIndex - 1 + imagenes.length) % imagenes.length;
        imgElement.src = imagenes[imagenIndex];
    };
    imagenesContainer.appendChild(botonPrevious);

    // Botón Next
    const botonNext = document.createElement('button');
    botonNext.textContent = 'Next';
    botonNext.onclick = function () {
        imagenIndex = (imagenIndex + 1) % imagenes.length;
        imgElement.src = imagenes[imagenIndex];
    };
    imagenesContainer.appendChild(botonNext);

    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.onclick = function () {
        popup.style.display = 'none';
    };
    imagenesContainer.appendChild(botonCerrar);

    popup.appendChild(imagenesContainer);
    popup.style.display = 'block';
}




function obtenerImagenes(sustancia, tipoTornasol) {
    // Lógica para obtener imágenes según el tipo de Tornasol y sustancia
    // Reemplaza esto con tu propia lógica o estructura de imágenes

    // Por ejemplo, podrías tener un objeto que almacene las imágenes para cada sustancia y tipo de Tornasol
    const imagenesPorSustancia = {
        limon: {
            rojo: ['images/limon_rojo_1.jpg', 'images/limon_rojo_2.jpg'],
            azul: ['images/limon_azul_1.jpg', 'images/limon_azul_2.jpg', 'images/limon_azul_3.jpg'],
        },
        bicarbonato: {
            rojo: ['images/bicabornato_rojo_1.jpg', 'images/bic_rojo_2.jpg', 'images/bic_rojo_3.jpg'],
            azul: ['images/bic_azul_1.jpg', 'images/bic_azul_2.jpg'],
        },
        vinagre: {
            rojo: ['images/vin_rojo_1.jpg', 'images/vin_rojo_2.jpg'],
            azul: ['images/vin_azul-1.jpg', 'images/vin_azul_2.jpg', 'images/vin_azu_3.jpg'],
        },
        jabon: {
            rojo: ['images/jabon_rojo_1.jpg', 'images/jabon_rojo_2.jpg','images/jabon_rojo_3.jpg'],
            azul: ['images/jabon_azu_1.jpg', 'images/jabon_azu_2.jpg'],
        },
        naranja: {
            rojo: ['images/naranja_rojo_1.jpg', 'images/naranja_rojo_2.jpg'],
            azul: ['images/naranja_azul_1.jpg', 'images/naranja_azul_2.jpg','images/naranja_azul_3.jpg'],
        },
        cola: {
            rojo: ['images/cola_rojo_1.jpg', 'images/cola_roja_2.jpg'],
            azul: ['images/cola_azul_1.jpg', 'images/cola_azul_2.jpg', 'images/cola_azul_3.jpg'],
        },
        detergente: {
            rojo: ['images/detergente_rojo_1.jpeg', 'images/detergente_rojo_2.jpg','images/detergente_rojo_3.jpeg'],
            azul: ['images/detergente_azul_1.jpeg', 'images/detergente_azul_2.jpg'],
        },
        lluvia: {
            rojo: ['images/lluvia_rojo_1.jpg', 'images/lluvia_rojo_2.jpg'],
            azul: ['images/lluvia_azul_1.jpg', 'images/lluvia_azul_2.jpg','images/lluvia_azul_3.jpg'],
        },
        // Agrega más sustancias según sea necesario
    };

    return imagenesPorSustancia[sustancia][tipoTornasol] || [];
}

// Función para cambiar el volumen al hacer clic
function toggleVolume() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.volume === 0.5) {
        // Si el volumen está al 50%, cambiar a 0%
        audioPlayer.volume = 0;
    } else {
        // Si el volumen no está al 50%, cambiar a 50%
        audioPlayer.volume = 0.5;
    }
}
function calificarCuestionarioFinal() {
    const respuestas = {
        pregunta1: obtenerRespuesta('pregunta1', 'acido'),
        pregunta2: obtenerRespuesta('pregunta2', 'base'),
        pregunta3: obtenerRespuesta('pregunta3', 'acido'),
        pregunta4: obtenerRespuesta('pregunta4', 'base'),
        pregunta5: obtenerRespuesta('pregunta5', 'acido'),
        pregunta6: obtenerRespuesta('pregunta6', 'acido'),
        pregunta7: obtenerRespuesta('pregunta7', 'base'),
        pregunta8: obtenerRespuesta('pregunta8', 'acido'),
    };

    let puntaje = 0;
    for (const pregunta in respuestas) {
        if (respuestas[pregunta]) {
            puntaje++;
        }
    }

    alert("Has obtenido " + puntaje + " puntos de 8 posibles en el cuestionario final.");
}
