import keys from '@/store/keys';
import Storage from '@/shared/storage';

const localStoragePlugin = (store) => {
    store.subscribe((mutation, state) => {
        switch(mutation.type) {
            case 'setToken':
                Storage.set(keys.TOKEB, state.token);
                break;
            case 'setUser':
                Storage.set(keys.USER, state.user, true);
                break;
            case 'addTask':
            case 'updateTask':
            case 'deleteTask':
                Storage.set(keys.TASKS, state.tasks, true);
                break;
        }
    });
};

export default [localStoragePlugin];
