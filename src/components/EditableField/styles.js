import styled, { css } from 'styled-components';

export const EditField = styled.div`
    margin-bottom: 20px;
    cursor: text;
    outline: none;

    ${props =>
        props.type === 'title' &&
        css`
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
        `}
    ${props =>
        props.type === 'comment' &&
        css`
            font-size: 12px;
            margin: 0;
        `}
    ${props =>
        props.type === 'plain' &&
        css`
            font-size: 16px;
            line-height: 1.7;
            padding: 5px;
            margin: 0;
        `}
`;
