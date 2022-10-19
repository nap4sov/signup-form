// hooks
import { useGetPostComments } from '../../../hooks/comments';
import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
// styled components
import { Wrapper, InfoBar, Info, Text, Likes } from './styles';
// components
import { CommentField } from '../CommentField';
import { DeleteButton } from './DeleteButton';
import { LikeButton } from './LikeButton';
import { SaveButton } from './SaveButton';
import { EditableField } from '../../EditableField/EditableField';
// selectors
import { user } from '../../../redux/selectors';
// helpers
import { formatDate } from '../../../helpers/dateFormatter';
import { validateComment } from '../../../helpers/validation.js';

export const CommentsList = ({ postId }) => {
    const { email, id } = useSelector(user);
    const { data } = useGetPostComments(postId);
    const [editedText, setEditedText] = useState('');
    const handleInputChange = ({ target }) => {
        setEditedText(target.innerText);
    };
    const validText = useMemo(() => validateComment(editedText), [editedText]);

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
                    {likes.length > 0 && <Likes>Likes: {likes.length}</Likes>}

                    {id === commentedBy ? (
                        <>
                            <EditableField
                                value={text}
                                handleInputChange={handleInputChange}
                                type="comment"
                                id="text"
                            />
                            <DeleteButton commentId={_id} postId={postId} />
                            {validText && (
                                <SaveButton
                                    commentId={_id}
                                    postId={postId}
                                    text={editedText}
                                    setEditedText={setEditedText}
                                />
                            )}
                        </>
                    ) : (
                        <Text>{text}</Text>
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
