import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// routing
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PageHeader } from './layout';
// hooks
import { useSelector } from 'react-redux';
// selectors
import { errorMessage } from './redux/selectors';
// layouts
import { LAYOUT_ROUTES } from './constants/routes';
// error display
import { ToastContainer, toast } from 'react-toastify';

const queryClient = new QueryClient();

const App = () => {
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

export default App;
