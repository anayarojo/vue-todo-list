import keys from '@/store/keys';
import Storage from '@/shared/storage';

const state = {
    token: Storage.get(keys.TOKEN),
    user: Storage.get(keys.USER, true),
    tasks: Storage.get(keys.TASKS, true, '[]'),
    lists: Storage.get(keys.LISTS, true, '[]'),
    categories: Storage.get(keys.CATEGORIES, true, '[]'),
};

export default state;
