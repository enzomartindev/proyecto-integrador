import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

import "./dataLoading.scss";

const DataLoading = (props) => {

    const { title } = props;

    return (
        <div className="data__loading">
            <CircularProgress color="success"/>
            <div>
                <p >{title}...</p>
                <p>Por favor espere</p>
            </div>

        </div>
    );
};

DataLoading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default DataLoading;