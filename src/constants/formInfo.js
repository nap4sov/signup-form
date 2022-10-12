export const REGISTRATION_FIELDS = {
    username: {
        type: 'text',
        label: 'Username',
    },
    email: {
        type: 'email',
        label: 'Email',
    },
    password: {
        type: 'password',
        label: 'Password',
    },
};

export const REGISTRATION_INIT_STATE = {
    username: '',
    email: '',
    password: '',
};

export const LOGIN_FIELDS = {
    email: {
        type: 'email',
        label: 'Email',
    },
    password: {
        type: 'password',
        label: 'Password',
    },
};

export const LOGIN_INIT_STATE = {
    email: '',
    password: '',
};
