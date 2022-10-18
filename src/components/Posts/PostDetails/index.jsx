// hooks
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSearchParams } from '../../../hooks/pagination';
import { useNavigateHome } from '../../../hooks/navigation';
import { useGetDetailsById } from '../../../hooks/posts';
// styled components
import { Description, Title, Wrapper } from '../styles';
import { BasicButton } from '../../../styles';
// components
import { CommentsList } from '../../Comments/CommentsList';
// helpers
import { formatDate } from '../../../helpers/dateFormatter';
import { showError } from '../../../helpers/notifier';

const PostDetails = ({ id }) => {
    const { id: urlId } = useParams();
    const params = useGetSearchParams();

    const { data, error } = useGetDetailsById(id || urlId);
    const { fullText, title, postedBy, dateCreated, likes } = useMemo(
        () => (data ? data : {}),
        [data],
    );
    const navigateHome = useNavigateHome(params);

    if (error) showError(error.message);
    if (id) return <Description>{fullText}</Description>;

    return (
        <Wrapper>
            <Title disabled>{title}</Title>
            <Description primary>{fullText}</Description>
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
