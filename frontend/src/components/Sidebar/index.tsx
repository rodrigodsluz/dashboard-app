import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';
import { Nav, Border, ContainerIcons, Logo, IconWrapper } from './style';

import d1Logo from '../../assets/d1-logo.png';
import { ReactComponent as ChartPieIcon } from '../../assets/SidebarIcons/chart-pie.svg';
import { ReactComponent as CloudIcon } from '../../assets/SidebarIcons/ccm-cloud.svg';
import { ReactComponent as ArrowsIcon } from '../../assets/SidebarIcons/exchange-alt.svg';
import { ReactComponent as ExternalLinkIcon } from '../../assets/SidebarIcons/external-link-alt-solid.svg';
import { ReactComponent as DiamondIcon } from '../../assets/SidebarIcons/gem.svg';
import { ReactComponent as RocketIcon } from '../../assets/SidebarIcons/rocket.svg';
import { ReactComponent as SignOutIcon } from '../../assets/SidebarIcons/sign-out-alt.svg';
import { ReactComponent as ToolsIcon } from '../../assets/SidebarIcons/tools.svg';
import { ReactComponent as UsersIcon } from '../../assets/SidebarIcons/user-friends.svg';

const TooltipArrow = withStyles((theme: Theme) => ({
  arrow: {
    color: 'white',
  },
  tooltip: {
    backgroundColor: 'white',
    color: '#3E4157',
    fontWeight: 'bold',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    fontSize: '14px',
  },
}))(Tooltip);

function Sidebar() {
  return (
    <>
      <Border position="top" />
      <Nav>
        <ContainerIcons>
          <Logo alt="logo" src={d1Logo} />
        </ContainerIcons>
        <ContainerIcons>
          <TooltipArrow title="Análises" placement="left" arrow>
            <IconWrapper>
              <ChartPieIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="Jornadas" placement="left" arrow>
            <IconWrapper>
              <RocketIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="Clientes" placement="left" arrow>
            <IconWrapper>
              <UsersIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="CCM Clound" placement="left" arrow>
            <IconWrapper>
              <CloudIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="Versão 01" placement="left" arrow>
            <IconWrapper>
              <ExternalLinkIcon />
            </IconWrapper>
          </TooltipArrow>
        </ContainerIcons>
        <ContainerIcons />
        <ContainerIcons>
          <TooltipArrow title="Administração" placement="left" arrow>
            <IconWrapper>
              <DiamondIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="Help Desk" placement="left" arrow>
            <IconWrapper>
              <ToolsIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="Trocar Conta" placement="left" arrow>
            <IconWrapper>
              <ArrowsIcon />
            </IconWrapper>
          </TooltipArrow>
          <TooltipArrow title="Sair" placement="left" arrow>
            <IconWrapper>
              <SignOutIcon />
            </IconWrapper>
          </TooltipArrow>
        </ContainerIcons>
      </Nav>
      <Border position="bottom" />
    </>
  );
}

export default Sidebar;
