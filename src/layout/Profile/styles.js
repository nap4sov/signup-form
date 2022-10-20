import styled from 'styled-components';
import { Section, CenteredContainer } from '../../styles';

const ProfileSection = styled(Section)`
    position: relative;
    height: 100vh;
    background-color: rgba(0, 212, 255, 0.5);
    padding: 110px 0 40px 0;
`;

export const Container = ({ children }) => {
    return (
        <ProfileSection>
            <CenteredContainer>{children}</CenteredContainer>
        </ProfileSection>
    );
};
