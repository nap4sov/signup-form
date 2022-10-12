import { axios, authToken } from '../config';

export const login = async userData => {
    try {
        const { data } = await axios.post('/auth', userData);

        authToken.set(data.token);
        return data.token;
    } catch ({ response }) {
        return response.data;
    }
};

export const getCurrent = async () => {
    try {
        const { data } = await axios.get('/auth/user');
        return data;
    } catch ({ response }) {
        return response.data;
    }
};
