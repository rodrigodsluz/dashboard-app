import styled, { css } from 'styled-components';

export const Image = styled.img`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  display: flex;
  align-self: center;
`;

export const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const UploadFile = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const File = styled.input`
  display: none;
`;
