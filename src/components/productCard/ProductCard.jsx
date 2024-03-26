import PropTypes from "prop-types";
import { Box, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import "./productCard.scss";

import Button from "../button/Button";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CURRENCY, IT_IS_OFF } from "./../../constanst/general.js";
import { PRODUCTS_IMG_URL } from "../../constanst/api.js";

const ProductCard = (props) => {
    const { product, removeProduct } = props;

    const { getProductCart, addProductCart, removeProductCart } = useContext(ShoppingCartContext);
    const [ openDialog, setOpenDialog ] = useState(false);

    const handleRemoveProduct = () => {
        setOpenDialog(false);
        removeProduct(product.id);
    };

    const getCardAmount = ()=> {

        const productLS = getProductCart(product.id);

        if (productLS) {
            return productLS.amount;
        }
        return 0;

    };

    return (
        <Card className="product-card">
            <Box className="product-card__floats">
                <Box>
                    <IconButton
                        component={NavLink}
                        to={`/product/${product.id}`}
                        state={{ product }}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => setOpenDialog(true)}><DeleteIcon/></IconButton>
                </Box>
                <Dialog
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Confirmar Eliminación</DialogTitle>
                    <DialogContent>
                    ¿Estás seguro de que deseas eliminar este producto?
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => setOpenDialog(false)}
                            color="primary">Cancelar</Button>
                        <Button
                            onClick={handleRemoveProduct}
                            color="secondary">Eliminar</Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <CardMedia
                component="img"
                className="product-card__image"
                image={`${PRODUCTS_IMG_URL}/${product.imageFileName}`}
                alt={`Fotografía de ${product.name}`}/>
            <CardContent className="product-card__content">
                <h4>{product.name}</h4>
                <p>{`${product.description}`}</p>
                {!product.isPromotion && <p className="product-card__content--price"><span>{CURRENCY} {`${product.price.toFixed(2)}`}</span></p>}
                {product.isPromotion &&
                <p className="product-card__content--promotionPrice">
                    <span>{CURRENCY}{product.price.toFixed(2)}</span>
                    <span>{CURRENCY}{`${(product.price - (product.price / 100 * IT_IS_OFF )).toFixed(2)}`}</span>
                    Precio promocional!</p>}
            </CardContent>
            <CardActions className="product-card__actions">
                {product.stock === 0 ?
                    (<p className="noStock">Sin Stock</p>) : (
                        <>
                            <Button
                                color="danger"
                                onClick={()=> removeProductCart(product)}><RemoveIcon/></Button>
                            <span>{getCardAmount()}</span>
                            <Button onClick={()=> addProductCart(product)}><AddIcon/></Button>
                        </>
                    )}
            </CardActions>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageFileName: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPromotion: PropTypes.bool.isRequired,
    }),
    removeProduct: PropTypes.func.isRequired,
};

export default ProductCard;