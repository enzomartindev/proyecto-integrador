import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
    MESSAGE_PRICE_INVALID,
    MESSAGE_STOCK_INVALID,
    REGEX_PRICE,
    REGEX_STOCK,
} from "../../../constanst/regexPattern";

const validationSchema = yup.object({
    name: yup
        .string("Ingresa el nombre")
        .min(3, "Ingresa un nombre que tenga mas de 3 carateres")
        .required(MESSAGE_REQUIRED),
    price: yup
        .string("Ingresa el precio")
        .matches(REGEX_PRICE, MESSAGE_PRICE_INVALID)
        .required(MESSAGE_REQUIRED),
    stock: yup
        .string("Ingresa el stock")
        .matches(REGEX_STOCK, MESSAGE_STOCK_INVALID)
        .required(MESSAGE_REQUIRED),
    description: yup
        .string("Ingresá la descripción")
        .min(15, "Ingresa una descripción que tenga entre 15 y 150 carateres")
        .required(MESSAGE_REQUIRED),
    files: yup
        .array()
        .min(1, "Por favor, selecciona al menos un archivo"), // Validación para asegurar que se haya seleccionado al menos un archivo

});

export default validationSchema;