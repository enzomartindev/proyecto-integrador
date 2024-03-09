import PropTypes from "prop-types";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton } from "@mui/material";
import "./productCard.scss";

import Button from "../button/Button";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { NavLink } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CURRENCY } from "./../../constanst/general.js";

const ProductCard = (props) => {
    const { product, setProducts, itIsOff } = props;
    const { products, removeProduct } = useProducts();

    const { getProductCart, addProductCart, removeProductCart } = useContext(ShoppingCartContext);

    const getCardAmount = ()=> {

        const productLS = getProductCart(product.id);

        if (productLS) {
            return productLS.amount;
        }
        return 0;

    };

    useEffect(() => {
        if (products?.length > 0) {
            setProducts(products);
        }
    }, [products]);

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
                    <IconButton onClick={() => removeProduct(product.id)}><DeleteIcon/></IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                className="product-card__image"
                image={product.image}
                alt={`Fotografía de ${product.name}`}/>
            <CardContent className="product-card__content">
                <h4>{product.name}</h4>
                <p>{`${product.description}`}</p>
                {!product.isPromotion && <p className="product-card__content--price"><span>{CURRENCY} {`${product.price.toFixed(2)}`}</span></p>}
                {product.isPromotion && <p><span>Precio promocional:</span> {`${product.price - (product.price / 100 * itIsOff )}`}</p>}
            </CardContent>
            <CardActions className="product-card__actions">
                {product.stock === 0 ?
                    (<p>No hay Stock</p>) : ( <>
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
        image: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPromotion: PropTypes.bool.isRequired,
    }),
    setProducts: PropTypes.func.isRequired,
    itIsOff: PropTypes.number,
};

ProductCard.defaultProps = {
    itIsOff: 0.0,
};

export default ProductCard;