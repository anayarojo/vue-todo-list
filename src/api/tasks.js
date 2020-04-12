import env from "@/environments/env";
import axios from "axios";

import { handle, getConfig } from "./response";
const apiBase = `${env.apiUrl}/api`;

export const Tasks = (function() {
    const _public = {};
    
    _public.list = async function(token, list = null) {
        try {
            return handle(await axios.get(
                list ? `${apiBase}/tasks/${list}` : `${apiBase}/tasks`,
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(token, task) {
        try {
            return handle(await axios.get(
                `${apiBase}/tasks/${task}`, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(token, form, list = null) {
        try {
            return handle(await axios.post(
                    list ? `${apiBase}/tasks/${list}` : `${apiBase}/tasks`,   {
                    description: form.description,
                    completed: form.completed,
                }, 
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(token, task, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/tasks/${task}`, {
                    description: form.description,
                    completed: form.completed,
                },
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(token, task) {
        try {
            return handle(await axios.delete(
                `${apiBase}/tasks/${task}`,
                getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Tasks;
