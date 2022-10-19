import { useDeletePost } from '../../../hooks/posts';
import { DeleteContainer } from '../styles';

export const DeleteButton = ({ postId, navigateHome }) => {
    const { refetch } = useDeletePost({
        id: postId,
        navigateHome,
    });

    return <DeleteContainer onClick={() => refetch()}>🗑</DeleteContainer>;
};
