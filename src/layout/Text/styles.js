import { Section, CenteredContainer } from '../../styles';

export const Container = ({ children }) => {
    return (
        <Section>
            <CenteredContainer>{children}</CenteredContainer>
        </Section>
    );
};
