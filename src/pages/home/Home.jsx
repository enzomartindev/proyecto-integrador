import { useState } from "react";
import { Box } from "@mui/material";
import "./home.scss";

import { IT_IS_OFF } from "../../constanst/general.js";

import ProductSearch from "../../components/productSearch/ProductSearch";
import ProductCard from "../../components/productCard/ProductCard";
import ProductCreateCard from "../../components/productCreateCard/ProductCreateCard.jsx";

const Home = () => {
    const [ products, setProducts ] = useState([]);

    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">
                <h3>Productos</h3>
                <Box className="home__section__search">
                    <ProductCreateCard/>
                    <ProductSearch setProducts={setProducts}/>
                </Box>

                <Box
                    className="home__section__cards">
                    {products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            itIsOff={IT_IS_OFF}
                            setProducts={setProducts}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;