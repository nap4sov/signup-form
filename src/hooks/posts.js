import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../App';
import {
    POSTS,
    LIKE_POST,
    NEW_POST,
    DELETE_POST,
} from '../constants/queryKeys';
import {
    getAll,
    getDetails,
    likePost,
    createPost,
    deletePost,
    updatePost,
} from '../api/posts';

export const useGetAllPosts = (skip = '0') => {
    return useQuery([POSTS, skip], () => getAll(skip));
};

export const useGetDetailsById = id =>
    useQuery([POSTS, id], () => getDetails(id), {
        refetchOnWindowFocus: false,
    });

export const useLikePost = ({ id, skip }) =>
    useQuery([LIKE_POST], () => likePost(id), {
        enabled: false,
        onSuccess: () => queryClient.invalidateQueries([POSTS, skip]),
    });

export const useCreatePost = ({ postData, skip }) =>
    useQuery([NEW_POST], () => createPost(postData), {
        enabled: false,
        onSuccess: () => queryClient.invalidateQueries([POSTS, skip]),
    });

export const useDeletePost = ({ id, navigateHome }) =>
    useQuery([DELETE_POST, id], () => deletePost(id), {
        enabled: false,
        refetchOnWindowFocus: false,

        onSettled: () => navigateHome(),
    });

export const useUpdatePost = ({ id, update }) =>
    useQuery([POSTS, id], () => updatePost({ id, update }), {
        enabled: false,
        refetchOnWindowFocus: false,
        onSuccess: () => queryClient.invalidateQueries([POSTS, id]),
    });
