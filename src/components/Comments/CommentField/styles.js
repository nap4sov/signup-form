import styled from 'styled-components';

export const Form = styled.form`
    position: relative;
    margin-top: 20px;
`;

export const TextArea = styled.textarea`
    resize: none;
    height: 110px;
    width: 100%;
    padding: 10px;
    font-family: inherit;
    font-size: 12px;
    outline: none;
    border: 1px solid #acacac;
    border-radius: 5px;

    transition: border 300ms ease;

    &:focus {
        border: 1px solid #097957;
    }
`;

export const SubmitButton = styled.button`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;

    transition: background-color 300ms ease, color 300ms ease;

    &:hover,
    &:focus {
        background-color: #097957;
        color: white;
    }
`;
