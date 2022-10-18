// hooks
import { useMemo, useState } from 'react';
import { useCreateNewComment } from '../../../hooks/comments';
// styled components
import { Form, TextArea, SubmitButton } from './styles';

export const CommentField = ({ postId }) => {
    const [comment, setComment] = useState('');
    const { refetch } = useCreateNewComment({ postId, comment });
    const validComment = useMemo(() => comment.trim().length >= 3, [comment]);

    const handleInputChange = ({ target }) => {
        setComment(target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        refetch();
        setComment('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <TextArea
                name=""
                id=""
                placeholder="Say something"
                value={comment}
                onChange={handleInputChange}
            ></TextArea>
            {validComment && <SubmitButton>+</SubmitButton>}
        </Form>
    );
};
