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

export const AddButton = styled.button`
    display: block;
    margin: 0 auto 20px auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ececec;
    color: #ececec;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;

    transition: transform 300ms ease;

    &:hover {
        transform: scale(1.1);
    }
`;
