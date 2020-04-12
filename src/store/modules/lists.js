import api from '@/api/lists';

const state = {
    all: [],
};

const mutations = {
    set(state, lists) {
        state.all = lists;
    },
    add(state, list) {
        state.all.push(list);
    },
    update(state, list) {
        state.all.forEach((element, index) => {
            if (element.id === list.id) {
                state.all[index] = list;
            }
        });
    },
    delete(state, list) {
        state.all.forEach((element, index) => {
            if (element.id === list.id) {
                state.all.splice(index, 1);
            }
        });
    },
};

const actions = {
    async listLists ({ commit }, category = null) {
        const response = await api.list(category);
        if (!response.success) return response;
        commit('set', response.data);
        return response;
    },
    async createList ({ commit }, form, category = null) {
        const response = await api.create(form, category);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateList ({ commit }, id, form) {
        const response = await api.update(id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteList ({ commit }, id) {
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
