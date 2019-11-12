import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import logo from "../../assets/logoSmall.png";
import { device } from "../../styles/responsive";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to='/'>
        <LogoItem src={logo} alt='Radio Logo' />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  display: flex;
  height: 100%;
  & a {
    align-self: center;
    display: inherit;
    cursor: pointer;
  }
`;
const LogoItem = styled.img`
  @media ${device.mobileS} {
    height: 3rem;
  }

  @media ${device.tablet} {
    height: 3rem;
  }
  @media ${device.laptop} {
    height: 5rem;
  }
`;
