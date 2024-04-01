import useProducts from "../../hooks/useProducts.js";
import { Box } from "@mui/material";
import "./productGallery.scss";

import ProductSearch from "../../components/productSearch/ProductSearch";
import ProductCard from "../../components/productCard/ProductCard";
import ProductCreateCard from "../../components/productCreateCard/ProductCreateCard.jsx";
import DataLoading from "../dataLoading/DataLoading.jsx";
import { PRODUCTS_IMG_URL } from "../../constanst/api.js";

const ProductGallery = () => {

    const { error, isLoading, products, searchProducts, removeProduct } = useProducts();

    if (error) {
        return <Box className="networkError">
            <p>Ocurrió un error:</p>
            <p>Código: {error.code}</p>
        </Box>;
    }

    if (isLoading) {
        return <DataLoading title="Cargando productos..."/>;
    }

    return (

        <Box className="product-gallery">
            <Box className="product-gallery__search">
                <ProductSearch searchProducts={searchProducts}/>
                <ProductCreateCard/>
            </Box>
            {products.length > 0 ? (
                <Box
                    className="product-gallery__cards">
                    {products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            removeProduct={removeProduct}/>
                    ))}
                </Box>)
                :(
                    <Box className="product-gallery--empty">
                        <img
                            src={`${PRODUCTS_IMG_URL}/emptyProducts.jpg`}
                            alt=""/>
                        <p>No se encontraron productos en la base de datos</p>
                    </Box>
                )}
        </Box>
    );

};

export default ProductGallery;