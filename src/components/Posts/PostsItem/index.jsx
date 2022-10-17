// hooks
import { useState } from 'react';
import { useNavigateToPost } from '../../../hooks/navigation';
// styled components
import { Wrapper, Title, Description, InfoBar } from '../styles';
import { BasicButton } from '../../../styles';
// components
import PostDetails from '../PostDetails';
import { PostSkeleton } from '../PostSkeleton';
// helpers
import { formatDate } from '../../../helpers/dateFormatter';

const PostsItem = ({
    id,
    title,
    date,
    description,
    likes,
    isFetching,
    params,
}) => {
    const [expanded, setExpanded] = useState(false);
    const navigateToPost = useNavigateToPost(id, params);

    if (isFetching) return <PostSkeleton />;

    return (
        <Wrapper>
            <Title onClick={() => navigateToPost()}>{title}</Title>
            <Description primary>{description}</Description>

            <InfoBar>
                <Description>{formatDate(date)}</Description>
                <Description primary>👍 {likes}</Description>
            </InfoBar>
            {expanded && <PostDetails id={id} />}
            <InfoBar>
                <BasicButton onClick={() => setExpanded(!expanded)}>
                    Show {expanded ? 'less' : 'more'}
                </BasicButton>
                <BasicButton>Comments</BasicButton>
            </InfoBar>
        </Wrapper>
    );
};

export default PostsItem;
