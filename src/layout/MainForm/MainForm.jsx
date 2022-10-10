// hooks
import { useState } from 'react';

// complex components
import ButtonList from '../../components/ButtonList';
import RegistrationForm from '../../components/RegistrationForm';
import LoginForm from '../../components/LoginForm';

// styled components
import MainHeading from '../../styled/MainHeading';
import FormContainer from '../../styled/FormContainer';

const MainForm = () => {
    const [formType, setFormType] = useState('Register');

    const handleButtonClick = event => {
        setFormType(event.target.name);
    };

    return (
        <FormContainer>
            <MainHeading>{formType} Form</MainHeading>
            <ButtonList handleClick={handleButtonClick} formType={formType} />
            {formType === 'Register' ? <RegistrationForm /> : <LoginForm />}
        </FormContainer>
    );
};

export default MainForm;
