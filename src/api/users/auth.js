import { axios, authToken } from '../config';

export const login = async userData => {
    try {
        const { data } = await axios.post('/auth', userData);

        authToken.set(data.token);
        return data.token;
    } catch (error) {
        return error;
    }
};

export const getCurrent = async () => {
    try {
        const { data } = await axios.get('/auth/user');
        return data;
    } catch (error) {
        return error;
    }
};
