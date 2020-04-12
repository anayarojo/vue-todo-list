
const Helper = (function() {
    const _public = {};

    _public.handleError = function(context, response) {
        
        context.$notify.error({
            title: 'Error',
            duration: 5000,
            message: response.message,
        });

        switch(response.error) {
            case 'token_invalid':
            case 'token_expired':
            case 'token_not_found':
            case 'token_absent':
                context.$store.dispatch('session/logout', null, { root: true });
                context.$router.push({ name: 'Home' });
                break;
        }

        return false;
    };

    return _public;
})();

export default Helper;
