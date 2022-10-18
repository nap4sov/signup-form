// hooks
import { useGetPostComments } from '../../../hooks/comments';
import { useSelector } from 'react-redux';
// styled components
import { Wrapper, InfoBar, Info, Text, Likes } from './styles';
// components
import { CommentField } from '../CommentField';
import { DeleteButton } from './DeleteButton';
import { LikeButton } from './LikeButton';
// selectors
import { user } from '../../../redux/selectors';
// helpers
import { formatDate } from '../../../helpers/dateFormatter';

export const CommentsList = ({ postId }) => {
    const { email, id } = useSelector(user);
    const { data } = useGetPostComments(postId);

    const comments = data?.slice(data.length - 10).reverse();

    return (
        <>
            {email && <CommentField postId={postId} />}
            {comments?.map(({ commentedBy, dateCreated, likes, text, _id }) => (
                <Wrapper key={_id}>
                    <InfoBar>
                        <Info>by {commentedBy}</Info>
                        <Info>{formatDate(dateCreated)}</Info>
                    </InfoBar>
                    <Text>{text}</Text>
                    {likes.length > 0 && <Likes>Likes: {likes.length}</Likes>}
                    {id === commentedBy && (
                        <DeleteButton commentId={_id} postId={postId} />
                    )}
                    {email && (
                        <LikeButton commentId={_id} postId={postId}>
                            👍
                        </LikeButton>
                    )}
                </Wrapper>
            ))}
        </>
    );
};
