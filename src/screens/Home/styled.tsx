import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  position: fixed;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  width: 100%;
  padding: 20px 50px;
  padding-top: 0px;
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
  padding: 20px 60px 0px 50px;
 
`;

export const GraphicWrapper = styled.div`
  border-radius: 7px;
  border: 1px solid #ccc;
  text-align: center;
  height: 300px;
  width: 200px;
  margin: 15px 0px 0px 10px;
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
  margin: 10px 0px 0px 5px;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 0px;
  padding: 0px;
  margin-left: 30px;

  @media screen and (max-width: 500px) {
    margin-left: 0px;
    margin-top: 60px;
  }
`;
