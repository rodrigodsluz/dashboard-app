import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  width: 80vw;
  height: 100vh;
  padding: 40px;
  padding-top: 100px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  margin: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1350px) {
    padding-top: 240px;
    width: 65vw;
  }

  @media screen and (max-width: 1000px) {
    padding-top: 390px;
    width: 55vw;
  }

  @media screen and (max-width: 900px) {
    padding-top: 230px;

    width: 100vw;
  }

  @media screen and (max-width: 620px) {
    padding-top: 630px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  flex-wrap: wrap;
`;

export const GraphicContainer = styled.div`
  @media screen and (max-width: 900px) {
    margin-top: 430px;
    display: flex;
    justify-content: center;
  }
`;
