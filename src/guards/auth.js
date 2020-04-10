import store from '../store';

const auth = ({ next, to, from }) => {
    const logged = store.getters['session/isLogged'];

    if ((to.name === from.name)) return;

    if ((to.name == 'Login' || to.name == 'Register') && logged) {
        return next({ name: 'Dashboard' });
    }

    if ((to.name != 'Login' && to.name != 'Register') && !logged) {
        return next({ name: 'Login' });
    }

    return next();
};

export default auth;
