/* ************** Alertas de tipo toast ************** */
const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertClose = document.querySelector(".alert__close");

function showAlert() {
    alert.setAttribute("class", "alert alert--show alert--danger");
    alertText.innerText = "Error al enviar"
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