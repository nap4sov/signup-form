import styled from 'styled-components';
import { BasicButton } from '../../../styles';

export const DescriptionInput = styled.input`
    padding: 5px;
    margin-bottom: 10px;
`;

export const TitleInput = styled(DescriptionInput)`
    font-size: 16px;
`;

export const FullTextInput = styled.textarea`
    resize: none;
    height: 100px;
    padding: 5px;
    font-family: inherit;
`;

export const SubmitButton = styled(BasicButton)`
    margin-top: 10px;
`;

export const CloseButton = styled.div`
    margin: 0 0 10px auto;
    height: 20px;
    width: 20px;
    cursor: pointer;
`;
