import styled from 'styled-components';
import { Section, CenteredContainer } from '../../styles';

const PostsSection = styled(Section)`
    background-color: rgba(0, 212, 255, 0.5);
`;

export const Container = ({ children }) => {
    return (
        <PostsSection>
            <CenteredContainer>{children}</CenteredContainer>
        </PostsSection>
    );
};
