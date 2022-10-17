// styled components
import { Container, PaginationButton } from './styles';

const PaginationBar = ({ renderParams, handleClick }) => {
    return (
        <Container>
            {renderParams.map(param => {
                if (!param.value) return '';

                return (
                    <PaginationButton
                        key={param.key}
                        value={param.value}
                        disabled={param.disabled}
                        onClick={handleClick}
                        current={param.current}
                    >
                        {param.label}
                    </PaginationButton>
                );
            })}
        </Container>
    );
};

export default PaginationBar;
