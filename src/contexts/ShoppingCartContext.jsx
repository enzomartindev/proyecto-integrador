import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
import useProducts from "../hooks/useProducts";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) =>{
    const { children } = props;
    const { items, setItem, getItemValue } = useLocalStorage({ shoppingCart : [] });
    const { updateProduct } = useProducts();
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

        const index = products.findIndex((item) => item.id === product.id);

        if (product.amount === products[index].stock){
            alert("La cantidad solicitada supera el stock disponible");
            return true;
        }
    };

    const updateStock = (cartProducts) => {

        cartProducts.forEach((product) => {

            const index = products.findIndex((item) => item.id === product.id);

            products[index].stock = products[index].stock - product.amount;

            updateProduct(products[index]);

        });

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

    const updateCart = () => {
        console.log("Actualizando carrito");
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
                updateCart,
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