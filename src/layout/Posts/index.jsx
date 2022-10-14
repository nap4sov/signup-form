// styled components
import { Container } from './styles';
// components
import PostsList from '../../components/Posts/PostsList';
import PostDetails from '../../components/Posts/PostDetails';

const Posts = ({ all }) => {
    return <Container>{all ? <PostsList /> : <PostDetails />}</Container>;
};

export default Posts;
