import env from "@/environments/env";
import axios from "axios";
import { handle } from "./response";

const apiBase = `${env.apiUrl}/api`;

export const Authentication = (function() {
    const _public = {};
    
    _public.register = async function(form) {
        try {
            return handle(await axios.post(`${apiBase}/register`, {
                name: form.name,
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation
            }));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.login = async function(form) {
        try {
            return handle(await axios.post(`${apiBase}/login`, {
                email: form.email,
                password: form.password
            }));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.getUser = async function(token) {
        try {
            return handle(await axios.get(`${apiBase}/user`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Authentication;
