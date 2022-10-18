import { useLikeComment } from '../../../hooks/comments';
import { LikeContainer } from './styles';

export const LikeButton = ({ postId, commentId }) => {
    const { refetch } = useLikeComment({ postId, commentId });

    return <LikeContainer onClick={() => refetch()}>👍</LikeContainer>;
};
