import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  justify-content: center;
  margin: 20px;
  padding: 40px;
`;

export const Logo = styled.img`
  width: 100px;
  padding: 10px 0px 20px 0px;
  align-self: flex-start;
`;
