import { axios } from '../config';

export const getAll = async skip => {
    // const { data } = await axios.get(`/posts?skip=${skip}`);

    return (
        await axios.get(`/posts`, {
            params: { skip },
        })
    ).data;
};

export const getDetails = async id => {
    return (await axios.get(`/posts/${id}`)).data;
};

export const likePost = async id => (await axios.put(`/posts/like/${id}`)).data;

export const createPost = async postData =>
    (await axios.post('/posts', postData)).data;

export const deletePost = async id => (await axios.delete(`/posts/${id}`)).data;

export const updatePost = async ({ id, update }) =>
    (await axios.patch(`/posts/${id}`, update)).data;
