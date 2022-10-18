import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// routing
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PageHeader } from './layout';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// selectors
import { errorMessage, userToken } from './redux/selectors';
// operations
import { getCurrentUser } from './redux/users/operations';
// layouts
import { LAYOUT_ROUTES } from './constants/routes';
// error display
import { ToastContainer, toast } from 'react-toastify';

export const queryClient = new QueryClient();

export const App = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);

    useEffect(() => {
        if (!token) return;
        dispatch(getCurrentUser());
    }, [dispatch, token]);

    const error = useSelector(errorMessage);
    if (error) toast.error(error);

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    {Object.keys(LAYOUT_ROUTES).map(route => (
                        <Route
                            key={route}
                            path={LAYOUT_ROUTES[route].path}
                            element={LAYOUT_ROUTES[route].element()}
                            exact
                        />
                    ))}
                </Routes>
            </BrowserRouter>

            <ToastContainer />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};
