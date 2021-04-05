import styled, { css } from 'styled-components';

interface Props {
  status: string;
}

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
  width: 80%;
  height: 80vh;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
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

  ${(props) =>
    props.status === 'executando' &&
    css`
      background: #ffff66;
    `}

  ${(props) =>
    props.status === 'erros' &&
    css`
      background: #ff4d4d;
    `}

  ${(props) =>
    props.status === 'finalizados' &&
    css`
      background: #79ff4d;
    `}
`;

export const CardStatus = styled.h2`
  margin: auto;
  color: #1a1731;
`;

export const GraphicContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    margin-top: 460px;
  }

  @media screen and (min-width: 700px) and (max-width: 1024px) {
    margin-top: 200px;
    flex-direction: row;
  }
`;

export const GraphicWrapper = styled.div`
  border-radius: 7px;
  border: 2px solid rgba(100, 100, 111, 0.2);
  margin-top: 20px;
  text-align: center;

  @media screen and (min-width: 700px) and (max-width: 1024px) {
    margin: 10px;
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
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  outline: none;
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
