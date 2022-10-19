import {
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// routing
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PageHeader } from './layout';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// selectors
import { userToken } from './redux/selectors';
// operations
import { getCurrentUser } from './redux/users/operations';
// layouts
import { LAYOUT_ROUTES } from './constants/routes';
// global styles
import { GlobalStyle } from './styles';
// error display
import { ToastContainer } from 'react-toastify';
import { showError } from './helpers/notifier';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
    queryCache: new QueryCache({
        onError: error => showError(error),
    }),
});

export const App = () => {
    const dispatch = useDispatch();
    const token = useSelector(userToken);

    useEffect(() => {
        if (!token) return;
        dispatch(getCurrentUser());
    }, [dispatch, token]);

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
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
