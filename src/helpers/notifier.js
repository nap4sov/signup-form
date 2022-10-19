import { toast } from 'react-toastify';

export const showError = error => {
    console.log(Array.isArray(error.response.data.error));
    const errorMessage = Array.isArray(error.response.data.error)
        ? error.response.data.error[0].message
        : error.response.data.error;
    toast.error(errorMessage);
};

export const showSuccess = message => toast.success(message);
