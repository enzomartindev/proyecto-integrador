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
import { useContext } from "react";
import Button from "../../components/button/Button.jsx";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { PRODUCTS_IMG_URL } from "../../constanst/api.js";

const CartTable = (props) => {

    const { addProductCart, removeProductCart } = useContext(ShoppingCartContext);

    const { products } = props;

    return (
        <TableContainer
            component={Paper}
            className="table__container">
            <Table
                // sx={{ minWidth: 650 }}
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
                <TableBody className="table__body">
                    {products && products.length > 0 ? (
                        products?.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }} >
                                <TableCell
                                    className="productCell"
                                    component="th"
                                    scope="row">
                                    <img
                                        className="cartImage"
                                        src={`${PRODUCTS_IMG_URL}/${product.imageFileName}`}
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
                                    <span>{product.amount}</span>
                                    <Button
                                        className = "shoppingCartButton"
                                        onClick={()=> addProductCart(product)}><AddIcon/>
                                    </Button>
                                </TableCell>
                                <TableCell
                                    align="center">{CURRENCY}{product.price.toFixed(2)}</TableCell>
                                <TableCell align="center">{CURRENCY}{(product.price * product.amount).toFixed(2)}</TableCell>
                            </TableRow>
                        )))
                        : (
                            <TableRow className="emptyCart">
                                <TableCell
                                    colSpan={4}
                                    rowSpan={4}>
                                    El carrito está vacío
                                </TableCell>
                            </TableRow>
                        )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

CartTable.propTypes = {
    products: PropTypes.array,
};

export default CartTable;