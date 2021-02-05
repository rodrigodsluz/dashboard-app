import styled, { css } from 'styled-components';

interface Props {
  position?: string;
  url?: string;
}


export const Border = styled.div<Props>`
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%);
  position: fixed;
  left: 0px;
  width: 70px;
  height: 3px;
  z-index: 2;
  ${props =>
    props.position === 'top' &&
    css`
      top: 0px;
      @media screen and (max-width: 500px) {
        width: 100%;
        height: 3px;
      }
    `}
  ${props =>
    props.position === 'bottom' &&
    css`
      bottom: 0px;
      @media screen and (max-width: 500px) {
        width: 100%;
        height: 3px;
        top: 70px;
      }
    `}
`;

export const SidebarContainer = styled.nav`
  position: fixed;
  background: #1a1731;
  top: 0;
  left: 0;
  height: 100%;
  width: 70px;
  display: grid;
  grid-template-rows: 100px 3fr 1fr 2fr;
  z-index: 1;

  @media screen and (max-width: 500px) {
    position: inherit;
    grid-template-columns: 100px 3fr 1fr 2fr;
    height: 70px;
    width: 100%;
  }
`;

export const ContainerLogo = styled.div`
  margin: auto;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin: 17px 0 0 10px;
  }

  @media screen and (max-width: 300px) {
    margin: 17px 0 0 5px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    align-items: initial;
    margin: 16px 0 0 -30px;
  }

  @media screen and (max-width: 300px) {
    margin-left: -50px;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 17px;
  margin: 50px 10px 10px 10px;

  @media screen and (max-width: 500px) {
    margin: 12px 10px 10px 10px;
  }
`;

export const IconWrapper = css`
  width: 20px;
  height: 20px;
  margin: 10px;
  &:hover svg {
    fill: #117eff;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    margin: 10px 5px;
  }

  @media screen and (max-width: 500px) {
    margin: 10px 3px;
  }
`;

export const ChartPieIcon = styled.div<Props>`
  ${IconWrapper}

  ${props =>
    props.url === '/worker' &&
    css`
      //fill: #117eff;
      border-radius: 7px;
      border-bottom: 2px solid #00e1ff;
    `}
`;

export const RocketIcon = styled.div<Props>`
  ${IconWrapper}

  ${props =>
    props.url === '/sending' &&
    css`
      //fill: #117eff;
      border-radius: 7px;
      border-bottom: 2px solid #00e1ff;
    `}
`;

export const UsersIcon = styled.div<Props>`
  ${IconWrapper}

  ${props =>
    props.url === '/users' &&
    css`
      //fill: #117eff;
      border-radius: 7px;
      border-bottom: 2px solid #00e1ff;
    `}
`;

export const CloudIcon = styled.div<Props>`
  ${IconWrapper}

  ${props =>
    props.url === '/cloud' &&
    css`
      //fill: #117eff;
      border-radius: 7px;
      border-bottom: 2px solid #00e1ff;
    `}
`;

export const SignOutIcon = styled.div<Props>`
  ${IconWrapper}

  margin-top: 160px;
`;

export const ExpandIconClick = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`;

