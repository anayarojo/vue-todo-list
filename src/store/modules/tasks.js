import api from '@/api/tasks';
import dynamic from '@/shared/sort';

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
    async listTasks ({ rootState, commit }, { list } = {}) {
        list = list || null;
        const response = await api.list(rootState.session.token, list);
        if (!response.success) return response;
        commit('set', response.data.sort(dynamic('id')));
        return response;
    },
    async createTask ({ rootState, commit }, { form, list }) {
        list = list || null;
        const response = await api.create(rootState.session.token, form, list);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateTask ({ rootState, commit }, { id, form }) {
        const response = await api.update(rootState.session.token, id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteTask ({ rootState, commit }, { id }) {
        const response = await api.delete(rootState.session.token, id);
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
