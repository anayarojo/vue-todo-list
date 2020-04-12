import api from '@/api/tasks';

const state = {
    all: [],
};

const mutations = {
    set(state, tasks) {
        state.all = tasks;
    },
    add(state, tasks) {
        state.all.push(tasks);
    },
    update(state, tasks) {
        state.all.forEach((element, index) => {
            if (element.id === tasks.id) {
                state.all[index] = tasks;
            }
        });
    },
    delete(state, tasks) {
        state.all.forEach((element, index) => {
            if (element.id === tasks.id) {
                state.all.splice(index, 1);
            }
        });
    },
};

const actions = {
    async listTasks ({ commit }, list = null) {
        const response = await api.list(list);
        if (!response.success) return response;
        commit('set', response.data);
        return response;
    },
    async createTask ({ commit }, form, list = null) {
        const response = await api.create(form, list);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateTask ({ commit }, id, form) {
        const response = await api.update(id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteTask ({ commit }, id) {
        const response = await api.delete(id);
        if (!response.success) return response;
        commit('delete', { id });
        return response;
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
