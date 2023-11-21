const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertClose = document.querySelector(".alert__close");

function showAlert() {
    alert.setAttribute("class", "alert alert--show alert--danger");
    alertText.innerText = "No se guardó el producto"
}

function showSuccess() {
    alert.setAttribute("class", "alert alert--show alert--success");
    alertText.innerText = "Producto guardado exitosamente!"
}

function closeAlert() {
    alert.setAttribute("class", "alert");
}

alertClose.onclick = closeAlert;


/**********************FORM CONSULTA***********************************/

const inputName = document.getElementById("id-name");
const inputPrice = document.getElementById("id-price");
const inputStock = document.getElementById("id-stock");
const inputBrand = document.getElementById("id-brand");
const inputCategory = document.getElementById("id-category");
const inputShortDesc = document.getElementById("id-short-desc");
const inputLongDesc = document.getElementById("id-long-desc");
const inputPhoto = document.getElementById("id-photo");
const buttonSave = document.getElementById("id-save");

const regexName = /\b[a-zA-Z]{2,50}\b/; //Que contenga un string de al menos 2 letras


function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.innerText = "El nombre ingresado es invalido";

    } else {
        inputName.nextElementSibling.innerText = "";


    }
}

function validateForm() {

    //Si el form es valido muestro success
    if (regexName.test(inputName.value)) {
        showSuccess();
    //Si el form es invalido muestro alert
    } else {
        showAlert();

    }
}

function saveProduct() {
    validateName();
    validateForm();

}

buttonSave.onclick = saveProduct;