import styled, { css } from 'styled-components';

type Props = {
  status: string;
};
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.div<Props>`
  width: 10px;
  height: 10px;
  margin: 0px 10px;
  border-radius: 50%;
  ${(props) =>
    props.status === 'RUNNING' &&
    css`
      background: #fbbc05;

      &:hover {
        background-color: #242321;
      }
    `}
  ${(props) =>
    props.status === 'ERROR' &&
    css`
      background: #ea4335;
      &:hover {
        background-color: #242321;
      }
    `}
    ${(props) =>
    props.status === 'FINISHED' &&
    css`
      background: #34a853;
      &:hover {
        background-color: #242321;
      }
    `};
`;
