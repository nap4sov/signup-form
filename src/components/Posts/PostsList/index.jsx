// hooks
import { useMemo } from 'react';
import { useGetAllPosts } from '../../../hooks/posts';
// complex components
import PostsItem from '../PostsItem';
// helpers
import { showError } from '../../../helpers/notifier';

const PostsList = () => {
    const { data, error, isLoading } = useGetAllPosts();
    const posts = useMemo(() => (data ? data.data : []), [data]);

    if (error) showError(error.message);
    if (isLoading) return <h1>Loading...</h1>;

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
                />
            ))}
        </>
    );
};

export default PostsList;
