import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons/lib';
import { useEffect, useState } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  TextMenu,
  SignoutBtn,
  SignUpBtn,
} from './styles';
import { Button } from '../../styles/global';

const Navbar = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', showButton);
  });

  const isActive = path => {
    if (router.pathname === path) {
      return { color: 'red' };
    }
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <Link href="/">
              <NavLogo>
                <NavIcon />
                <TextMenu>Robson App</TextMenu>
              </NavLogo>
            </Link>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <Link href="/">
                  <NavLinks onClick={closeMobileMenu}>
                    <TextMenu style={isActive('/')}>Home</TextMenu>
                  </NavLinks>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/">
                  <NavLinks onClick={closeMobileMenu}>
                    <TextMenu style={isActive('/dashboard')}>
                      Dashboard
                    </TextMenu>
                  </NavLinks>
                </Link>
              </NavItem>

              <>
                <NavItem>
                  <Link href="/">
                    <NavLinks onClick={closeMobileMenu}>
                      <TextMenu style={isActive('/signin')}>Signin</TextMenu>
                    </NavLinks>
                  </Link>
                </NavItem>

                <NavItemBtn>
                  {button ? (
                    <Link href="/">
                      <NavBtnLink>
                        <SignUpBtn style={isActive('/signup')}>
                          SIGN UP
                        </SignUpBtn>
                      </NavBtnLink>
                    </Link>
                  ) : (
                    <Link href="/">
                      <NavBtnLink>
                        <Button
                          style={isActive('/signup')}
                          onClick={closeMobileMenu}
                        >
                          SIGN UP
                        </Button>
                      </NavBtnLink>
                    </Link>
                  )}
                </NavItemBtn>
              </>

              <NavItem>
                <SignoutBtn>
                  <TextMenu style={{ cursor: 'pointer', color: '#fff' }}>
                    Signout
                  </TextMenu>
                </SignoutBtn>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
