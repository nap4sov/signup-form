import styled from 'styled-components';
import { CenteredContainer } from '../../styles';

const PageHeader = styled.header`
    background-color: white;
`;

const Container = styled(CenteredContainer)`
    display: flex;
    justify-content: space-between;
`;

export const Header = ({ children }) => {
    return (
        <PageHeader>
            <Container>{children}</Container>
        </PageHeader>
    );
};
