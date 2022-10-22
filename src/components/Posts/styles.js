import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 600px;
    padding: 20px;
    margin: 0 auto 20px auto;
    background-color: white;
    opacity: 0.8;
    border: 1px solid #838383;
    border-radius: 5px;
`;

export const Title = styled.h3`
    display: inline-block;
    margin: 0 20px 20px 0;

    text-transform: uppercase;

    transition: color 300ms ease, transform 300ms ease;

    cursor: pointer;
    &:hover {
        color: #097957;
        transform: scale(1.05);
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

export const DeleteContainer = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 20px;
`;

export const SaveContainer = styled(DeleteContainer)`
    top: 60px;
`;

export const CopyContainer = styled.button`
    transform: translateY(-15%);
    cursor: copy;
    background-color: transparent;
    border: none;
`;
