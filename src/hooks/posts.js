import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../App';
import { POSTS, LIKE_POST, NEW_POST } from '../constants/queryKeys';
import { getAll, getDetails, likePost, createPost } from '../api/posts';

export const useGetAllPosts = (skip = '0') => {
    return useQuery([POSTS, skip], () => getAll(skip), {
        keepPreviousData: true,
    });
};

export const useGetDetailsById = id =>
    useQuery([POSTS, id], () => getDetails(id));

export const useLikePost = ({ id, skip }) =>
    useQuery([LIKE_POST], () => likePost(id), {
        enabled: false,
        onSuccess: () => queryClient.invalidateQueries([POSTS, skip]),
    });

export const useCreatePost = postData =>
    useQuery([NEW_POST], () => createPost(postData), {
        enabled: false,
    });
