import useProducts from "../../hooks/useProducts.js";
import { Box } from "@mui/material";
import "./productGallery.scss";

import ProductSearch from "../../components/productSearch/ProductSearch";
import ProductCard from "../../components/productCard/ProductCard";
import ProductCreateCard from "../../components/productCreateCard/ProductCreateCard.jsx";

const ProductGallery = () => {

    const { products, searchProducts, removeProduct } = useProducts();

    return (
        <Box className="product-gallery">
            <Box className="product-gallery__search">
                <ProductSearch searchProducts={searchProducts}/>
                <ProductCreateCard/>
            </Box>

            <Box
                className="product-gallery__cards">
                <p>Galeria</p>
                {products?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}/>
                ))}
            </Box>
        </Box>

    );
};

export default ProductGallery;