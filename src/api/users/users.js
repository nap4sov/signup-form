import { axios } from '../config';

export const register = async userData => {
    try {
        const { data } = await axios.post('/users', userData);

        return data;
    } catch ({ response }) {
        return response.data;
    }
};

export const getProfileInfo = async id =>
    (await axios.get(`/users/${id}`)).data;

export const editProfileInfo = async ({ id, editedData }) =>
    (await axios.patch(`/users/${id}`, editedData)).data;
