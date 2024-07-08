$(function () {
    var slider = '.content__slider';
    var sliderOuter = '.content__sliderWrapper';
    var sliderItemOuter = '.content__sliderItemOuter';
    var sliderNext = '.content__sliderNext';
    var sliderPrev = '.content__sliderPrev';
    var addToCartBtn = '.content__sliderAddToCart';
    var cartItemCount = $('.header__cartFlag');
    var cartList = $('.cart__list');
    var cartTotal = $('#cartTotal');
    var checkoutTotal = $('#checkoutTotal'); // Elemento para mostrar el total en el checkout
    var cartDropdown = $('.cart__dropdown'); // Selector del desplegable del carrito

    var cart = []; // Array para almacenar los productos en el carrito

    // Ajustar dimensiones al cargar y redimensionar la ventana
    function adjustSliderDimensions() {
        var windowWidth = $(window).width();
        $(sliderItemOuter).width(windowWidth);
        $(sliderOuter).width(windowWidth).height($(sliderItemOuter).height());
        $(slider).width(windowWidth * $(sliderItemOuter).length);
    }

    adjustSliderDimensions(); // Llama a la función al cargar la página

    // Centrar imágenes horizontalmente en el slider
    function centerImages() {
        var windowWidth = $(window).width();
        $(sliderItemOuter).each(function () {
            var itemWidth = $(this).find('.content__sliderItem').outerWidth();
            var offset = (windowWidth - itemWidth) / 2;
            $(this).css('left', offset);
        });
    }

    centerImages(); // Llama a la función al cargar la página

    // Ajustar dimensiones y centrar imágenes al redimensionar la ventana
    $(window).on('resize', function () {
        adjustSliderDimensions();
        centerImages();
    });

    // Botón siguiente
    $(sliderNext).on('click', function (e) {
        var activeItem = $(sliderItemOuter + '.active');
        var nextItem = activeItem.next(sliderItemOuter);

        if (nextItem.length > 0) {
            var translateX = -nextItem.position().left;
            $(slider).css({
                'transform': 'translateX(' + translateX + 'px)',
                '-webkit-transform': 'translateX(' + translateX + 'px)'
            });

            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });

    // Botón anterior
    $(sliderPrev).on('click', function (e) {
        var activeItem = $(sliderItemOuter + '.active');
        var prevItem = activeItem.prev(sliderItemOuter);

        if (prevItem.length > 0) {
            var translateX = -prevItem.position().left;
            $(slider).css({
                'transform': 'translateX(' + translateX + 'px)',
                '-webkit-transform': 'translateX(' + translateX + 'px)'
            });

            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Agregar al carrito
    $(addToCartBtn).on('click', function () {
        var productName = $(this).closest('.content__sliderItem').find('.content__sliderTitle').text().trim();
        var productPrice = parseFloat($(this).closest('.content__sliderItem').find('.content__sliderContentPrice').text().replace('$', '').trim());

        // Agregar producto al array del carrito
        cart.push({ name: productName, price: productPrice });

        // Actualizar contador del carrito
        cartItemCount.text(cart.length);

        // Actualizar UI del carrito
        renderCart();
    });

    // Función para renderizar el carrito
    function renderCart() {
        // Limpiar lista actual del carrito
        cartList.empty();

        // Recorrer el array del carrito y agregar cada producto a la lista
        var total = 0;
        cart.forEach(function (product) {
            var itemHtml = '<li>' + product.name + ' - $' + product.price.toFixed(2) + '</li>';
            cartList.append(itemHtml);
            total += product.price;
        });

        // Mostrar el total
        cartTotal.text('$' + total.toFixed(2));
    }

    // Mostrar/ocultar el desplegable del carrito al hacer clic en el icono del carrito
    $('.header__cart').on('click', function (e) {
        e.stopPropagation(); // Evita que se propague el evento al contenedor padre
        cartDropdown.toggleClass('open'); // Alternar clase para mostrar/ocultar el desplegable del carrito
    });

    // Ocultar el desplegable del carrito al hacer clic fuera de él
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header__cart').length && !$(e.target).closest('.cart__dropdown').length) {
            cartDropdown.removeClass('open');
        }
    });

    // Checkout (ejemplo básico)
    $('.cart__checkout').on('click', function () {
        var checkoutAmount = parseFloat(cartTotal.text().replace('$', ''));
        alert('Total a pagar: $' + checkoutAmount.toFixed(2));
        // Aquí podrías implementar lógica adicional para el checkout, como enviar datos al servidor, etc.
    });


});










