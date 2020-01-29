import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import OnlineBtn from "../buttons/OnlineBtn";
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
    delay: 2000,
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
            <Link to="/onlinertg">
              <OnlineBtn />
            </Link>
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
  z-index: 10;
  @media ${device.devicePhone} {
    font-size: ${theme.fontSizeXS};
  }
  @media ${device.deviceTablet} {
    font-size: ${theme.fontSizeXS};
  }
  @media ${device.deviceTabletLand} {
    font-size: ${theme.fontSizeXS};
  }
  @media ${device.deviceDesktop} {
    font-size: ${theme.fontSizeS};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  align-content: center;
  @media ${device.devicePhone} {
    height: 6.2rem;
  }
  @media ${device.deviceTablet} {
    height: 7rem;
  }
  @media ${device.deviceTabletLand} {
    height: 7rem;
  }
  @media ${device.deviceDesktop} {
    height: 8.6rem;
    max-width: 1100px;
  }
  @media ${device.deviceDesktopHD} {
    max-width: 1440px;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  flex-flow: row;
  margin: auto 0;

  & a {
    color: ${theme.colorFont};
    text-transform: uppercase;
    font-size: ${theme.fontSizeS};
    font-weight: 500;
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
    @media ${device.deviceTablet} {
      display: none;
    }
    @media ${device.deviceTabletLand} {
      display: none;
    }
    @media ${device.deviceDesktop} {
      display: inline-block;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media ${device.devicePhone} {
    display: block;
  }
  @media ${device.deviceTablet} {
    display: block;
  }
  @media ${device.deviceTabletLand} {
    display: block;
  }
  @media ${device.deviceDesktop} {
    display: none;
  }
`;
