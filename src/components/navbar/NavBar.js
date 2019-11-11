import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Logo />
          <NavLinks style={linkAnimation}>
            <Link to='/program'>Program</Link>
            <Link to='/marketing'>Marketing</Link>
            <Link to='/kontakt'>Kontakt</Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  width: 100%;
  top: 0;
  left: 0;
  background: ${theme.colorWhiteBck};
  z-index: 1;
  font-size: ${theme.h5};
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-content: center;
  height: 8rem;
  @media ${device.mobileS} {
    max-width: 300px;
  }
  @media ${device.mobileM} {
    max-width: 370px;
  }
  @media ${device.mobileL} {
    max-width: 400px;
  }
  @media ${device.tablet} {
    max-width: 600px;
  }
  @media ${device.laptop} {
    max-width: 1200px;
  }
  @media ${device.laptopL} {
    max-width: 1600px;
  }
  @media ${device.desktop} {
    max-width: 1600px;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: ${theme.colorFont};
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${theme.colorPrimary};
      border-bottom: 1px solid ${theme.colorQuartile};
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media ${device.tablet} {
    display: none;
  }
`;
