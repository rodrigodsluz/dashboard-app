import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
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
  justify-content: space-evenly;
  flex-direction: row;

  @media screen and (max-width: 1260px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TableContent = styled.div`
  width: 80%;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  flex-wrap: wrap;
`;

export const GraphicContainer = styled.div`
  @media screen and (max-width: 1260px) {
    display: flex;
    justify-content: center;
  }
`;
