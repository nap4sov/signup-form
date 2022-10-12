// styled components
import { Wrapper } from './styles';

// images
import successImg from '../../assets/success.png';

const SuccessNotifier = () => {
    return (
        <Wrapper>
            <img src={successImg} alt="success" width="200" />
        </Wrapper>
    );
};

export default SuccessNotifier;
