import env from "@/environments/env";
import axios from "axios";
import store from '../store';

import { handle } from "./response";
const apiBase = `${env.apiUrl}/api`;

const axiosConfig = {
    headers: {
        'Authorization': `Bearer ${store != null ? store.state.session.token : ''}`
    }
};

export const Lists = (function() {
    const _public = {};
    
    _public.list = async function(category = null) {
        try {
            return handle(await axios.get(
                category ? `${apiBase}/lists/${category}` : `${apiBase}/lists`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(list) {
        try {
            return handle(await axios.get(
                `${apiBase}/lists/${list}`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(form, category = null) {
        try {
            return handle(await axios.post(
                category ? `${apiBase}/lists/${category}` : `${apiBase}/lists`,   {
                    name: form.name,
                    description: form.description
                }, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(list, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/lists/${list}`, {
                    name: form.name,
                    description: form.description
                },
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(list) {
        try {
            return handle(await axios.delete(
                `${apiBase}/lists/${list}`,
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Lists;
