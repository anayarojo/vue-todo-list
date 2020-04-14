export const errors = {
    token_invalid: 'El token es invalido.',
    token_expired: 'El token ya expiró.',
    token_not_found: 'El token no se ha encontrado.',
    token_absent: 'El token no se ha encontrado.',
    invalid_credentials: 'Las credenciales ingresadas son invalidas.',
    could_not_create_token: 'No fue posible crear el token.',
    user_not_found: 'No se encontró al usuario.',
};

export const getConfig = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token != null ? token : ''}`
        }
    };
};

export const handle = (resp) => {
    const success = resp.status == 200 && resp.data != null && resp.data.error == null;
    const response = typeof resp.data !== 'string' ? resp.data : { view: resp.data };

    response.success = success;
    if (!response.success) {
        response.message = response.error ? errors[response.error] : 'Algo salió mal.';
    }

    return response;
};
