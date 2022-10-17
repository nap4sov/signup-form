import { axios } from '../config';

export const getAll = async skip => {
    const { data } = await axios.get(`/posts?skip=${skip}`);
    return data;
};

export const getDetails = async id => {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
};
