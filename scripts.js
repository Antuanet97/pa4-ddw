/* ==========================================
   SCRIPTS.JS - MICHISTORE
   Banner animado con jQuery
   ========================================== */

$(document).ready(function () {

    // Variables para el slider
    let slideActual = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    // Función para cambiar de slide
    function cambiarSlide() {
        // Remover clase active del slide actual
        slides.eq(slideActual).removeClass('active');

        // Incrementar el índice
        slideActual = (slideActual + 1) % totalSlides;

        // Agregar clase active al nuevo slide
        slides.eq(slideActual).addClass('active');
    }

    // Cambiar slide cada 3 segundos (3000 milisegundos)
    setInterval(cambiarSlide, 3000);

    // Manejo del formulario (opcional - para mejorar la experiencia)
    $('.formulario').on('submit', function (e) {
        e.preventDefault();

        const nombre = $('#nombre').val();
        const email = $('#email').val();

        // Mostrar mensaje de confirmación
        alert('¡Gracias ' + nombre + '! Te has suscrito correctamente. Enviaremos nuestras ofertas a: ' + email);

        // Limpiar formulario
        this.reset();
    });

});
