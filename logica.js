function calificarPretest() {
    // Obtener todas las respuestas seleccionadas
    const respuestas = {
        pregunta1: document.querySelector('input[name="pregunta1"]:checked'),
        pregunta2: document.querySelector('input[name="pregunta2"]:checked'),
        pregunta3: document.querySelector('input[name="pregunta3"]:checked'),
        pregunta4: document.querySelector('input[name="pregunta4"]:checked'),
        pregunta5: document.querySelector('input[name="pregunta5"]:checked'),
        pregunta6: document.querySelector('input[name="pregunta6"]:checked'),
        pregunta7: document.querySelector('input[name="pregunta7"]:checked'),
        pregunta8: document.querySelector('input[name="pregunta8"]:checked'),
        pregunta9: document.querySelector('input[name="pregunta9"]:checked')
    };

    // Calificar las respuestas
    let puntaje = 0;

    // Comparar las respuestas con las respuestas correctas
    if (respuestas.pregunta1 && respuestas.pregunta1.value === "acido") {
        puntaje++;
    }
    if (respuestas.pregunta2 && respuestas.pregunta2.value === "base") {
        puntaje++;
    }
    if (respuestas.pregunta3 && respuestas.pregunta3.value === "acido") {
        puntaje++;
    }
    if (respuestas.pregunta4 && respuestas.pregunta4.value === "base") {
        puntaje++;
    }
    if (respuestas.pregunta5 && respuestas.pregunta5.value === "acido") {
        puntaje++;
    }
    if (respuestas.pregunta6 && respuestas.pregunta6.value === "acido") {
        puntaje++;
    }
    if (respuestas.pregunta7 && respuestas.pregunta7.value === "base") {
        puntaje++;
    }
    if (respuestas.pregunta8 && respuestas.pregunta8.value === "acido") {
        puntaje++;
    }
    if (respuestas.pregunta9 && respuestas.pregunta9.value === "acido") {
        puntaje++;
    }

    // Mostrar el puntaje al usuario
    alert("Has obtenido " + puntaje + " puntos de 9 posibles en el pretest.");

    // Puedes redirigir al usuario a la siguiente sección del laboratorio aquí
    // Por ejemplo:
     window.location.href = "#interaccion";
}