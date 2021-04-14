import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 330px;
  outline: none;
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
  outline: none;
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: center;
  background-color: #fff;
  border: 1px solid #ccc;
  transition: 0.2s ease-in;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #9196ab;
  }
`;
