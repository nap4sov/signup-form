import { axios } from '../config';

export const register = async userData => {
    try {
        const { data } = await axios.post('/users', userData);

        return data;
    } catch (error) {
        return error;
    }
};
