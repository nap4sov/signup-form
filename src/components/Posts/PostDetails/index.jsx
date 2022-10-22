// hooks
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSearchParams } from '../../../hooks/pagination';
import { useNavigateHome } from '../../../hooks/navigation';
import { useGetDetailsById } from '../../../hooks/posts';
import { useSelector } from 'react-redux';
// selectors
import { user } from '../../../redux/selectors';
// styled components
import { Description, Title, Wrapper } from '../styles';
import { BasicButton } from '../../../styles';
// components
import { CommentsList } from '../../Comments/CommentsList';
import { DeleteButton } from './DeleteButton';
import { SaveButton } from './SaveButton';
import { EditableField } from '../../EditableField/EditableField';
// helpers
import { formatDate } from '../../../helpers/dateFormatter';
import { validatePostEdit } from '../../../helpers/validation';

const PostDetails = ({ id }) => {
    const { id: userId } = useSelector(user);
    const { id: urlId } = useParams();
    const params = useGetSearchParams();
    const navigateHome = useNavigateHome(params);

    const { data } = useGetDetailsById(id || urlId);
    const { fullText, title, postedBy, dateCreated, likes } = useMemo(
        () => (data ? data : {}),
        [data],
    );

    const [update, setUpdate] = useState({});
    const handleKeyUp = ({ target }) => {
        setUpdate({
            ...update,
            [target.id]: target.innerText,
        });
    };

    const authorizedEdit = useMemo(
        () => userId === postedBy,
        [userId, postedBy],
    );
    const validEdit = useMemo(() => validatePostEdit(update), [update]);

    if (id) return <Description>{fullText}</Description>;

    return (
        <Wrapper>
            {authorizedEdit ? (
                <>
                    <DeleteButton postId={urlId} navigateHome={navigateHome} />
                    {validEdit && (
                        <SaveButton
                            postId={urlId}
                            update={update}
                            setUpdate={setUpdate}
                        />
                    )}
                    <EditableField
                        value={title}
                        handleKeyUp={handleKeyUp}
                        id="title"
                        type="title"
                    />
                    <EditableField
                        value={fullText}
                        handleKeyUp={handleKeyUp}
                        id="fullText"
                    />
                </>
            ) : (
                <>
                    <Title disabled>{title}</Title>
                    <Description primary>{fullText}</Description>
                </>
            )}

            <Description>
                Posted by {postedBy ? postedBy : 'anonymous'} on{' '}
                {formatDate(dateCreated)}
            </Description>
            <Description primary>Total likes: {likes?.length}</Description>
            <BasicButton onClick={() => navigateHome()}>Back</BasicButton>
            <CommentsList postId={urlId} />
        </Wrapper>
    );
};

export default PostDetails;
