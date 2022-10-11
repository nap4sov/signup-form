import { usernameRegex, emailRegex } from '../constants/regex';
import { errorMessages } from '../constants/statusMessages';

// username must consist of letters and spaces only
// email must be a valid email
// password must be 6 symbols or more

export const validateLogin = ({ email, password }) => {
    console.log(email, password);
    return {
        email: emailRegex.test(email) ? null : errorMessages.invalidEmail,
        password: password?.length >= 6 ? null : errorMessages.invalidPassword,
    };
};

export const validateRegistration = ({ username, email, password }) => {
    return {
        username: usernameRegex.test(username)
            ? null
            : errorMessages.invalidUsername,
        email: emailRegex.test(email) ? null : errorMessages.invalidEmail,
        password: password?.length >= 6 ? null : errorMessages.invalidPassword,
    };
};

export const loginFailed = errors => errors?.email || errors?.password;

export const registrationFailed = errors =>
    errors?.username || errors?.email || errors?.password;
