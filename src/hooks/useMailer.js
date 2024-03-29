import axios from "axios";
import { MAILER_URL } from "../constanst/api";

const useMailer = () => {

    const sendConsult = (params) => {

        const { fullname, telephone, email, consult } = params;

        //enviar consulta a store
        sendEmail({
            to: "enzo.martin.alfonso@gmail.com",
            subject: "Consulta TinchoStore",
            content: `${fullname}${telephone}${consult}` });

        //Envia mail a usuario
        sendEmail( {
            to: email,
            subject: "Consulta TinchoStore",
            content: "Tu consulta fue recibida!,\nPronto nos estaremos comunicando con vos\n\nTinchoStore" },
        );

    };

    const sendEmail = async(params) => {

        const queryParams = new URLSearchParams(params);
        const url = `${MAILER_URL}?${queryParams}`;

        return await axios.get(url)
            .then((res) => {
                return res.data;
            });

    };

    return {
        sendConsult,
    };
};

export default useMailer;