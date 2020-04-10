
const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user) {
        state.user = user;
    },
    addTask(state, task) {
        state.tasks.push(task);
    },
    updateTask(state, task) {
        state.tasks.forEach((element, index) => {
            if (element.uuid === task.uuid) {
                state.tasks[index] = task;
            }
        });
    },
    deleteTask(state, task) {
        state.tasks.forEach((element, index) => {
            if (element.uuid === task.uuid) {
                state.tasks.splice(index, 1);
            }
        });
    },
};

export default mutations;
