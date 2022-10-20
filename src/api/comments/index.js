import { axios } from '../config';

export const getPostComments = async postId =>
    (await axios.get(`/comments/post/${postId}`)).data;

export const createNewComment = async (postId, comment) =>
    (
        await axios.post(`/comments/post/${postId}`, {
            text: comment,
        })
    ).data;

export const deleteComment = async commentId =>
    (await axios.delete(`/comments/${commentId}`)).data;

export const likeComment = async commentId =>
    (await axios.put(`/comments/like/${commentId}`)).data;

export const editComment = async ({ commentId, comment }) =>
    (await axios.patch(`/comments/${commentId}`, { text: comment })).data;
