import { useQuery } from '@tanstack/react-query';
import { POSTS } from '../constants/queryKeys';
import { getAll, getDetails } from '../api/posts';

export const useGetAllPosts = (skip = '0') => {
    return useQuery([POSTS, skip], () => getAll(skip), {
        keepPreviousData: true,
    });
};

export const useGetDetailsById = id =>
    useQuery([POSTS, id], () => getDetails(id));
