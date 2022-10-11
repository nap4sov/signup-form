// hooks
import { useState } from 'react';
import { useLocalStorage } from '../../../hooks';
// styled components
import { Form, Input, Label, Button, FormField } from '../styles.js';
// complex components
import SuccessNotifier from '../../SuccessNotifier';
// constants
import {
    REGISTRATION_FIELDS,
    REGISTRATION_INIT_STATE,
} from '../../../constants/formInfo';
import { errorMessages } from '../../../constants/statusMessages';
// validation
import {
    validateRegistration,
    registrationFailed,
} from '../../../helpers/formValidation';

const RegistrationForm = () => {
    // field state
    const [formData, setFormData] = useState(REGISTRATION_INIT_STATE);
    // form state
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    // localstorage interaction
    const [user, setUser] = useLocalStorage('USER');

    const handleInputChange = ({ target }) =>
        setFormData({ ...formData, [target.name]: target.value });

    const handleSubmit = event => {
        event.preventDefault();

        const validationErrors = validateRegistration(formData);
        setErrors(validationErrors);

        if (registrationFailed(validationErrors)) return;

        if (formData.email === user.email) {
            validationErrors.email = errorMessages.userExists;
            setErrors(validationErrors);
            return;
        }

        setUser(formData);
        setSuccess(true);
    };

    if (success) return <SuccessNotifier />;

    return (
        <Form onSubmit={handleSubmit}>
            {Object.keys(formData).map(key => (
                <FormField key={key}>
                    <Input
                        type={REGISTRATION_FIELDS[key].type}
                        name={key}
                        id={key}
                        placeholder="_"
                        onChange={handleInputChange}
                        value={formData[key]}
                        invalid={errors[key]}
                    />
                    <Label htmlFor={key} invalid={errors[key]}>
                        {errors[key]
                            ? [errors[key]]
                            : REGISTRATION_FIELDS[key].label}
                    </Label>
                </FormField>
            ))}

            <Button type="submit" bottomed>
                Register
            </Button>
        </Form>
    );
};

export default RegistrationForm;
