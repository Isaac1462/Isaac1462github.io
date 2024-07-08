$(document).ready(function() {
    var headerCart = $('.header__cart');
    var cartDropdown = $('.cart__dropdown');

    // Mostrar/ocultar el carrito al hacer clic en el icono del carrito
    headerCart.on('click', function() {
        cartDropdown.toggle();
    });

    // Ocultar el carrito al hacer clic fuera de él
    $(document).on('click', function(event) {
        if (!headerCart.is(event.target) && headerCart.has(event.target).length === 0 &&
            !cartDropdown.is(event.target) && cartDropdown.has(event.target).length === 0) {
            cartDropdown.hide();
        }
    });

    // Evitar que se cierre al hacer clic dentro del carrito
    cartDropdown.on('click', function(event) {
        event.stopPropagation();
    });
});
