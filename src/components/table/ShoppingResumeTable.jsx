import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./shoppingResumeTable.scss";
import { Box } from "@mui/material";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CURRENCY } from "./../../constanst/general.js";

const ShoppingResumeTable = () => {

    const { getTotal, shoppingCartCounter } = useContext(ShoppingCartContext);

    return (
        <Box className="shoppingCart__resume">
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 300 }}
                    aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell
                                className="table__head--title"
                                align="left">Resumen de compra
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className="table__body__items">
                                <div className="item table__body__items--products">
                                    <p>Productos ({shoppingCartCounter()})</p>
                                    <span className="grid-item-right">{CURRENCY} {(getTotal().toFixed(2))}</span>
                                </div>
                                <div className="item table__body__items--ship">
                                    <p >Envío:</p>
                                    <span className="grid-item-right">Gratis</span>
                                </div>
                                <div className="item table__body__items--total">
                                    <p >Total: </p>
                                    <span className="grid-item-right">{CURRENCY} {(getTotal().toFixed(2))}</span>
                                </div>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Box className="shoppingCart__resume--btn">
                    <Button
                        component={NavLink}
                        to="/"
                        type="button"
                        color="success"
                    >Confirmar Compra

                    </Button>
                </Box>
            </TableContainer>

        </Box>
    );
};

export default ShoppingResumeTable;