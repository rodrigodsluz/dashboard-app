import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  position: fixed;
  z-index: 1;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const SearchBar = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  margin: 10px 0px;
`;
export const TableContainer = styled.div`
  overflow: auto;
  width: 100vw;
  height: 100vh;
  border-radius: 4px;
  padding: 20px 40px;
  margin: 0 0 0 50px;
  display: flex;
  z-index: 0;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    padding: 50px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    margin: 40px 0 0 0;
    padding: 50px 20px;
  }
`;

export const TableContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: -60px;
`;

export const JobsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const StatusCard = styled.div`
  width: 230px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;

export const ContainerGraph = styled.div`
  margin: 0px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`;

export const ContentContainerGraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerConfigurationCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 210px;
  justify-content: space-between;
  margin-top: 22px;
  @media screen and (max-width: 930px) {
    align-items: center;
    margin-bottom:10px;
  }
`;
