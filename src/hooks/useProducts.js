import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext.jsx";
import { PRODUCTS_URL } from "../constanst/api.js";

const useProducts = () => {
    const { removeProductFromCart } = useContext( ShoppingCartContext );
    const [ response, setResponse ] = useState({});
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const searchProducts = async(params) => {
        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `${PRODUCTS_URL}?${queryParams.toString()}` : PRODUCTS_URL;

        //setIsLoading(true);

        return await axios.get(url)
            .then((res) => {
                setResponse(res);
                setProducts(res.data?.data);
                setIsLoading(false);
                return res.data;
            });

    };

    useEffect(() => {
        searchProducts({});
    }, []);

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
        searchProducts,
        createProduct,
        updateProduct,
        removeProduct,
        uploadProductImage,
    };
};

export default useProducts;