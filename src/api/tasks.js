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

export const Tasks = (function() {
    const _public = {};
    
    _public.list = async function(list = null) {
        try {
            return handle(await axios.get(
                list ? `${apiBase}/tasks/${list}` : `${apiBase}/tasks`,
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(task) {
        try {
            return handle(await axios.get(
                `${apiBase}/tasks/${task}`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(form, list = null) {
        try {
            return handle(await axios.post(
                    list ? `${apiBase}/tasks/${list}` : `${apiBase}/tasks`,   {
                    description: form.description,
                    completed: form.completed,
                }, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(task, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/tasks/${task}`, {
                    description: form.description,
                    completed: form.completed,
                },
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(task) {
        try {
            return handle(await axios.delete(
                `${apiBase}/tasks/${task}`,
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Tasks;
