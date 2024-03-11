import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) =>{
    const { children } = props;
    const { items, setItem, getItemValue } = useLocalStorage({ shoppingCart : [] });
    //const { products } = useProducts();
    const products = getItemValue("products");

    const getProductCart = (id) => {
        return items?.shoppingCart.find((item)=>item.id === id);
    };

    const shoppingCartCounter = () => {

        let total = 0;

        items?.shoppingCart?.forEach((product) => {
            total += product.amount;
        });

        return total;
    };

    const getTotal = () => {

        let sum = 0;

        items?.shoppingCart?.forEach((product) => {
            sum = sum + product.price * product.amount;
        });

        return(sum);
    };

    const stockControl = (product) => {

        const productosActualizados = getItemValue("products");
        const index = productosActualizados.findIndex((item) => item.id === product.id);

        if (product.amount === productosActualizados[index].stock){
            alert("La cantidad solicitada supera el stock disponible");
            return true;
        }
    };

    const updateStock = (cartProducts) => {

        const updatedProducts = products.map((existingProduct) => {
            const updatedProduct = cartProducts.find((cartProduct) => cartProduct.id === existingProduct.id);
            if (updatedProduct) {
                return {
                    ...existingProduct,
                    stock: existingProduct.stock - updatedProduct.amount,
                };
            }
            return existingProduct;
        });

        // Establecer los productos actualizados en el almacenamiento
        setItem("products", updatedProducts);

    };

    const addProductCart = (product) => {

        const productLS = getProductCart(product.id);

        if (productLS) {
            //Si  existe en LocalStorage, le sumo 1 al amount
            if(!stockControl(productLS))
            {
                product.amount = productLS.amount + 1;
                const index = items.shoppingCart.findIndex((item) => item.id === product.id);
                const products = items.shoppingCart.toSpliced(index, 1, product);
                setItem("shoppingCart", products);
            }

        }else{
            //Si no existe en LocalStorage, le inicializo la cantidad en 1
            product.amount = 1;
            setItem("shoppingCart", [ ...items.shoppingCart, product ] );
        }

    };

    const removeProductCart = (product) => {

        const productLS = getProductCart(product.id);

        if (productLS && productLS.amount > 1) {
            //Si  existe y el amount es mayor a 1 en LocalStorage, le resto 1
            product.amount = productLS.amount - 1;
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            setItem("shoppingCart", products);

        }else{
            //Si el amount es 1, borro el producto del carrito
            const productsUpdated = items.shoppingCart.filter((item) => item.id != product.id);
            setItem("shoppingCart", productsUpdated);
        }
    };

    const purchaseCart = (cartProducts) => {
        updateStock(cartProducts);
        emptyShoppingCart();
    };

    const removeProductFromCart = (id) => {
        const productToRemove = items.shoppingCart.find((product) => product.id === id);
        if (productToRemove) {
            // Eliminar el producto del carrito
            const updatedCart = items.shoppingCart.filter((product) => product.id !== id);
            setItem("shoppingCart", updatedCart);
        }
    };

    const emptyShoppingCart = () => {
        setItem("shoppingCart", []);
    };

    return(
        <ShoppingCartContext.Provider
            value={{
                shoppingCart: items.shoppingCart,
                getProductCart,
                addProductCart,
                removeProductCart,
                shoppingCartCounter,
                emptyShoppingCart,
                getTotal,
                stockControl,
                updateStock,
                removeProductFromCart,
                purchaseCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );

};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    ShoppingCartContext,
    ShoppingCartProvider,
};