import keys from '@/shared/keys';
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
        if (!response.data || response.data.error) return false;
        commit('setToken', response.data.token);
        commit('setUser', response.data.user);
        return true;
    },
    async login({ commit }, form) {
        const response = await Authentication.login(form);
        if (!response.data || response.data.error) return false;
        commit('setToken', response.data.token);
        commit('setUser', response.data.user);
        return true;
    },
    async getUser({ commit }) {
        if (state.token === null) return false;
        const response = await Authentication.getUser(state.token);
        if (!response.data || response.data.error || !response.data.user) {
            commit('setToken', null);
            commit('setUser', null);
            return false;
        }
        commit('setToken', response.data.token);
        commit('setUser', response.data.user);
        return true;
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

