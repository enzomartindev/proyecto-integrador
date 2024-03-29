import { Box } from "@mui/material";
import "./home.scss";
import ProductGallery from "../../components/productGallery/ProductGallery";
import ProductSearch from "../../components/productSearch/ProductSearch";
import useProducts from "../../hooks/useProducts";
import ProductCreateCard from "../../components/productCreateCard/ProductCreateCard";

const Home = () => {

    const { searchProducts } = useProducts();

    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">
                <Box className="product-gallery__search">
                    <ProductSearch searchProducts={searchProducts}/>
                    <ProductCreateCard/>
                </Box>
                <ProductGallery/>
            </Box>
        </Box>
    );
};

export default Home;