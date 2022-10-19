import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
`;

export const InfoBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Info = styled.p`
    margin-top: 0;
    font-size: 11px;
    color: #838383;
`;

export const Text = styled.p`
    margin: 0;
    font-size: 12px;
`;

export const Likes = styled(Text)`
    margin-bottom: 10px;
    font-size: 11px;
`;

export const DeleteContainer = styled.div`
    position: absolute;
    right: 50px;
    bottom: 10px;
    cursor: pointer;
`;

export const LikeContainer = styled(DeleteContainer)`
    right: 10px;
`;
export const SaveContainer = styled.div`
    cursor: pointer;
    margin-top: 10px;
`;
