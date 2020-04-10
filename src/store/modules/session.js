import keys from '@/store/keys';
import Storage from '@/shared/storage';
import Authentication from '@/api/authentication';

const state = {
    token: Storage.get(keys.TOKEN),
    user: Storage.get(keys.USER, true),
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user) {
        state.user = user;
    },
};

const actions = {
    async register({ commit }, form) {
        const response = await Authentication.register(form);
        if (!response.success) return response;
        commit('setToken', response.token);
        commit('setUser', response.user);
        return response;
    },
    async login({ commit }, form) {
        const response = await Authentication.login(form);
        if (!response.success) return response;
        commit('setToken', response.token);
        commit('setUser', response.user);
        return response;
    },
    async getUser({ commit }) {
        if (state.token === null) return false;
        const response = await Authentication.getUser(state.token);
        if (!response.success) {
            commit('setToken', null);
            commit('setUser', null);
            return response;
        };
        commit('setToken', response.token);
        commit('setUser', response.user);
        return response;
    },
    logout({ commit }) {
        commit('setToken', null);
        commit('setUser', null);
    },
};

const getters = {
    isLogged: state => state.token != null && state.user != null,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

