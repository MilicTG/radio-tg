import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components
import Logo from '../logo/logo.component';
import BurgerBtn from '../buttonBurger/burgerBtn.component';
import SideDrawer from '../sideDrawer/sideDrawer.component';

//styles
import {
   navbarWrapper as Wrapper,
   navbarContainer as Container,
   spacer as Spacer,
   navigationItems as Navigation,
} from './navbar.style';

class Navbar extends Component {
   constructor() {
      super();
      this.state = {
         sideDrawerOpen: false,
         bodyScrollLock: false,
      };
   }

   drawerToggleClickHandler = () => {
      this.setState(prevState => {
         return {
            sideDrawerOpen: !prevState.sideDrawerOpen,
            bodyScrollLock: !prevState.bodyScrollLock,
         };
      });
      this.onScrollBodyLock();
   };

   onScrollBodyLock = () => {
      !this.state.bodyScrollLock
         ? (document.body.style.overflow = 'hidden')
         : (document.body.style.overflow = 'unset');
   };

   render() {
      return (
         <Wrapper>
            <Container>
               <Logo />
               <Spacer />
               <BurgerBtn
                  onClick={this.drawerToggleClickHandler}
                  navBarState={this.state.sideDrawerOpen}
               />
               <SideDrawer
                  drawer={this.state.sideDrawerOpen}
                  onClick={this.drawerToggleClickHandler}
               />
               <Navigation>
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
               </Navigation>
            </Container>
         </Wrapper>
      );
   }
}

export default Navbar;
