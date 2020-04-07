import { Authentication } from '@/shared/api';

const isLoggedIn = async (to, from, next) => {
    const user = await Authentication.getUser();
    if ((to.name == 'Login' || to.name == 'Register') && user != null) next({ name: 'Dashboard' });
    if ((to.name != 'Login' && to.name != 'Register') && user == null) next({ name: 'Login' });
    next();
};

export default isLoggedIn;
