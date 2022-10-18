// hooks
import { useState } from 'react';
import { useCreatePost } from '../../../hooks/posts';
// styled components
import { Wrapper } from '../styles';
import { Form } from '../../Forms/styles';
import { SubmitButton, CloseButton } from './styles';
// constants
import { POST_FIELDS, POST_INIT_STATE } from '../../../constants/postInfo';

export const NewPost = ({ setNewPostOpen }) => {
    const [postData, setPostData] = useState(POST_INIT_STATE);
    const { refetch } = useCreatePost(postData);

    const handleInputChange = ({ target }) => {
        setPostData({ ...postData, [target.name]: target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        refetch();
        setPostData(POST_INIT_STATE);
        setNewPostOpen(false);
    };

    return (
        <Wrapper>
            <CloseButton onClick={() => setNewPostOpen(false)}>❌</CloseButton>
            <Form onSubmit={handleSubmit}>
                {POST_FIELDS.map(({ component, name, placeholder }) =>
                    component({
                        key: name,
                        name,
                        placeholder,
                        handleInputChange,
                        value: postData[name],
                    }),
                )}
                {postData.fullText.length > 20 && (
                    <SubmitButton>Create a post</SubmitButton>
                )}
            </Form>
        </Wrapper>
    );
};
