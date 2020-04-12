import env from "@/environments/env";
import axios from "axios";

import { handle, getConfig } from "./response";
const apiBase = `${env.apiUrl}/api`;

export const Categories = (function() {
    const _public = {};
    
    _public.list = async function(token) {
        try {
            return handle(await axios.get(
                `${apiBase}/categories`, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(token, category) {
        try {
            return handle(await axios.get(
                `${apiBase}/categories/${category}`, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(token, form) {
        try {
            return handle(await axios.post(
                `${apiBase}/categories`,  {
                    name: form.name,
                    description: form.description
                }, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(token, category, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/categories/${category}`, {
                    name: form.name,
                    description: form.description
                },
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(token, category) {
        try {
            return handle(await axios.delete(
                `${apiBase}/categories/${category}`,
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Categories;
