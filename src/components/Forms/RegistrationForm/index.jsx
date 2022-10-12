// hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// operations
import { registerUser } from '../../../redux/users/operations';
// selectors
import { userEmail } from '../../../redux/selectors';
// styled components
import { Form, Input, Label, Button, FormField } from '../styles.js';
// complex components
import SuccessNotifier from '../../SuccessNotifier';
// constants
import {
    REGISTRATION_FIELDS,
    REGISTRATION_INIT_STATE,
} from '../../../constants/formInfo';
// validation
import { validateRegistration } from '../../../helpers/formValidation';

const RegistrationForm = () => {
    // field state
    const [formData, setFormData] = useState(REGISTRATION_INIT_STATE);
    // form state
    const [errors, setErrors] = useState({});
    // dispatch instance
    const dispatch = useDispatch();

    const handleInputChange = ({ target }) =>
        setFormData({ ...formData, [target.name]: target.value });

    const handleSubmit = async event => {
        event.preventDefault();

        const { errorData, hasError } = validateRegistration(formData);
        setErrors(errorData);

        if (hasError) return;

        dispatch(registerUser(formData));
    };

    if (useSelector(userEmail)) return <SuccessNotifier />;

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

            <Button type="submit">Register</Button>
        </Form>
    );
};

export default RegistrationForm;
