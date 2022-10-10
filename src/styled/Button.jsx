import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #097957;
    font-size: 16px;
    flex-grow: 2;
    ${props =>
        props.primary &&
        css`
            background: linear-gradient(
                90deg,
                rgba(9, 121, 87, 0.8) 0%,
                rgba(0, 212, 255, 1) 100%
            );
            color: white;
            border-color: transparent;
        `};
    ${props =>
        props.bottomed &&
        css`
            margin-top: 30px;
        `}
`;

export default Button;
