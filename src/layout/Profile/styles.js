import styled from 'styled-components';
import { Section, CenteredContainer } from '../../styles';

const ProfileSection = styled(Section)`
    background-color: rgba(0, 212, 255, 0.5);
`;

export const Container = ({ children }) => {
    return (
        <ProfileSection>
            <CenteredContainer>{children}</CenteredContainer>
        </ProfileSection>
    );
};
