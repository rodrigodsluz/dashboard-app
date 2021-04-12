import styled, { css } from 'styled-components';

interface Props {
  status: string;
}

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
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;
`;

export const PanelCard = styled.div`
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`;

export const Card = styled.button<Props>`
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;
  border: none;
  width: 240px;
  transition: 0.2s ease;
  ${(props) =>
    props.status === 'executando' &&
    css`
      background: #fbbc05;

      &:hover {
        background-color: #242321;
      }
    `}
  ${(props) =>
    props.status === 'erros' &&
    css`
      background: #ea4335;
      &:hover {
        background-color: #242321;
      }
    `}
    ${(props) =>
    props.status === 'finalizados' &&
    css`
      background: #34a853;
      &:hover {
        background-color: #242321;
      }
    `};
`;

export const CardStatus = styled.h2`
  margin: auto;
  color: #fff;
  font-size: 18px;
`;

export const GraphicContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
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

export const Info = styled.span`
  font-size: 14px;
  padding: 2px 7px;
  border-radius: 50%;
  background: #00e1ff;

  &:hover {
    background: #577074;
  }
`;

export const InfoBtn = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  margin: 10px 0px;
`;

export const DateInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin: 0px 10px;
  outline: none;
`;

export const ContainerDate = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 25px;
`;
