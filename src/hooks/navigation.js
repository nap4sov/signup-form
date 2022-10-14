import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const useNavigateHome = () => {
    const navigate = useNavigate();
    return () => navigate(ROUTES.posts);
};

export const useNavigateToPost = id => {
    const navigate = useNavigate();
    return () => navigate(`${ROUTES.posts}/${id}`);
};
