import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../App';
import { COMMENTS, COMMENT, MY_COMMENT } from '../constants/queryKeys';
import {
    getPostComments,
    createNewComment,
    deleteComment,
    likeComment,
} from '../api/comments';

export const useGetPostComments = postId => {
    return useQuery([COMMENTS, postId], () => getPostComments(postId));
};

export const useCreateNewComment = ({ postId, comment }) => {
    return useQuery(
        [MY_COMMENT, postId],
        () => createNewComment(postId, comment),
        {
            enabled: false,
            onSuccess: () => queryClient.invalidateQueries([COMMENTS, postId]),
        },
    );
};

export const useDeleteComment = ({ postId, commentId }) => {
    return useQuery([MY_COMMENT, commentId], () => deleteComment(commentId), {
        enabled: false,
        onSuccess: () => queryClient.invalidateQueries([COMMENTS, postId]),
    });
};

export const useLikeComment = ({ postId, commentId }) => {
    return useQuery([COMMENT, commentId], () => likeComment(commentId), {
        enabled: false,
        onSuccess: () => queryClient.invalidateQueries([COMMENTS, postId]),
    });
};
