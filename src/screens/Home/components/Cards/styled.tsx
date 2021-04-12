import styled, { css } from 'styled-components';

interface Props {
  status: string;
}

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

export const Count = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 25px;
`;
