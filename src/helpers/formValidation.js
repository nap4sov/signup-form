import { usernameRegex, emailRegex } from '../constants/regex';
import { errorMessages } from '../constants/statusMessages';

// username must consist of letters and spaces only
// email must be a valid email
// password must be 6 symbols or more

export const validateLogin = ({ email, password }) => {
    const errorData = {
        email: emailRegex.test(email) ? null : errorMessages.invalidEmail,
        password: password?.length >= 6 ? null : errorMessages.invalidPassword,
    };

    return {
        errorData,
        hasError: errorData?.email || errorData?.password,
    };
};

export const validateRegistration = ({ name, email, password }) => {
    const errorData = {
        name:
            name?.length > 1 && usernameRegex.test(name)
                ? null
                : errorMessages.invalidUsername,
        email: emailRegex.test(email) ? null : errorMessages.invalidEmail,
        password: password?.length >= 6 ? null : errorMessages.invalidPassword,
    };
    return {
        errorData,
        hasError: errorData?.name || errorData?.email || errorData?.password,
    };
};
