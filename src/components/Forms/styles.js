import styled, { css } from 'styled-components';
import { BasicButton } from '../../styles';

export const Button = styled(BasicButton)`
    margin-top: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const FormField = styled.div`
    position: relative;
    margin-bottom: 20px;
    padding-top: 20px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #acacac;
    outline: none;

    transition: border 300ms ease;

    &::placeholder {
        opacity: 0;
    }

    &:focus {
        border: 1px solid #00d4ff;
    }
    ${props =>
        props.invalid &&
        css`
            border: 1px solid red;
        `}
`;

export const Label = styled.label`
    position: absolute;
    top: 28px;
    left: 10px;

    transition: transform 300ms ease, color 300ms ease;

    input:focus + &,
    input:not(:placeholder-shown) + & {
        transform: translate(-10px, -28px);
    }

    ${props =>
        props.invalid &&
        css`
            color: red;
        `}
`;
