import env from "./node_modules/@/environments/env";
import axios from "axios";

const apiBase = `${env.apiUrl}/api`;

export const Authentication = (function() {
    const _public = {};
    
    _public.register = async function(form) {
        const response = await await axios.post(`${apiBase}/register`, {
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation
        });

        if (response.data.error) return false;
        Storage.set('token', response.data.token);
        Storage.set('user', response.data.user, true);
        
        return true;
    };

    _public.login = async function(form) {
        const response = await await axios.post(`${apiBase}/login`, {
            email: form.email,
            password: form.password
        });

        if (response.data.error) return false;
        Storage.set('token', response.data.token);

        return true;
    };

    _public.logout = function() {
        Storage.set('token', null);
        Storage.set('user', null, true);
    };

    _public.getUser = async function(token) {

        if (!token) return null;
        
        const response = await await axios.get(`${apiBase}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.data.error || !response.data.user) {
            Storage.remove('user');
            return null;
        }

        Storage.set('user', response.data.user, true);
        return response.data.user;
    };

    return _public;
})();

export default Authentication;
