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
         <Spacer />
         <NavigationItems>
            <ul>
               <li>
                  <Link to='/program'>Program</Link>
               </li>
               <li>
                  <Link to='/marketing'>Marketing</Link>
               </li>
               <li>
                  <Link to='/kontakt'>Kontakt</Link>
               </li>
            </ul>
         </NavigationItems>
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
   align-content: center;
   height: 100%;
   @media ${device.deviceDesktop} {
      max-width: 1100px;
   }
   @media ${device.deviceDesktopHD} {
      max-width: 1440px;
   }
`;

const Spacer = styled.div`
   flex: 1;
`;

const NavigationItems = styled.div``;

export default Navbar;