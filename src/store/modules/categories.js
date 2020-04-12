import api from '@/api/categories';

const state = {
    all: [],
};

const mutations = {
    set(state, categories) {
        state.all = categories;
    },
    add(state, category) {
        state.all.push(category);
    },
    update(state, category) {
        state.all.forEach((element, index) => {
            if (element.id === category.id) {
                state.all[index] = category;
            }
        });
    },
    delete(state, category) {
        state.all.forEach((element, index) => {
            if (element.id === category.id) {
                state.all.splice(index, 1);
            }
        });
    },
};

const actions = {
    async listCategories ({ commit }) {
        const response = await api.list();
        if (!response.success) return response;
        commit('set', response.data);
        return response;
    },
    async createCategory ({ commit }, form) {
        const response = await api.create(form);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateCategory ({ commit }, id, form) {
        const response = await api.update(id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteCategory ({ commit }, id) {
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
