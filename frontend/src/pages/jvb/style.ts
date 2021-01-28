import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const TableContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  margin: 0px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media screen and (max-width: 929px) {
    padding-top: 140px;
  }

  @media screen and (max-width: 645px) {
    padding-top: 300px;
  }

  @media screen and (max-width: 540px) {
    padding-top: 600px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  flex-wrap: wrap;
`;
