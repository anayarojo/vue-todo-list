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
    
    _public.list = async function(list) {
        try {
            return handle(await axios.get(
                `${apiBase}/lists/${list}/tasks`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.get = async function(list, task) {
        try {
            return handle(await axios.get(
                `${apiBase}/lists/${list}/tasks/${task}`, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.create = async function(list, form) {
        try {
            return handle(await axios.post(
                    `${apiBase}/lists/${list}/tasks`,   {
                    description: form.description,
                    completed: form.completed,
                }, 
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.update = async function(list, task, form) {
        try {
            return handle(await axios.put(
                `${apiBase}/lists/${list}/tasks/${task}`, {
                    description: form.description,
                    completed: form.completed,
                },
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    _public.delete = async function(list, task) {
        try {
            return handle(await axios.delete(
                `${apiBase}/lists/${list}/tasks/${task}`,
                axiosConfig
            ));
        } catch(exception) {
            return handle(exception.response);
        }
    };

    return _public;
})();

export default Tasks;
