import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import "./shoppingCart.scss";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import Button from "../../components/button/Button";
import CartTable from "../../components/table/CartTable";
import ShoppingResumeTable from "../../components/table/shoppingResumeTable";

const ShoppingCart = () => {

    const { shoppingCart, emptyShoppingCart } = useContext(ShoppingCartContext);

    return (
        <>
            <Box className="shoppingCart__container">
                <h2 className="shoppingCart__container__title">Carrito de compras</h2>
                <Box className="shoppingCart">
                    <CartTable products={shoppingCart}>
                    </CartTable>
                    <ShoppingResumeTable/>
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