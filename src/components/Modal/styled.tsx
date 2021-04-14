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
  background-color: #fff;
  width: 330px;
`;

export const CenterModal = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  text-align: center;
  height: 330px;
  width: 330px;
  z-index: 10;
`;

export const UploadFile = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const File = styled.input`
  display: none;
`;
