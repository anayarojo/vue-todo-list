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
    async listCategories ({ rootState, commit }) {
        const response = await api.list(rootState.session.token);
        if (!response.success) return response;
        commit('set', response.data);
        return response;
    },
    async createCategory ({ rootState, commit }, form) {
        const response = await api.create(rootState.session.token, form);
        if (!response.success) return response;
        commit('add', response.data);
        return response;
    },
    async updateCategory ({ rootState, commit }, id, form) {
        const response = await api.update(rootState.session.token, id, form);
        if (!response.success) return response;
        commit('update', response.data);
        return response;
    },
    async deleteCategory ({ rootState, commit }, id) {
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
