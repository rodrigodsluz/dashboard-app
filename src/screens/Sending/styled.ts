import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  width: 100vw;
  height: 100vh;
  padding: 20px 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  margin: 0 0 0 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const TableContent = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
`;
