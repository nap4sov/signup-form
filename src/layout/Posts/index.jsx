// hooks
import { usePagination } from '../../hooks/pagination';
// styled components
import { Container } from './styles';
// components
import PostsList from '../../components/Posts/PostsList';
import PostDetails from '../../components/Posts/PostDetails';
import PaginationBar from '../../components/PaginationBar';

const Posts = ({ all }) => {
    const { renderParams, searchParams, setSearchParams, totalPages } =
        usePagination();

    const handleClick = ({ target }) => {
        setSearchParams({ ...searchParams, page: target.value });
    };

    return (
        <Container>
            {all ? (
                <>
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
