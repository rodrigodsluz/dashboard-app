import styled, { css } from 'styled-components';

interface Props {
  position: string;
}
export const Nav = styled.nav`
  position: fixed;
  background: #1a1731;
  top: 0;
  left: 0;
  height: 100%;
  width: 70px;
  display: grid;
  grid-template-rows: 100px 3fr 1fr 2fr;
`;

export const Border = styled.div<Props>`
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%);
  position: fixed;
  left: 0px;
  width: 70px;
  height: 3px;
  z-index: 1;
  ${props => props.position === 'top'
    && css`
      top: 0px;
    `}
  ${props => props.position === 'bottom'
    && css`
      bottom: 0px;
    `}
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

export const Logo = styled.img`
  width: 30px;
  height: 17px;
  margin: 50px 10px 10px 10px;
`;
export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  &:hover {
    fill: #117eff;
  }
`;
