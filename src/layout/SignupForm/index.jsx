// hooks
import { useState } from 'react';
// complex components
import ButtonList from '../../components/ButtonList';
import RegistrationForm from '../../components/Forms/RegistrationForm';
import LoginForm from '../../components/Forms/LoginForm';
// styled components
import { FormContainer } from './styles';

const MainForm = () => {
    const [formType, setFormType] = useState('Register');

    const handleButtonClick = event => {
        setFormType(event.target.name);
    };

    return (
        <FormContainer>
            <ButtonList handleClick={handleButtonClick} formType={formType} />
            {formType === 'Register' ? <RegistrationForm /> : <LoginForm />}
        </FormContainer>
    );
};

export default MainForm;
