import { usernameRegex, emailRegex } from '../constants/regex';
import { errorMessages } from '../constants/statusMessages';
import { PROFILE_FIELDS } from '../constants/profileInfo';

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

export const validatePostEdit = update => {
    if (Object.keys(update).length === 0) return false;
    const validTitle =
        typeof update.title === 'undefined' || update.title.length >= 5;
    const validText =
        typeof update.fullText === 'undefined' || update.fullText.length >= 20;
    return validTitle && validText;
};

export const validateComment = comment => comment.trim().length >= 3;

export const validateProfileEdit = fullData =>
    PROFILE_FIELDS.reduce((acc, { key, editable }) => {
        if (!editable) return acc;

        return { ...acc, [key]: fullData[key] };
    }, {});
