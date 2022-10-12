// styled components
import { Button, Container } from './styles';

const ButtonList = ({ handleClick, formType }) => {
    const currentHighlightedButton = formType === 'Register';

    return (
        <Container>
            <Button
                onClick={handleClick}
                type="button"
                name="Register"
                primary={currentHighlightedButton}
            >
                Register
            </Button>
            <Button
                onClick={handleClick}
                type="button"
                name="Log In"
                primary={!currentHighlightedButton}
            >
                Log In
            </Button>
        </Container>
    );
};

export default ButtonList;
