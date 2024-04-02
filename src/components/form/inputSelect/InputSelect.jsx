import PropTypes from "prop-types";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

const InputSelect = (props) => {

    const { value, label, name, size, onBlur, error, onChange, errorMessage } = props;

    return (
        <Box
            className={`input-field ${error && "input-field--invalid"}`}
            sx={{ minWidth: 120 }}>
            <FormControl
                fullWidth
            >
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={onChange}
                    name={name}
                    size={size}
                    onBlur={onBlur}
                    error={error}
                >
                    <MenuItem value="Celulares">Celulares</MenuItem>
                    <MenuItem value="Accesorios">Accesorios</MenuItem>
                    <MenuItem value="Auriculares">Auriculares</MenuItem>
                </Select>
                {error && <FormHelperText>{errorMessage}</FormHelperText>}
            </FormControl>
        </Box>
    );
};

InputSelect.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    errorMessage :  PropTypes.string,

};

InputSelect.defaultProps = {
    label: "",
    error: false,
    errorMessage: "",

};

export default InputSelect;