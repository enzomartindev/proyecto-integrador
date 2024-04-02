import { useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./formProduct.scss";

import validationSchema from "./formProduct.validate.js";

import InputField from "../inputField/InputField.jsx";
import InputFile from "../inputFile/InputFile.jsx";

import Switch from "../switch/Switch.jsx";
import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";
import { PRODUCTS_IMG_URL, IMAGE_DEFAULT_NAME } from "../../../constanst/api.js";
import { JPG, PNG } from "./../../../constanst/general.js";
import InputSelect from "../inputSelect/InputSelect.jsx";

const FormProduct = (props) => {
    const { initialValues } = props;

    const { createProduct, updateProduct, uploadProductImage } = useProducts();
    const [ openAlert, setOpenAlert ] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (values?.files) {
                const response = await uploadProductImage(values.files[0]);
                values.imageFileName = response?.data?.filename ? response.data.filename : IMAGE_DEFAULT_NAME;
            }

            values.id ? updateProduct(values) : createProduct(values);
            setOpenAlert(true);
        },
    });

    return (
        <Box
            component="form"
            className="form-product"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre"
                name="name"
                size="small"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
                inputProps={{ maxLength: 25 }}/>

            <InputField
                label="Precio"
                name="price"
                size="small"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                errorMessage={formik.touched.price && formik.errors.price}
                inputProps={{ maxLength: 12 }}/>

            <InputField
                label="Stock"
                name="stock"
                size="small"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                errorMessage={formik.touched.stock && formik.errors.stock}
                inputProps={{ maxLength: 6 }}/>

            <InputField
                label="Marca"
                name="brand"
                size="small"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                errorMessage={formik.touched.brand && formik.errors.brand}
                inputProps={{ maxLength: 25 }}/>

            <InputSelect
                label="Categoría"
                name="category"
                size="small"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                errorMessage={formik.touched.category && formik.errors.category}
            />

            <InputField
                label="Descripción"
                name="description"
                size="small"
                multiline
                rows={5}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                errorMessage={formik.touched.description && formik.errors.description}
                inputProps={{ maxLength: 150 }}/>

            <InputFile
                label="Imagen"
                name="files"
                accept={[ JPG, PNG ]}
                formik={formik}
                value={formik.values.files}
                error={formik.touched.files && Boolean(formik.errors.files)}
                errorMessage={formik.touched.files && formik.errors.files}/>

            <Box
                className="form-product__image"
                component="img"
                src={`${PRODUCTS_IMG_URL}/${formik.values.imageFileName}`}
                alt="Fotografía del producto"/>

            <Switch
                label="Producto nacional"
                name="isNational"
                value={formik.values.isNational}
                onChange={formik.handleChange}
            />
            <Switch
                label="Envío gratis"
                name="freeship"
                value={formik.values.freeship}
                onChange={formik.handleChange}
            />
            <Switch
                label="Está en promoción"
                name="isPromotion"
                value={formik.values.isPromotion}
                onChange={formik.handleChange}
            />

            <Button type="submit">Guardar</Button>
            <Button
                component={NavLink}
                to={"/"}
                type="button"
                color="danger">
                    Cancelar
            </Button>
            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="El producto se ha procesado correctamente"
                redirectUrl="/"/>
        </Box>
    );
};

FormProduct.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageFileName: PropTypes.string.isRequired,
        isPromotion: PropTypes.bool.isRequired,
        freeship: PropTypes.bool.isRequired,
        isNational:PropTypes.bool.isRequired,
    }).isRequired,
};

FormProduct.defaultProps = {
    initialValues: {
        name: "",
        price: 0,
        stock: 0,
        brand: "",
        category:"",
        description: "",
        imageFileName: IMAGE_DEFAULT_NAME,
        isPromotion: false,
        files: [],
        freeship: false,
        isNational: false,
    },
};

export default FormProduct;