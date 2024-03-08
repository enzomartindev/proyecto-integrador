import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import "./shoppingCart.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import Button from "../../components/button/Button";
import CartTable from "../../components/table/CartTable";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//import { useRef } from "react";

const ShoppingCart = () => {

    const { shoppingCart, emptyShoppingCart } = useContext(ShoppingCartContext);

    return (
        <>
            <Box className="shoppingCart__container">
                <h2 className="shoppingCart__container__title">
                Carrito de compras</h2>
                <Box className="shoppingCart">
                    <Box
                        className="shoppingCart_section"
                        component="section">
                        <CartTable products={shoppingCart}/>
                    </Box>
                    <Box className="shoppingCart__resume">
                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 300 }}
                                aria-label="simple table">
                                <TableHead className="table__head">
                                    <TableRow >
                                        <TableCell
                                            align="left">Resumen de compra
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell
                                            align="left">
                                            <p>Productos (5)$5000</p>
                                            <p>Envio: Gratis</p>
                                            <p>Total: 5500</p>
                                            <Button
                                                component={NavLink}
                                                to="/"
                                                type="button"
                                                color="success">Confirmar Compra
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Box>
                </Box>
            </Box>
            <Box className="shoppingCart__actions">
                <Button
                    component={NavLink}
                    to="/"
                    type="button">
            Seguir comprando
                </Button>
                <Button
                    component={NavLink}
                    type="button"
                    color="danger"
                    onClick={()=> emptyShoppingCart("shoppingCart")} >
           Vaciar Carrito
                </Button>
            </Box>
        </>
    );
};

export default ShoppingCart;