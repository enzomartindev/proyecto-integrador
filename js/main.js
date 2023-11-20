let cartCount = 0;
let cart = document.querySelector('.cart__counter');
let addToCartButtons = document.querySelectorAll(".button--add");
let removeFromCartButtons = document.querySelectorAll(".button--remove");
let searchButton = document.getElementById("search-icon");



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


/*PAGE_CONTACT*/
/* ************** Alertas de tipo toast ************** */
const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertClose = document.querySelector(".alert__close");

function showAlert() {
    alert.setAttribute("class", "alert alert--show alert--danger");
    alertText.innerText="Error al enviar"
}

function showSuccess() {
    alert.setAttribute("class", "alert alert--show alert--success");
    alertText.innerText = "Consulta enviada!"
}

function closeAlert() {
    alert.setAttribute("class", "alert");
}

alertClose.onclick = closeAlert;


/**********************FORM CONSULTA***********************************/

const inputName = document.getElementById("id-name");
const inputEmail = document.getElementById("id-email");
const inputQuery = document.getElementById("id-query");
const buttonSend = document.getElementById("id-send");
let validationStatus = [false, false, false];


const regexName = /\b[a-zA-Z]{2,50}\b/; //Que contenga un string de al menos 2 letras
const regexEmail = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;//valida formato de mail 
const regexQuery = /(\S+\s*){10,}/;//que contenga al menos 10 palabras

function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.innerText = "El nombre ingresado es invalido";
        validationStatus[0] = false;
    } else {
        inputName.nextElementSibling.innerText = "";
        validationStatus[0] = true;

    }
}

function validateEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.innerText = "El email ingresado es invalido";
        validationStatus[0] = false;
    } else {
        inputEmail.nextElementSibling.innerText = "";
        validationStatus[1] = true;
    }
}

function validateQuery() {
    if (!regexQuery.test(inputQuery.value)) {
        inputQuery.nextElementSibling.innerText = "Ingresá al menos 10 palabras";
        validationStatus[2] = false;
    } else {
        inputQuery.nextElementSibling.innerText = "";
        validationStatus[2] = true;
    }
}

function validateForm() {

    if (validationStatus[0] && validationStatus[1] && validationStatus[2]) {
        showSuccess();
    } else {
        showAlert();
    }

}

function sendEmail() {
    validateName();
    validateEmail();
    validateQuery();
    validateForm();
}

buttonSend.onclick = sendEmail;