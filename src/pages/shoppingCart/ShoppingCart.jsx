import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import "./shoppingCart.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import Button from "../../components/button/Button";

//import { useRef } from "react";

const ShoppingCart = () => {

    const { shoppingCart, getProductCart, addProductCart, removeProductCart } = useContext(ShoppingCartContext);

    const location = useLocation();
    //const productRef = useRef(location?.state?.product);

    console.log(shoppingCart);

    return (
        <Box className="shoppingCart">
            <Box
                component="section"
                className="shoppingCart_section">
                <h1>Carrito de compras</h1>
                {shoppingCart?.map((product) => (
                    <li
                        className="shoppingCart_section--item"
                        key={product.id}>
                        <img
                            className="shoppingCart_section--item--img"
                            src={product.image}
                            alt="Foto del producto"/>
                        <span className="amount item">{product.amount}</span>
                        <span className="name item">{product.name}</span>
                        <span className="price item">{product.price}</span>
                    </li>
                ))}
            </Box>
            <Button
                component={NavLink}
                to="/"
                type="button"
                color="danger">
                        Cancelar
            </Button>
            <Button
                component={NavLink}
                to="/"
                type="button"
                color="success">
                        Confirmar Compra
            </Button>
        </Box>
    );
};

export default ShoppingCart;