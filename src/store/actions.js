
const actions = {
    setToken ({ commit }, token) {
        commit('setToken', token);
    },
    setUser ({ commit }, user) {
        commit('setUser', user);
    },
    addTask ({ commit }, task) {
        commit('addTask', task);
    },
    updateTask ({ commit }, task) {
        commit('updateTask', task);
    },
    deleteTask ({ commit }, task) {
        commit('deleteTask', task);
    },
};

export default actions;
