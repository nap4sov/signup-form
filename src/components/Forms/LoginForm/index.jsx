// hooks
import { useState } from 'react';
// styled components
import { Form, Input, Label, Button, FormField } from '../styles.js';
// complex components
import SuccessNotifier from '../../SuccessNotifier';
// constants
import { LOGIN_FIELDS, LOGIN_INIT_STATE } from '../../../constants/formInfo';
// validation
import { validateLogin, loginFailed } from '../../../helpers/formValidation';

const LoginForm = () => {
    // field state
    const [formData, setFormData] = useState(LOGIN_INIT_STATE);
    // form state
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleInputChange = ({ target }) =>
        setFormData({ ...formData, [target.name]: target.value });

    const handleSubmit = event => {
        event.preventDefault();

        const validationErrors = validateLogin(formData);
        setErrors(validationErrors);

        if (loginFailed(validationErrors)) return;

        setSuccess(true);
    };

    if (success) return <SuccessNotifier />;

    return (
        <Form onSubmit={handleSubmit}>
            {Object.keys(formData).map(key => (
                <FormField key={key}>
                    <Input
                        type={LOGIN_FIELDS[key].type}
                        name={key}
                        id={key}
                        placeholder="_"
                        onChange={handleInputChange}
                        value={formData[key]}
                        invalid={errors[key]}
                    />
                    <Label htmlFor={key} invalid={errors[key]}>
                        {errors[key] ? errors[key] : LOGIN_FIELDS[key].label}
                    </Label>
                </FormField>
            ))}

            <Button type="submit" primary bottomed>
                Log In
            </Button>
        </Form>
    );
};

export default LoginForm;
