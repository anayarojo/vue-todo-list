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

    _public.getUser = async function() {
        const token = await _public.getToken();

        if (!token) {
            Storage.remove('user');
            return null;
        }
        
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

    _public.getToken = async function() {
        return Storage.get('token');
    };

    return _public;
})();
