import { axios } from '../config';

export const getAll = async () => {
    const { data } = await axios.get('/posts');
    return data;
};

export const getDetails = async id => {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
};
