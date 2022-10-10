// styled components
import FlexContainer from '../../styled/FlexContainer';
import Button from '../../styled/Button';

const ButtonList = ({ handleClick, formType }) => {
    const currentHighlightedButton = formType === 'Register';

    return (
        <FlexContainer gap={10} marginBottom={20}>
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
        </FlexContainer>
    );
};

export default ButtonList;
