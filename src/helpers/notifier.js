import { toast } from 'react-toastify';

export const showError = error => {
    const errorMessage = Array.isArray(error.response.data.error)
        ? error.response.data.error[0].message
        : error.response.data.error;
    toast.error(errorMessage);
};

export const showSuccess = message => toast.success(message);
