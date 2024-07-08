$(document).ready(function() {
    $('.header__mainNavigation li a').click(function(e) {
        e.preventDefault(); // Evitar comportamiento predeterminado del enlace

        // Obtener el texto del enlace clicado
        var section = $(this).text().trim().toLowerCase();

        // Cambiar el título de la página
        $('title').text('HyperGear - ' + section.charAt(0).toUpperCase() + section.slice(1));

        // Simular cambio de contenido basado en la sección seleccionada
        if (section === 'mouses') {
            // Aquí puedes simular cargar productos de Mouses
            $('.content__sliderTitle').text(' Mouse gaming');
            $('.content__sliderContentImg img').attr('src', './images/mouse gaming.jpg');
            $('.content__sliderContentPrice').text('$ 60.00');
        } else if (section === 'keyboards') {
            // Aquí puedes simular cargar productos de Keyboards
            $('.content__sliderTitle').text('Keyboards 60%');
            $('.content__sliderContentImg img').attr('src', './images/teclado-60-.jpg');
            $('.content__sliderContentPrice').text('$ 100.00');
        } else if (section === 'headsets') {
            // Aquí puedes simular cargar productos de Headsets
            $('.content__sliderTitle').text('Headsets gaming');
            $('.content__sliderContentImg img').attr('src', './images/headset gaming.jpg');
            $('.content__sliderContentPrice').text('$ 89.00');
        } else {
            // Manejar otras secciones si es necesario
        }

        // Aquí podrías realizar una solicitud AJAX para obtener datos dinámicamente
    });
});
