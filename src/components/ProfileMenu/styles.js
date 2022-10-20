import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;

    ${({ type }) =>
        type === 'form' &&
        css`
            display: flex;
            flex-direction: column;
            gap: 20px;
        `}
`;

export const Text = styled.p`
    margin-top: 0;
    margin-bottom: 20px;

    ${({ type }) => {
        if (type === 'title')
            return css`
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 25px;
            `;
        if (type === 'date')
            return css`
                font-style: italic;
                margin-bottom: 0;
            `;
    }}
`;

export const EditContainer = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
    padding: 12px 0;
    border-radius: 50%;
    border: 1px solid white;
    background-color: transparent;
    font-size: 20px;
    text-align: center;
    cursor: pointer;

    transition: transform 300ms ease;

    &:hover {
        transform: translateX(-50%) scale(1.1);
    }

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            pointer-events: none;
        `}
`;

export const SaveContainer = styled(EditContainer)`
    left: 55%;
`;

export const BackContainer = styled(EditContainer)`
    left: 45%;
`;

export const InputField = styled.div`
    ${({ hasError }) =>
        hasError &&
        css`
            color: red;
            & > input {
                border: 1px solid red;
            }
        `}
`;

export const Input = styled.input`
    width: 50%;
    padding: 10px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;

    transition: border 300ms ease;

    &:focus {
        border: 1px solid #00d4ff;
    }
`;

export const Label = styled.label`
    margin-left: 10px;
`;
