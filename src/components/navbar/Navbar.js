import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';
import BurgerBtn from '../navbar/BurgerBtn';
import SideDrawer from '../navbar/SideDrawer';

class Navbar extends Component {
   constructor() {
      super();
      this.state = {
         sideDrawerOpen: false,
      };
   }

   drawerToggleClickHandler = () => {
      this.setState(prevState => {
         return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
   };

   render() {
      return (
         <NavbarWrapper>
            <NavbarContainer>
               <Logo />
               <Spacer />
               <BurgerBtn onClick={this.drawerToggleClickHandler} />
               <SideDrawer
                  drawer={this.state.sideDrawerOpen}
                  onClick={this.drawerToggleClickHandler}
               />
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
   }
}

const NavbarWrapper = styled.nav`
   position: relative;
   width: 100%;
   height: 8rem;
   top: 0;
   left: 0;
   background: ${theme.colorWhiteBck};
   z-index: 200;
`;

const NavbarContainer = styled.div`
   display: flex;
   margin: auto;
   padding: 0 2rem;
   align-content: center;
   align-items: center;
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

const NavigationItems = styled.div`
   display: flex;
   align-items: center;
   @media (max-width: 768px) {
      display: none;
   }
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      border-radius: 4px;
      overflow: hidden;

      li {
         padding-left: 5rem;
      }
      a {
         text-decoration: none;
         color: ${theme.colorFont};
         font-size: ${theme.fontSizeS};
         font-weight: 500;
         transition: all 0.3s ease;
         :hover {
            color: ${theme.colorQuartile};
         }
      }
   }
`;

export default Navbar;
