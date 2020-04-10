import env from "@/environments/env";
import axios from "axios";

const apiBase = `${env.apiUrl}/api`;

export const Authentication = (function() {
    const _public = {};
    
    _public.register = async function(form) {
        return await axios.post(`${apiBase}/register`, {
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation
        });
    };

    _public.login = async function(form) {
        return await axios.post(`${apiBase}/login`, {
            email: form.email,
            password: form.password
        });
    };

    _public.getUser = async function(token) {
        return await axios.get(`${apiBase}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    };

    return _public;
})();

export default Authentication;
