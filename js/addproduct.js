/*Alerts*/
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


/*From add product*/
const inputName = document.getElementById("id-name");
const inputPrice = document.getElementById("id-price");
const inputStock = document.getElementById("id-stock");
const inputBrand = document.getElementById("id-brand");
const inputCategory = document.getElementById("id-category");
const inputShortDesc = document.getElementById("id-short-desc");
const inputLongDesc = document.getElementById("id-long-desc");
const inputPhoto = document.getElementById("id-photo");
const buttonSave = document.getElementById("id-save");

/*regex*/
const regexName = /\b[a-zA-Z]{2,50}\b/; //Que contenga un string de al menos 2 letras
const regexNumber = /^[0-9]+$/; //Sólo números
const regexQuery = /^[\s\S]{10,}$/;//que contenga al menos 10 caracteres
const regexQueryLong = /^[\s\S]{20,}$/;//que contenga al menos 20 caracteres

/*Functions*/
function validateName() {
    if (!regexName.test(inputName.value)) {
        inputName.nextElementSibling.innerText = "El nombre ingresado es inválido";
        inputName.classList.add("input-invalid");
        return false;
    } else {
        inputName.nextElementSibling.innerText = "";
        inputName.classList.remove("input-invalid");
        inputName.classList.add("input-valid");
        return true;
    }
}

function validatePrice() {
    if (!regexNumber.test(inputPrice.value)) {
        inputPrice.nextElementSibling.innerText = "El valor ingresado es inválido";
        inputPrice.classList.add("input-invalid");
        return false;

    } else {
        inputPrice.nextElementSibling.innerText = "";
        inputPrice.classList.remove("input-invalid");
        inputPrice.classList.add("input-valid");
        return true;
    }
}

function validateStock() {
    if (!regexNumber.test(inputStock.value)) {
        inputStock.nextElementSibling.innerText = "El valor ingresado es inválido";
        inputStock.classList.add("input-invalid");
        return false;

    } else {
        inputStock.nextElementSibling.innerText = "";
        inputStock.classList.remove("input-invalid");
        inputStock.classList.add("input-valid");
        return true;
    }
}

function validateBrand() {

    if (inputBrand.value == "not_selected") {
        inputBrand.nextElementSibling.innerText = "Debe seleccionar un ítem de la lista";
        inputBrand.classList.add("input-invalid");
        return false;

    } else {
        inputBrand.nextElementSibling.innerText = "";
        inputBrand.classList.remove("input-invalid");
        inputBrand.classList.add("input-valid");
        return true;
    }
}

function validateCategory() {
    if (inputCategory.value == "not_selected") {
        inputCategory.nextElementSibling.innerText = "Debe seleccionar un ítem de la lista";
        inputCategory.classList.add("input-invalid");
        return false;

    } else {
        inputCategory.nextElementSibling.innerText = "";
        inputCategory.classList.remove("input-invalid");
        inputCategory.classList.add("input-valid");
        return true;
    }
}

function validateShortDesc() {
    if (!regexQuery.test(inputShortDesc.value)) {
        inputShortDesc.nextElementSibling.innerText = "Ingresá al menos 10 caracteres";
        inputShortDesc.classList.add("input-invalid");
        return false;

    } else {
        inputShortDesc.nextElementSibling.innerText = "";
        inputShortDesc.classList.remove("input-invalid");
        inputShortDesc.classList.add("input-valid");
        return true;
    }
}

function validateLongDesc() {
    if (!regexQueryLong.test(inputLongDesc.value)) {
        inputLongDesc.nextElementSibling.innerText = "Ingresá al menos 20 caracteres";
        inputLongDesc.classList.add("input-invalid");
        return false;

    } else {
        inputLongDesc.nextElementSibling.innerText = "";
        inputLongDesc.classList.remove("input-invalid");
        inputLongDesc.classList.add("input-valid");
        return true;
    }
}

function validatePhoto() {

    if (inputPhoto.value == "") {
        inputPhoto.parentNode.nextElementSibling.innerText = "Debe seleccionar una fotografía";
        return false;

    } else {
        inputPhoto.parentNode.nextElementSibling.innerText = "";
        return true;
    };
}


function validateForm() {
    //Valida todos los inputs
    if (validateName()
        && validatePrice()
        && validateStock()
        && validateBrand()
        && validateCategory()
        && validateShortDesc()
        && validateLongDesc()
        && validatePhoto()) {
        //Muestra mensaje de éxito si todos los valores son  válidos
        showSuccess();
        buttonSave.disabled = true;

    } else {
        //Si hay algún valor invalido muestro alert
        showAlert();
    }
}

function saveProduct() {
    validateName();
    validatePrice()
    validateStock()
    validateBrand();
    validateCategory();
    validateShortDesc();
    validateLongDesc();
    validatePhoto();
    validateForm();
}

buttonSave.onclick = saveProduct;