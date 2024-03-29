import { Box } from "@mui/material";
import "./contact.scss";

import FormContact from "../../components/form/formContact/FormContact.jsx";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <FormContact/>
            </Box>

            <Box
                component="section"
                className="contact__section">
                <h3>Datos de contacto</h3>
                <Box className="contact__section__data">
                    <Box>
                        <PlaceIcon/>
                        <span>Av. del Libertador 99299 - Nuñez - Argentina.</span>
                    </Box>
                    <Box>
                        <PhoneIcon/>
                        <span>+(54)11-31231818</span>
                    </Box>
                    <Box>
                        <MailIcon/>
                        <span>contact@tinchostore.com</span>
                    </Box>
                </Box>
                <Box className="contact__section__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1643.3462222132932!2d-58.467953063257234!3d-34.53601929204432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMyJzA5LjQiUyA1OMKwMjgnMDAuMSJX!5e0!3m2!1ses-419!2sar!4v1710119963181!5m2!1ses-419!2sar"
                        loading="lazy">
                    </iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;