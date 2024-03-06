import { NavLink } from "react-router-dom";
import "./productCreateCard.scss";

import Button from "../button/Button";

const ProductCreateCard = () => {
    return (
        <Button
            component={NavLink}
            to="/product">
            Crear Producto
        </Button>
    );
};

export default ProductCreateCard;