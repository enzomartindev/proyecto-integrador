import axios from "axios";
import { PURCHASER_URL } from "../constanst/api";
import { useState } from "react";

const usePurchaser = () => {

    const [ response, setResponse ] = useState({});

    const logPurchase = async (values, total) => {

        const options = {
            total: total,
            fullname: values.fullname,
        };

        return await axios.post(PURCHASER_URL, options)
            .then((res) => {
                setResponse(res);
            });
    };

    return {
        logPurchase,
        response,
    };

};

export default usePurchaser;