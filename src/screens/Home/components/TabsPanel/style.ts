import styled from 'styled-components';

export const RowCategory = styled.div`
  margin-bottom: 50px;
`;

export const TabPanelContainer = styled.div`
  height: 60vh;
  overflow-y: scroll;

  @media screen and (max-width: 376px) {
    height: 40vh;
  }
`;

export const RowContent = styled.div`
  border-radius: 5px;
  border: 2px solid #1a1731;
  padding: 5px 10px;
  margin-top: 10px;
`;

export const Info = styled.span`
  font-size: 14px;
  padding: 2px 7px;
  border-radius: 50%;
  background: #00e1ff;
`;
