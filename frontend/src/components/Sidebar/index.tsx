import React from 'react';
import Link from 'next/link';

import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';
import {
  Border,
  SidebarContainer,
  ContainerIcons,
  Logo,
  IconWrapper,
  ContainerLogo,
} from './style';

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

const Sidebar = () => (
  <>
    <Border position="top" />
    <SidebarContainer>
      <Link href="/home">
        <ContainerLogo>
          <Logo alt="logo" src={d1Logo} />
        </ContainerLogo>
      </Link>

      <ContainerIcons>
        <Link href="/worker">
          <TooltipArrow title="Worker" placement="left" arrow>
            <IconWrapper>
              <ChartPieIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>

        <Link href="/sending">
          <TooltipArrow title="Sending Events" placement="left" arrow>
            <IconWrapper>
              <RocketIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>

        <Link href="/home">
          <TooltipArrow title="Clientes" placement="left" arrow>
            <IconWrapper>
              <UsersIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>
        <Link href="/home">
          <TooltipArrow title="CCM Clound" placement="left" arrow>
            <IconWrapper>
              <CloudIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>
        <Link href="/home">
          <TooltipArrow title="Versão 01" placement="left" arrow>
            <IconWrapper>
              <ExternalLinkIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>
      </ContainerIcons>
      <ContainerIcons />

      <ContainerIcons>
        <Link href="/home">
          <TooltipArrow title="Administração" placement="left" arrow>
            <IconWrapper>
              <DiamondIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>
        <Link href="/home">
          <TooltipArrow title="Help Desk" placement="left" arrow>
            <IconWrapper>
              <ToolsIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>

        <Link href="/home">
          <TooltipArrow title="Trocar Conta" placement="left" arrow>
            <IconWrapper>
              <ArrowsIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>

        <Link href="/login">
          <TooltipArrow title="Sair" placement="left" arrow>
            <IconWrapper>
              <SignOutIcon />
            </IconWrapper>
          </TooltipArrow>
        </Link>
      </ContainerIcons>
    </SidebarContainer>
    <Border position="bottom" />
  </>
);

export default Sidebar;
