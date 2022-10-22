import styled, { css, createGlobalStyle } from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BasicButton = styled.button`
    background: transparent;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #097957;
    outline: none;
    font-size: 16px;
    cursor: pointer;

    transition: box-shadow 300ms ease, border 300ms ease;

    &:hover {
        box-shadow: 0 0 5px #acacac;
    }

    &:focus {
        box-shadow: inset 0 0 5px #acacac;
        border: 1px solid #00d4ff;
    }

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
`;

export const Section = styled.section`
    padding: 40px 0;
`;

export const CenteredContainer = styled.div`
    width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
p {
    cursor: default;
}
h1,h2,h3 {
    cursor: default;
}

`;

export const Mark = styled.span`
    padding: 1px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: yellowgreen;
`;
