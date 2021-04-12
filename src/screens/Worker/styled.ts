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
export const SubTitle = styled.p`
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const JobsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  padding: 50px;
  margin: 10px;
`;

export const CardText = styled.p`
  font-weight: bold;
  font-size: 27px;

  @media screen and (max-width: 530px) {
    font-size: 16px;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  border-bottom: 1px solid grey;
`;

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatusCard = styled.div`
  width: 230px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;

export const ContainerGraph = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`;
