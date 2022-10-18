import styled, { css } from 'styled-components';
import { FlexContainer } from '../../styles';

export const Container = styled(FlexContainer)`
    width: 300px;
    margin: 0 auto;
`;

export const PaginationButton = styled.button`
    min-height: 40px;
    flex-grow: 2;
    border: none;
    cursor: pointer;
    background-color: white;
    opacity: 0.8;
    font-size: 16px;

    transition: color 300ms ease;

    &:hover,
    &:focus {
        color: #097957;
    }

    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    &:disabled {
        background-color: white;
        opacity: 0.8;
        pointer-events: none;
    }

    ${props =>
        props.current &&
        css`
            color: #097957;
            font-size: 18px;
            line-height: 1;
        `}
`;
