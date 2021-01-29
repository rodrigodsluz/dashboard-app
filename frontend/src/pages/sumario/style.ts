import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  overflow: auto;
  width: 100vw;
  height: 100vh;
  padding: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  margin: 0px;
  display: flex;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TableContent = styled.div`
  width: 80%;
  height: 90vh;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;
`;

export const PanelCard = styled.div`
  padding: 10px 0px;
  align-items: center;
`;

export const GraphicContainer = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  @media screen and (max-width: 1000px) {
    margin-top: 100px;
  }
`;
