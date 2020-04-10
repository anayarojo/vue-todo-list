import store from '../store';

const isLoggedIn = async (to, from, next) => {
    const logged = store.getters['session/isLogged'];
    if ((to.name == 'Login' || to.name == 'Register') && logged) next({ name: 'Dashboard' });
    if ((to.name != 'Login' && to.name != 'Register') && !logged) next({ name: 'Login' });
    next();
};

export default isLoggedIn;
