// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useNavigateToSignup } from '../../hooks/navigation';
// selectors
import { userEmail } from '../../redux/selectors';
// operations
import { logOutUser } from '../../redux/users/operations';
// styled components
import { Wrapper, SignupButton } from './styles';
import { BasicButton } from '../../styles';

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(userEmail);
    const navigateToSignup = useNavigateToSignup();

    return (
        <Wrapper>
            {email ? (
                <Wrapper>
                    <p>{email}</p>
                    <BasicButton primary onClick={() => dispatch(logOutUser())}>
                        Log out
                    </BasicButton>
                </Wrapper>
            ) : (
                <SignupButton onClick={() => navigateToSignup()}>
                    Sign Up
                </SignupButton>
            )}
        </Wrapper>
    );
};

export default UserMenu;
