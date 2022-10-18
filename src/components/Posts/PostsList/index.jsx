// hooks
import { useMemo } from 'react';
import { useGetSearchParams } from '../../../hooks/pagination';
import { useGetAllPosts } from '../../../hooks/posts';
// complex components
import PostsItem from '../PostsItem';
// helpers
import { showError } from '../../../helpers/notifier';

const PostsList = () => {
    const params = useGetSearchParams();
    const { data, error, isFetching } = useGetAllPosts(params.skip);
    const posts = useMemo(() => (data ? data.data : []), [data]);

    if (error) showError(error.message);

    return (
        <>
            {posts.map(({ title, dateCreated, description, likes, _id }) => (
                <PostsItem
                    key={_id}
                    id={_id}
                    title={title}
                    date={dateCreated}
                    description={description}
                    likes={likes.length}
                    isFetching={isFetching}
                    params={params}
                />
            ))}
        </>
    );
};

export default PostsList;
