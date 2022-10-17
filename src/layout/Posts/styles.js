import styled from 'styled-components';
import { Section, CenteredContainer } from '../../styles';

const PostsSection = styled(Section)`
    background-color: rgba(9, 121, 87, 0.5);
`;

export const Container = ({ children }) => {
    return (
        <PostsSection>
            <CenteredContainer>{children}</CenteredContainer>
        </PostsSection>
    );
};
