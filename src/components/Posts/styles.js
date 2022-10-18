import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 600px;
    padding: 20px;
    margin: 0 auto 20px auto;
    background-color: white;
    opacity: 0.8;
    border: 1px solid #838383;
    border-radius: 5px;
`;

export const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;

    transition: color 300ms ease, transform 300ms ease;

    cursor: pointer;
    &:hover {
        color: #097957;
        transform: scale(1.1);
    }

    ${props =>
        props.disabled &&
        css`
            pointer-events: none;
        `}
`;

export const Description = styled.p`
    margin-top: 0;
    margin-bottom: 20px;
    color: #838383;
    pointer-events: none;
    ${props =>
        props.primary &&
        css`
            color: black;
        `}
    ${props =>
        props.enabled &&
        css`
            cursor: pointer;
            pointer-events: all;
        `}
`;

export const InfoBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
