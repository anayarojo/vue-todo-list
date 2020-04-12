import env from "@/environments/env";
import axios from "axios";

import { handle, getConfig } from "./response";
const apiBase = `${env.apiUrl}/api`;

export const Lists = (function() {
    const _public = {};
    
    _public.list = async function(token, category = null) {
        try {
            return handle(await axios.get(
                category ? `${apiBase}/lists/${category}` : `${apiBase}/lists`, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(token, list) {
        try {
            return handle(await axios.get(
                `${apiBase}/lists/${list}`, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(token, form, category = null) {
        try {
            return handle(await axios.post(
                category ? `${apiBase}/lists/${category}` : `${apiBase}/lists`,   {
                    name: form.name,
                    description: form.description
                }, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(token, list, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/lists/${list}`, {
                    name: form.name,
                    description: form.description
                },
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(token, list) {
        try {
            return handle(await axios.delete(
                `${apiBase}/lists/${list}`,
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Lists;
