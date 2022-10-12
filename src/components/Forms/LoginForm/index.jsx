// hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// operations
import { loginUser } from '../../../redux/users/operations';
// selectors
import { userToken } from '../../../redux/selectors';
// styled components
import { Form, Input, Label, Button, FormField } from '../styles.js';
// complex components
import SuccessNotifier from '../../SuccessNotifier';
// constants
import { LOGIN_FIELDS, LOGIN_INIT_STATE } from '../../../constants/formInfo';
// validation
import { validateLogin } from '../../../helpers/formValidation';

const LoginForm = () => {
    // field state
    const [formData, setFormData] = useState(LOGIN_INIT_STATE);
    // form state
    const [errors, setErrors] = useState({});
    // dispatch instance
    const dispatch = useDispatch();

    const handleInputChange = ({ target }) =>
        setFormData({ ...formData, [target.name]: target.value });

    const handleSubmit = async event => {
        event.preventDefault();

        const { errorData, hasError } = validateLogin(formData);
        setErrors(errorData);

        if (hasError) return;

        dispatch(loginUser(formData));
    };

    if (useSelector(userToken)) return <SuccessNotifier />;

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

            <Button type="submit" primary>
                Log In
            </Button>
        </Form>
    );
};

export default LoginForm;
