import styled, { css } from 'styled-components';

interface Props {
  status: string;
}

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
