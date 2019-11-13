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
    delay: 1000,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Logo />
          <NavLinks style={linkAnimation}>
            <Link to="/program">Program</Link>
            <Link to="/marketing">Marketing</Link>
            <Link to="/kontakt">Kontakt</Link>
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
  @media ${device.deviceTablet} {
    font-size: 2vw;
  }
  @media ${device.deviceTabletLand} {
    font-size: 2vw;
  }
  @media ${device.deviceDesktop} {
    font-size: 1.5vw;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  align-content: center;
  height: 5rem;

  @media ${device.deviceTablet} {
    height: 6.5rem;
  }
  @media ${device.deviceTabletLand} {
    height: 7rem;
  }
  @media ${device.deviceDesktop} {
    height: 8rem;
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
    margin: 0 0 0 6rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${theme.colorQuartile};
      border-bottom: 1px solid ${theme.colorQuartile};
    }
    @media ${device.devicePhone} {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  display: none;
  @media ${device.devicePhone} {
    display: block;
  }
`;
