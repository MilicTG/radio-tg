import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';

const Navbar = props => (
   <NavbarWrapper>
      <NavbarContainer>
         <Logo />
      </NavbarContainer>
   </NavbarWrapper>
);

const NavbarWrapper = styled.nav`
   width: 100%;
   height: 8rem;
   top: 0;
   left: 0;
   background: ${theme.colorWhiteBck};
`;

const NavbarContainer = styled.div`
   display: flex;
   margin: auto;
   padding: 0 2rem;
   justify-content: space-between;
   align-content: center;

   @media ${device.deviceDesktop} {
      max-width: 1100px;
   }
   @media ${device.deviceDesktopHD} {
      max-width: 1440px;
   }
`;

const NavigationItems = styled.div``;

export default Navbar;
