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
    async listTasks ({ commit }, list) {
        const response = await api.list(list);
        if (!response.success) return response;
        commit('set', response.data);
        return response;
    },
    async createTask ({ commit }, list, form) {
        const response = await api.create(list, form);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateTask ({ commit }, list, id, form) {
        const response = await api.update(list, id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteTask ({ commit }, list, id) {
        const response = await api.delete(list, id);
        if (!response.success) return response;
        commit('delete', { list, id });
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
