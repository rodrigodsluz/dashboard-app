import { useCallback, useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';

import { ReactComponent as ChartPie } from '../../../public/sidebarIcons/chart-pie.svg';
import { ReactComponent as Rocket } from '../../../public/sidebarIcons/rocket.svg';
import { ReactComponent as SignOut } from '../../../public/sidebarIcons/sign-out-alt.svg';
import { ReactComponent as User } from '../../../public/sidebarIcons/user-friends.svg';
import { ReactComponent as Settings } from '../../../public/sidebarIcons/tools.svg';
import { HomeDataContext } from '@src/context/HomeDataContext';
import Services from '@services/user';
import {
  Border,
  SidebarContainer,
  ContainerIcons,
  Logo,
  IconWrapper,
  ExpandIconClick,
  ContainerLogo,
} from './styled';

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

const Sidebar = () => {
  const router = useRouter();
  const {
    open,
    openModal,
    openSettingModal,
    configureOpenSettingModal,
  } = useContext(HomeDataContext);
  const [image, setImagem] = useState(null);

  const getPhoto = useCallback(async () => {
    let resPhoto = await Services.getUserPhoto();
    setImagem(resPhoto);
  }, []);

  useEffect(() => {
    getPhoto();
  }, [open]);

  
  return (
    <>
      <Border position="top" />
      <SidebarContainer>
        <ContainerLogo>
          <Logo
            alt="logo"
            src={
              !image
                ? 'https://github.com/rodrigodsluz/d1-test/blob/master/src/assets/images/logotipo-branco.png?raw=true'
                : `${`data:image/jpeg;base64,${image}`}`
            }
          />
        </ContainerLogo>

        <ContainerIcons>
          <Link href="/home">
            <ExpandIconClick>
              <TooltipArrow title="Home" placement="left" arrow>
                <IconWrapper>
                  <Rocket
                    fill={router.pathname === '/home' ? '#117eff' : 'white'}
                  />
                </IconWrapper>
              </TooltipArrow>
            </ExpandIconClick>
          </Link>
          <Link href="/worker">
            <ExpandIconClick>
              <TooltipArrow title="Worker" placement="left" arrow>
                <IconWrapper>
                  <ChartPie
                    fill={router.pathname === '/worker' ? '#117eff' : 'white'}
                  />
                </IconWrapper>
              </TooltipArrow>
            </ExpandIconClick>
          </Link>

          <ExpandIconClick onClick={openModal}>
            <TooltipArrow title="User" placement="left" arrow>
              <IconWrapper>
                <User fill={open ? '#117eff' : 'white'} />
              </IconWrapper>
            </TooltipArrow>
          </ExpandIconClick>
          <ExpandIconClick onClick={configureOpenSettingModal}>
            <TooltipArrow title="Settings" placement="left" arrow>
              <IconWrapper>
                <Settings fill={openSettingModal ? '#117eff' : 'white'} />
              </IconWrapper>
            </TooltipArrow>
          </ExpandIconClick>
        </ContainerIcons>

        <ContainerIcons />

        <ContainerIcons>
          <Link href="/">
            <ExpandIconClick>
              <TooltipArrow title="Sair" placement="left" arrow>
                <IconWrapper icon="signout">
                  <SignOut />
                </IconWrapper>
              </TooltipArrow>
            </ExpandIconClick>
          </Link>
        </ContainerIcons>
      </SidebarContainer>
      <Border position="bottom" />
    </>
  );
};

export default Sidebar;
