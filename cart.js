document.addEventListener('DOMContentLoaded', function() {
    // Get all remove buttons and quantity inputs
    var removeButtons = document.querySelectorAll('.remove-btn');
    var quantityInputs = document.querySelectorAll('.cart-quantity-input');

    // Attach click event listeners to remove buttons
    removeButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            removeCartItem(index);
        });
    });

    // Attach input event listeners to quantity inputs
    quantityInputs.forEach(function(input, index) {
        input.addEventListener('input', function() {
            updateQuantity(index);
        });
    });

    // Function to remove a cart item
    function removeCartItem(index) {
        var cartRow = document.querySelectorAll('.cart-row')[index];
        if (cartRow) {
            cartRow.remove();
            updateCartTotal();
        }
    }

    // Function to update subtotal and grand total
    function updateQuantity(index) {
        var cartRows = document.querySelectorAll('.cart-row');
        var cartRow = cartRows[index];

        if (cartRow) {
            var priceElement = cartRow.querySelector('.cart-price');
            var quantityElement = cartRow.querySelector('.cart-quantity-input');
            var subtotalElement = cartRow.querySelector('.cart-subtotal');

            var price = parseFloat(priceElement.textContent.replace('₹', ''));
            var quantity = parseInt(quantityElement.value);
            var subtotal = price * quantity;

            subtotalElement.textContent = '₹' + subtotal.toFixed(2);

            updateCartTotal();
        }
    }

    // Function to update cart total
    function updateCartTotal() {
        var cartRows = document.querySelectorAll('.cart-row');
        var cartTotalPriceElement = document.querySelector('.cart-total-price');
        var cartGrandTotalElement = document.querySelector('.cart-grand-total');

        var total = 0;
        cartRows.forEach(function(cartRow) {
            var subtotalElement = cartRow.querySelector('.cart-subtotal');
            var subtotal = parseFloat(subtotalElement.textContent.replace('₹', ''));
            total += subtotal;
        });

        cartTotalPriceElement.textContent = '₹' + total.toFixed(2);
        cartGrandTotalElement.textContent = '₹' + total.toFixed(2);
    }

    // Initialize cart total
    updateCartTotal();
});