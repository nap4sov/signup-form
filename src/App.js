// hooks
import { useSelector } from 'react-redux';
// selectors
import { errorMessage } from './redux/selectors';
// layouts
import Form from './layout/MainForm/MainForm';
// error display
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const error = useSelector(errorMessage);
    if (error) toast.error(error);

    return (
        <>
            <Form />
            <ToastContainer />
        </>
    );
}

export default App;
