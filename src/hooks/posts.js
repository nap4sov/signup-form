import { useQuery } from '@tanstack/react-query';
import { POSTS } from '../constants/queryKeys';
import { getAll, getDetails } from '../api/posts';

export const useGetAllPosts = () => useQuery([POSTS], getAll);

export const useGetDetailsById = id =>
    useQuery([POSTS, id], () => getDetails(id));
