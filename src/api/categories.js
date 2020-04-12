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

export const Categories = (function() {
    const _public = {};
    
    _public.list = async function() {
        try {
            return handle(await axios.get(
                `${apiBase}/categories`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(category) {
        try {
            return handle(await axios.get(
                `${apiBase}/categories/${category}`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(form) {
        try {
            return handle(await axios.post(
                `${apiBase}/categories`,  {
                    name: form.name,
                    description: form.description
                }, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(category, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/categories/${category}`, {
                    name: form.name,
                    description: form.description
                },
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(category) {
        try {
            return handle(await axios.delete(
                `${apiBase}/categories/${category}`,
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Categories;
