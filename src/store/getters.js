
const getters = {
    isLogged: state => state.token != null && state.user != null,
    completedTasks: state => state.tasks.filter(task => task.completed === true),
    pendingTasks: state => state.tasks.filter(task => task.completed === false)
};

export default getters;
