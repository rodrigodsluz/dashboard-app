import styled from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

export const BorderTopStyled = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  background: rgb(0, 225, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 225, 255, 1) 0%,
    rgba(10, 98, 202, 1) 100%
  );
`;
