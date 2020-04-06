import Storage from "@/shared/storage";
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

export const Autentication = (function() {
    const _public = {};
    
    _public.register = async function(form) {
        const response = await await axios.post(`${apiBase}/register`, {
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation
        });
        if (response.data.error) return false;
        Storage.set('auth_token', response.data.token);
        return true;
    };

    _public.login = async function(form) {
        const response = await await axios.post(`${apiBase}/login`, {
            email: form.email,
            password: form.password
        });
        if (response.data.error) return false;
        Storage.set('auth_token', response.data.token);
        return true;
    };

    return _public;
})();
