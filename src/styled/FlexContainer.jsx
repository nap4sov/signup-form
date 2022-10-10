import styled, { css } from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    ${props =>
        props.gap &&
        css`
            gap: ${props.gap}px;
        `}
    ${props =>
        props.marginBottom &&
        css`
            margin-bottom: ${props.marginBottom}px;
        `}
`;
export default FlexContainer;
