import { createSearchParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const useNavigateHome = params => {
    const navigate = useNavigate();
    return () =>
        navigate({
            pathname: ROUTES.posts,
            search: '?' + createSearchParams(params),
        });
};

export const useNavigateToPost = (id, params) => {
    const navigate = useNavigate();
    return () =>
        navigate({
            pathname: `${ROUTES.posts}/${id}`,
            search: '?' + createSearchParams(params),
        });
};

export const useNavigateToSignup = () => {
    const navigate = useNavigate();
    return () => navigate(ROUTES.signup);
};
