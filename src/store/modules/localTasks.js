import keys from '@/store/keys';
import Guid from '@/shared/guid';
import Storage from '@/shared/storage';

const state = {
    all: Storage.get(keys.TASKS, true, '[]'),
};

const mutations = {
    addTask(state, task) {
        state.all.push(task);
    },
    updateTask(state, task) {
        state.all.forEach((element, index) => {
            if (element.uuid === task.uuid) {
                state.all[index] = task;
            }
        });
    },
    deleteTask(state, task) {
        state.all.forEach((element, index) => {
            if (element.uuid === task.uuid) {
                state.all.splice(index, 1);
            }
        });
    },
};

const actions = {
    addTask ({ commit }, description) {
        commit('addTask', {
            id: Guid.get(),
            description: description,
            completed: false,
        });
    },
    updateTask ({ commit }, task) {
        commit('updateTask', task);
    },
    deleteTask ({ commit }, task) {
        commit('deleteTask', task);
    },
};

const getters = {
    completedTasks: state => state.all.filter(task => task.completed === true),
    pendingTasks: state => state.all.filter(task => task.completed === false)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
