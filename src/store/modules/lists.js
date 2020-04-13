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
    async listLists ({ rootState, commit }, category = null) {
        const response = await api.list(rootState.session.token, category);
        if (!response.success) return response;
        commit('set', response.data);
        return response;
    },
    async createList ({ rootState, commit }, form, category = null) {
        const response = await api.create(rootState.session.token, form, category);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateList ({ rootState, commit }, id, form) {
        const response = await api.update(rootState.session.token, id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteList ({ rootState, commit }, id) {
        const response = await api.delete(rootState.session.token, id);
        if (!response.success) return response;
        commit('delete', { id });
        return response;
    },
};

const getters = {
    options: state => state.all.map(item => { 
        return { 
            value: item.id, 
            label: item.name 
        };
    }),
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
