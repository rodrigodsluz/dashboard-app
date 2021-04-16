import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
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
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 90%;
  height: 100vh;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const GraphicWrapper = styled.div`
  border-radius: 7px;
  border: 1px solid #ccc;
  text-align: center;
  height: 300px;
  width: 200px;
  margin: 0px 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  margin: 10px 0px;
`;

