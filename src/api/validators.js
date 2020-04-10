import env from "@/environments/env";
import axios from "axios";

const apiBase = `${env.apiUrl}/api`;

export const Validators = (function() {
    const _public = {};

    _public.emailAvailability = async function(email) {
        const response = await axios.get(`${apiBase}/validate/email/${email}`, {
            useCredentails: true
        });
        return response.data.available;
    };

    return _public;
})();

export default Validators;