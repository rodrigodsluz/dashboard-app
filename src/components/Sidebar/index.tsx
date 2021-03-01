import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';
import {
  Border,
  SidebarContainer,
  ContainerIcons,
  Logo,
  IconWrapper,
  ExpandIconClick,
  ContainerLogo,
} from './styled';

import { ReactComponent as ChartPie } from '../../../public/sidebarIcons/chart-pie.svg';
import { ReactComponent as Rocket } from '../../../public/sidebarIcons/rocket.svg';
import { ReactComponent as SignOut } from '../../../public/sidebarIcons/sign-out-alt.svg';

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

  return (
    <>
      <Border position="top" />
      <SidebarContainer>
        <Link href="/home">
          <ContainerLogo>
            <Logo
              alt="logo"
              src="https://github.com/rodrigodsluz/d1-test/blob/master/src/assets/images/logotipo-branco.png?raw=true"
            />
          </ContainerLogo>
        </Link>

        <ContainerIcons>
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
          <Link href="/sending">
            <ExpandIconClick>
              <TooltipArrow title="Sending Events" placement="left" arrow>
                <IconWrapper>
                  <Rocket
                    fill={router.pathname === '/sending' ? '#117eff' : 'white'}
                  />
                </IconWrapper>
              </TooltipArrow>
            </ExpandIconClick>
          </Link>
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
