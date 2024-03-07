import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) =>{
    const { children } = props;
    const { items, setItem, removeItem } = useLocalStorage({ shoppingCart : [] });

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

    const addProductCart = (product) => {

        const productLS = getProductCart(product.id);

        if (productLS) {
            //Si  existe en LocalStorage, le sumo 1 al amount
            product.amount = productLS.amount + 1;

            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            setItem("shoppingCart", products);

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

    const emptyShoppingCart = () => {
        setItem("shoppingCart", []);
        console.log("Vaciando Carrito");
    };

    return(
        <ShoppingCartContext.Provider
            value={{
                shoppingCart: items.shoppingCart,
                getProductCart,
                addProductCart,
                removeProductCart,
                shoppingCartCounter,
                emptyShoppingCart }}>
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