import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

import { CURRENCY } from "./../../constanst/general.js";
import "./cartTable.scss";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button.jsx";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

const CartTable = (props) => {

    const { shoppingCart, getProductCart, addProductCart, removeProductCart } = useContext(ShoppingCartContext);

    const { products } = props;
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        getTotal();
    }, [products]);

    const getTotal = () => {

        let sum = 0;

        products?.forEach((product) => {
            sum = sum + product.price * product.amount;
        });

        setTotal(sum);
    };

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table">
                <TableHead className="table__head">
                    <TableRow >
                        <TableCell
                            align="left">Producto</TableCell>
                        <TableCell
                            align="center">Cantidad</TableCell>
                        <TableCell
                            align="center">Precio</TableCell>
                        <TableCell
                            align="center">Importe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                            <TableCell
                                className="productCell"
                                component="th"
                                scope="row">
                                <img
                                    className="cartImage"
                                    src={product.image}
                                    alt="Imagen del producto"/>
                                {product.name}
                            </TableCell>
                            <TableCell
                                className="amountCell"
                                align="center">
                                <Button
                                    className = "shoppingCartButton"
                                    color="danger"
                                    onClick={()=> removeProductCart(product)}><RemoveIcon/>
                                </Button>
                                {product.amount}
                                <Button
                                    className = "shoppingCartButton"
                                    onClick={()=> addProductCart(product)}><AddIcon/>
                                </Button>
                            </TableCell>
                            <TableCell align="center">{CURRENCY}{product.price.toFixed(2)}</TableCell>
                            <TableCell align="center">{CURRENCY}{(product.price * product.amount).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="total">
                        <TableCell colSpan={2}/>
                        <TableCell align="center">
                            Total:
                        </TableCell>
                        <TableCell align="center">
                            {CURRENCY}{total.toFixed(2)}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

CartTable.propTypes = {
    products: PropTypes.array,
};

export default CartTable;