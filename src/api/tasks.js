import env from "@/environments/env";
import axios from "axios";
import { handle } from "./response";

const apiBase = `${env.apiUrl}/api`;

export const Tasks = (function() {
    const _public = {};
    const _private = {};
    
    _public.list = async function(token, list) {
        try {
            return handle(await axios.get(
                `${apiBase}/lists/${list}/tasks`, 
                _private.getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(token, list, task) {
        try {
            return handle(await axios.get(
                `${apiBase}/lists/${list}/tasks/${task}`, 
                _private.getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(token, form, list) {
        try {
            return handle(await axios.post(
                    `${apiBase}/lists/${list}/tasks`,   {
                    description: form.description,
                    completed: form.completed,
                }, 
                _private.getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(token, list, task, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/lists/${list}/tasks/${task}`, {
                    description: form.description,
                    completed: form.completed,
                },
                _private.getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(token, list, task) {
        try {
            return handle(await axios.delete(
                `${apiBase}/lists/${list}/tasks/${task}`,
                _private.getConfig(token)
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _private.getConfig = function(token) {
        return {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
    };

    return _public;
})();

export default Tasks;
