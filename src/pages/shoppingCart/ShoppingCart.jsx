import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import "./shoppingCart.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import Button from "../../components/button/Button";
import CartTable from "../../components/table/CartTable";

//import { useRef } from "react";

const ShoppingCart = () => {

    const { shoppingCart, emptyShoppingCart } = useContext(ShoppingCartContext);

    //const location = useLocation();
    //const productRef = useRef(location?.state?.product);

    return (
        <Box className="shoppingCart__container">
            <Box className="shoppingCart">
                <Box
                    component="section"
                    className="shoppingCart_section">
                    <h1>Carrito de compras</h1>
                    <CartTable products={shoppingCart}/>
                </Box>
                <Box className="shoppingCart__resume">
                    <h4>Resumen de compra</h4>
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
                    to="/"
                    type="button"
                    color="success">
                        Confirmar Compra
                </Button>
                <Button
                    component={NavLink}
                    type="button"
                    color="danger"
                    onClick={()=> emptyShoppingCart("shoppingCart")} >
                       Vaciar Carrito
                </Button>
            </Box>
        </Box>
    );
};

export default ShoppingCart;