import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import { theme } from "../../styles/theme";
import { device } from "../../styles/responsive";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, -100, 0, 100],
              output: [0, -1000, 0, -2000]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <Link to="/program">Program</Link>
          </li>
          <li>
            <Link to="/marketing">Marketing</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: ${theme.colorWhiteBck};
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  z-index: 1;
  @media ${device.deviceDesktop} {
    visibility: hidden;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  overflow: hidden;
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: ${theme.fontSizeS};
    font-weight: 500;
    line-height: 3;
    color: ${theme.colorFont};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${theme.colorQuartile};
      border-bottom: 1px solid ${theme.colorQuartile};
    }
  }
`;
