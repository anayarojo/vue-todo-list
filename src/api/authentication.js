import env from "@/environments/env";
import axios from "axios";

const apiBase = `${env.apiUrl}/api`;

export const Authentication = (function() {
    const _public = {};
    
    _public.register = async function(form) {
        try {
            return await axios.post(`${apiBase}/register`, {
                name: form.name,
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation
            });
        } catch(exception) {
            return exception.response;
        }
    };

    _public.login = async function(form) {
        try {
            return await axios.post(`${apiBase}/login`, {
                email: form.email,
                password: form.password
            });
        } catch(exception) {
            return exception.response;
        }
    };

    _public.getUser = async function(token) {
        try {
            return await axios.get(`${apiBase}/user`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch(exception) {
            return exception.response;
        }
    };

    return _public;
})();

export default Authentication;
