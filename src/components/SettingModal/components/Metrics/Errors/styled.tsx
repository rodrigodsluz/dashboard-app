import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 80vw;
  height: 90vh;
  outline: none;
`;

export const CenterModal = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  text-align: center;
  z-index: 10;
  outline: none;
`;

export const Row = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  margin-top: 20px;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
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

export const BackButtuon = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
