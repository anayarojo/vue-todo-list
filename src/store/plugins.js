import keys from '@/store/keys';
import Storage from '@/shared/storage';

const localStoragePlugin = (store) => {
    store.subscribe((mutation, state) => {

        switch(mutation.type) {
            case 'session/setToken':
                Storage.set(keys.TOKEN, state.session.token);
                break;
            case 'session/setUser':
                Storage.set(keys.USER, state.session.user, true);
                break;
            case 'localTasks/addTask':
            case 'localTasks/updateTask':
            case 'localTasks/deleteTask':
                Storage.set(keys.TASKS, state.localTasks.all, true);
                break;
        }

        // console.log('mutation:', mutation);
        // console.log('state:', state);

    });
};

export default [localStoragePlugin];
