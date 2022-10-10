import styled, { css } from 'styled-components';

const Input = styled.input`
    display: block;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #acacac;
    outline: none;

    &:focus {
        border: 1px solid #00d4ff;
    }
    ${props =>
        props.error &&
        css`
            border: 1px solid red;
        `}
`;

export default Input;
