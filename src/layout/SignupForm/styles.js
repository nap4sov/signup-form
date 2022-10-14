import styled from 'styled-components';
import { BasicButton, Section, CenteredContainer } from '../../styles';

export const Button = styled(BasicButton)`
    flex-grow: 2;
`;

const FormWrapper = styled.div`
    width: 440px;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
    margin: 0 auto;
`;

export const FormHeading = styled.h1`
    margin-top: 0;
    margin-bottom: 30px;
    text-align: center;
`;

export const FormContainer = ({ children }) => {
    return (
        <Section>
            <CenteredContainer>
                <FormWrapper>{children}</FormWrapper>
            </CenteredContainer>
        </Section>
    );
};
