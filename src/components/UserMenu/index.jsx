import { Wrapper } from './styles';
import { BasicButton } from '../../styles';

const UserMenu = () => {
    return (
        <Wrapper>
            <p>user@mail</p>
            <BasicButton primary>Log out</BasicButton>
        </Wrapper>
    );
};

export default UserMenu;
