// hooks
import { useState } from 'react';
import { useNavigateToPost } from '../../../hooks/navigation';
import { useLikePost } from '../../../hooks/posts';
import { useSelector } from 'react-redux';
// selectors
import { userEmail } from '../../../redux/selectors';
// styled components
import { Wrapper, Title, Description, InfoBar } from '../styles';
import { BasicButton } from '../../../styles';
// components
import PostDetails from '../PostDetails';
import { CommentsList } from '../../Comments/CommentsList';
import { PostSkeleton } from '../PostSkeleton';
// helpers
import { formatDate } from '../../../helpers/dateFormatter';

const PostsItem = ({
    id,
    title,
    date,
    description,
    likes,
    isLoading,
    params,
}) => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const [commentsExpanded, setCommentsExpanded] = useState(false);
    const navigateToPost = useNavigateToPost(id, params);
    const { refetch } = useLikePost({ id, skip: params.skip });
    const email = useSelector(userEmail);

    if (isLoading) return <PostSkeleton />;

    return (
        <Wrapper>
            <Title onClick={() => navigateToPost()}>{title}</Title>
            <Description primary>{description}</Description>

            <InfoBar>
                <Description>{formatDate(date)}</Description>
                <Description primary onClick={() => refetch()} enabled={email}>
                    👍 {likes}
                </Description>
            </InfoBar>
            {descriptionExpanded && <PostDetails id={id} />}
            <InfoBar>
                <BasicButton
                    onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                >
                    Show {descriptionExpanded ? 'less' : 'more'}
                </BasicButton>
                <BasicButton
                    onClick={() => setCommentsExpanded(!commentsExpanded)}
                >
                    Comments
                </BasicButton>
            </InfoBar>
            {commentsExpanded && <CommentsList postId={id} />}
        </Wrapper>
    );
};

export default PostsItem;
