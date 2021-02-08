import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';
import {
  Border,
  SidebarContainer,
  ContainerIcons,
  Logo,
  RocketIcon,
  ChartPieIcon,
  SignOutIcon,
  ExpandIconClick,
  ContainerLogo,
} from './style';

import d1Logo from '../../assets/d1-logo.png';
import { ReactComponent as ChartPie } from '../../assets/SidebarIcons/chart-pie.svg';
import { ReactComponent as Rocket } from '../../assets/SidebarIcons/rocket.svg';
import { ReactComponent as SignOut } from "../../assets/SidebarIcons/sign-out-alt.svg";

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

  return(
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
          <ExpandIconClick>
            <TooltipArrow title="Worker" placement="left" arrow>
              <ChartPieIcon url={router.pathname}>
                <ChartPie />
              </ChartPieIcon>
            </TooltipArrow>
          </ExpandIconClick>
        </Link>
        <Link href="/sending">
          <ExpandIconClick>
            <TooltipArrow title="Sending Events" placement="left" arrow>
              <RocketIcon url={router.pathname}>
                <Rocket />
              </RocketIcon>
            </TooltipArrow>
          </ExpandIconClick>
        </Link>
      </ContainerIcons>

      <ContainerIcons />

      <ContainerIcons>
        <Link href="/login">
            <ExpandIconClick>
              <TooltipArrow title="Sair" placement="left" arrow>
                <SignOutIcon url={router.pathname}>
                  <SignOut fill="#fff" />
                </SignOutIcon>
              </TooltipArrow>
            </ExpandIconClick>
          </Link>
      </ContainerIcons>
    </SidebarContainer>
    <Border position="bottom" />
  </>
  )
};

export default Sidebar;
