let cartCount = 0;
let cardCount = 0;
let cart = document.querySelector('.cart__counter');
let addToCartButtons = document.querySelectorAll(".button--add");
let removeFromCartButtons = document.querySelectorAll(".button--remove");


function addtoCart() {
    cartCounter("+");
    cardCounter(this.previousElementSibling, "+");

}

function removeFromCart() {
    cartCounter("-");
    cardCounter(this.nextElementSibling, "-");

}

function cartCounter(operation) {
    //modifica el contador del carrito
    switch (operation) {
        case "-":
            //Resta 1 al carrito
            cartCount--;
            cart.innerText = cartCount;
            //Si el contador llega a 0 le borro la clase para que desaparezca
            if (cartCount == 0) {
                cart.classList.remove("cart__added");
                cart.innerText = "";
            }
            break;

        default:
            //Suma 1 al carrito y le agrega la clase con el circulo rojo
            cartCount++;
            cart.innerText = cartCount;
            cart.classList.add("cart__added")
            break;
    }

}

function cardCounter(card, operation) {
    //modifica el contador de la tarjeta
    switch (operation) {
        case "-":
            //Le resta 1 a la tarjeta
            card.innerText = (parseInt(card.innerText) - 1);

            if (card.innerText == 0) {
                //Si llego a 0 deshabilito el boton
                console.log("llego a 0, deshabilitar boton")
                disableButton(card.previousElementSibling);
            }
            break;

        default:
            //Le suma 1 a la tarjeta
            card.innerText = (parseInt(card.innerText) + 1);
            enableButton(card.previousElementSibling);

            break;
    }
}

//Asigno la funcion a todos los botones
function addButtons() {
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].onclick = addtoCart;
    }
}
function removeButtons() {
    for (let i = 0; i < removeFromCartButtons.length; i++) {
        removeFromCartButtons[i].onclick = removeFromCart;
        disableButton(removeFromCartButtons[i]);
    }
}

function loadButtons() {
    addButtons();
    removeButtons();
}

function disableButton(btn) {
    btn.classList.remove("button--remove");
    btn.classList.add("button--disabled");
    btn.disabled = true;
}

function enableButton(btn) {
    btn.classList.add("button--remove");
    btn.classList.remove("button--disabled");
    btn.disabled = false;
}

function pageLoad() {
    loadButtons();

}

pageLoad();
