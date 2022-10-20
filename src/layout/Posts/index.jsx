// hooks
import { useMemo, useState } from 'react';
import { usePagination } from '../../hooks/pagination';
import { useSelector } from 'react-redux';
// selectors
import { userEmail } from '../../redux/selectors';
// styled components
import { Container, AddButton } from './styles';
// components
import PostsList from '../../components/Posts/PostsList';
import PostDetails from '../../components/Posts/PostDetails';
import PaginationBar from '../../components/PaginationBar';
import { NewPost } from '../../components/Posts/NewPost';

const Posts = ({ all }) => {
    const [newPostOpen, setNewPostOpen] = useState(false);
    const { renderParams, skip, setSearchParams, totalPages } = usePagination();
    const userLoggedIn = useSelector(userEmail);

    const showAddButton = useMemo(
        () => userLoggedIn && !newPostOpen,
        [userLoggedIn, newPostOpen],
    );
    const showNewPost = useMemo(
        () => userLoggedIn && newPostOpen,
        [userLoggedIn, newPostOpen],
    );

    const handleClick = ({ target }) => {
        setSearchParams({ page: target.value });
    };

    return (
        <Container>
            {all ? (
                <>
                    {showNewPost && (
                        <NewPost setNewPostOpen={setNewPostOpen} skip={skip} />
                    )}
                    {showAddButton && (
                        <AddButton onClick={() => setNewPostOpen(true)}>
                            +
                        </AddButton>
                    )}

                    <PostsList />

                    {totalPages > 1 && (
                        <PaginationBar
                            renderParams={renderParams}
                            handleClick={handleClick}
                        />
                    )}
                </>
            ) : (
                <PostDetails />
            )}
        </Container>
    );
};

export default Posts;
