import { useDeleteComment } from '../../../hooks/comments';
import { DeleteContainer } from './styles';

export const DeleteButton = ({ commentId, postId }) => {
    const { refetch } = useDeleteComment({ commentId, postId });

    return <DeleteContainer onClick={() => refetch()}>🗑</DeleteContainer>;
};
