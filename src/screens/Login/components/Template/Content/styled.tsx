import styled from 'styled-components';

export const ContentStyled = styled.div`
  margin: 15px 30px;
  @media (min-width: 600px) {
    align-items: center;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    form {
      align-items: center;
      justify-content: center;
      width: 500px;
    }
  }
`;
