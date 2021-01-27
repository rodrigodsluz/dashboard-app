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
                {/* <NavIcon /> */}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEUAAAD///9dXV03Nze0tLSsrKwA4f8JAAAAAgDx8fFoaGj9//wHAAUA4/wO3PQLLDGcnJwB1v79+/0E0v8HvP8JpP4Onv8Llv8Nj/8Sg//l9/h6enrY2Njp6enIyMiJiYkOi/8KGzAUFBQmJibj4+NOTk4PDw8GAA7q9/np9vcAyvsAw/oSg/kApvsNWWQM5/4C3f8Gw/8Fuf8Js/8Ot/IUr/UAqPMAnvgTkfMSi/IWgfIJJDFVVVUxMTFtbW1CQkKmsrRYXWQAABUUff/V5OVCV18LIjIAACIAFCcOGzI0KymTk5MzhjmVAAAEFklEQVR4nO3bbUPSUBiH8TPkwQmWEaLJGIEomlMRTdNSVIwyv//36exsA87Dpr0AvU//X/ombo9cjbbBgDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrdJYyXW93XrRM5iIvW2Jecs4z3KbnFxo729nLVLOWWFlMSopnC5NQby2XsYyb9bNZPzh/Ly0MNfOp99WSQq7bMi9jTyF/uBobbSrk23FHX8auQscpaMvYVuh4S8oy1hU67g95GfsK1cO4jYVyopWFzuwu1c5C53q6jKWFzekylhY6+ckythY6jWQZawvd5Mlt5vPDN1fo51ZiN43Wmu81M+58cv6W/MRKzidQqJ51doYtw92OXasL5gkWhrYLKYV5dZJqIWO7KdtxV5mjW8jYk7FwTZmiXMhapsKmMkS6kBn/Mw7lGdqFrGsoVMaJF64YCrvyCPFC5hkS5RftqRfeGApvpAnqhaZTbPl4Qb7QEOA/N0CrsKHPy0dEOoXL4beG7ZS1eVcMJgsSKaxUKqWKpFQSf8EqblXhVLdZaYIXVpMni+VyWXzn+O3m314RX69RyH9vyYixhy3V3jD8F+lF2O2eZH9/f++O9RJxWKh3f9+bd11GITsqrq7yr0Qx1O/3P3BfIgexGnd2djY4/XrKnYcOIxdcvf6tzr+Fy8vLTe4zFwTBVfDpKmXTLqBwmR0dH6/OigJFIfeRm6k8qZ2EnbXBYBBnisJ1ri582+Auo7og+BQZjYIFBGYUFvtFiTnvhIvjBoNT4Typi/PqG5HNzWgLBlHjiP9h0R6NXOF5ZmGQFI5eu3BVK4wbtcJJYlR4qDxE6/ImTB6mr74Ni+9Ufa1RVJ4cnAm12tdYsrNZv4j3NZMdTbivuQoFYkuOSnM/VqTvS3ffm/Ue9rXDxc/v3Lg9Hrfb7V+32s1bd7/HY3Fje/z4+Nieepz/0TDjnCbteOiWZ4j56h8W3STknclNyZB+TiPmS2nnAQsq5Ifl6RQ/KYvPy4byWVtY4CYzYoIXOtO6uFAc4qXfu4CNF/uPz7xTGF6MsuzZk+EihjxPvdD0UlRDmqBeaHppX744Q7zQdLXRlUeIF5peEVauPtEuNNx77f6TLjRfQ1SGKBeaLyCq03QLb1Iu56vvUiRa2GmYLliEfHWUYuFOy09/u8wPdUEKhd7aRCHvN92s98pom5BE4b8YagtaVqi+TYHZVugZFrSq0FWPFCGrCo2f2LKp0PwBIYsKn8wL2lOYEmhPYSNtQUsK1Y/MzLCj0FffcjnDhsJu5ud66Rc2Uz5FmqBe6DUyHqAC6cJuQX8qoSFb6PpP2tvyjagVVt2uly+0DJ/8TfPmCgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3rS/CWKWBnvI4pYAAAAASUVORK5CYII="
                  alt=""
                  width="80"
                />
                <TextMenu>SuportApp</TextMenu>
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
