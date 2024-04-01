import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext.jsx";
import { PRODUCTS_URL } from "../constanst/api.js";

const useProducts = () => {
    const { removeProductFromCart } = useContext( ShoppingCartContext );
    const [ response, setResponse ] = useState({});
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ]= useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        searchProducts({});
    }, []);

    const searchProducts = async(params) => {

        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `${PRODUCTS_URL}?${queryParams.toString()}` : PRODUCTS_URL;

        try {
            return await axios.get(url)
                .then((res) => {
                    setResponse(res);
                    setProducts(res.data?.data);
                    setIsLoading(false);
                    setError(null);
                    return res.data;
                });
        } catch (error) {
            setError(error);
            return error;
        }

    };

    const createProduct = async (values) => {
        return await axios.post(PRODUCTS_URL, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    const updateProduct = async (values) => {
        return await axios.put(`${PRODUCTS_URL}/${values.id}`, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });

    };

    const removeProduct = async(id) => {
        return await axios.delete(`${PRODUCTS_URL}/${id}`)
            .then((res)=>{
                setResponse(res);
                removeProductFromCart(id);
                searchProducts({});
                return res.data;
            });
    };

    const updateStock = async (products) => {

        for (const product of products) {
            const newStock = product.stock - product.amount;

            try {
                await axios.patch(`${PRODUCTS_URL}/${product.id}`, { newStock: newStock })
                    .then((res) => {
                        setResponse(res);
                    });

            } catch (error) {
                console.error(`Error actualizando producto ${product.id}:`, error);
            }

        }

    };

    const uploadProductImage = async (file) => {
        const options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        return await axios.post(`${PRODUCTS_URL}/upload`, { file }, options)

            .then((res) => {
                console.log(res);
                setResponse(res);
                return res.data;
            });
    };

    return {
        products,
        response,
        isLoading,
        error,
        searchProducts,
        createProduct,
        updateProduct,
        removeProduct,
        updateStock,
        uploadProductImage,
    };
};

export default useProducts;