import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputField from "../form/inputField/InputField.jsx";
import { useFormik } from "formik";
import validationSchema from "./formCartValidation.js";

import "./shoppingResumeTable.scss";
import { Box } from "@mui/material";
import Button from "../button/Button";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CURRENCY } from "./../../constanst/general.js";
import Alert from "../../components/alert/Alert.jsx";
import useProducts from "../../hooks/useProducts.js";
import useMailer from "../../hooks/useMailer.js";
import usePurchaser from "../../hooks/usePurchaser.js";

const ShoppingResumeTable = () => {

    const [ openAlert, setOpenAlert ] = useState(false);

    const { getTotal, shoppingCartCounter, emptyShoppingCart, shoppingCart } = useContext(ShoppingCartContext);
    const { updateStock } = useProducts();
    const { logPurchase } = usePurchaser();

    const { sendPurchaseConfirmation } = useMailer();

    const handlePurchaseCart = (shoppingCart) => {
        updateStock(shoppingCart);
        setOpenAlert(true);
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const total = getTotal();
            handlePurchaseCart(shoppingCart);
            logPurchase(values, total);
            sendPurchaseConfirmation(values);
            emptyShoppingCart();
            resetForm();
        },
    });

    return (
        <Box className="shoppingCart__resume">
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 300 }}
                    aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell
                                className="table__head--title"
                                align="left">Resumen de compra
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className="table__body__items">
                                <div className="item table__body__items--products">
                                    <p>Productos ({shoppingCartCounter()})</p>
                                    <span className="grid-item-right">{CURRENCY} {(getTotal().toFixed(2))}</span>
                                </div>
                                {shoppingCartCounter() > 0 && (
                                    <div className="item table__body__items--ship">
                                        <p >Envío:</p>
                                        <span className="grid-item-right">Gratis</span>
                                    </div>)}
                                <div className="item table__body__items--total">
                                    <p >Total: </p>
                                    <span className="grid-item-right">{CURRENCY} {(getTotal().toFixed(2))}</span>
                                </div>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                {shoppingCartCounter() > 0 && (
                    <Box
                        component="form"
                        className="shoppingCart__resume--form"
                        noValidate
                        autoComplete="off"
                        onSubmit={formik.handleSubmit}>

                        <InputField
                            label="Nombre y apellido"
                            name="fullname"
                            size="small"
                            variant="outlined"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                            errorMessage={formik.touched.fullname && formik.errors.fullname}
                            inputProps={{ maxLength: 25 }}/>

                        <InputField
                            label="E-mail"
                            name="email"
                            size="small"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            errorMessage={formik.touched.email && formik.errors.email}
                            inputProps={{ maxLength: 50 }}/>

                        <Button
                            className="shoppingCart__resume--form--btn"
                            type="submit"
                            color="success"
                        >Confirmar Compra
                        </Button>
                    </Box>)}
                <Alert
                    openAlert={openAlert}
                    setOpenAlert={setOpenAlert}
                    message="La compra se procesó correctamente"/>
            </TableContainer>
        </Box>
    );
};

export default ShoppingResumeTable;