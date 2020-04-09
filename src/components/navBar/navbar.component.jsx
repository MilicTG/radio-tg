import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

//components
import Logo from '../logo/logo.component';
import BurgerBtn from '../buttonBurger/burgerBtn.component';
import RTGMusicBTN from '../buttonRTGMusic/buttonRTGMusic.component';
import SideDrawer from '../sideDrawer/sideDrawer.component';
import PortalToRTGMusic from '../portalToRTGMusic/portalToRTGMusic.component';

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
         openRTGMusic: false,
      };
   }

   openRTGMusic = () => {
      this.setState((state) => ({
         ...state,
         openRTGMusic: !state.openRTGMusic,
      }));
   };

   drawerToggleClickHandler = () => {
      this.setState((prevState) => {
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

   handleClick = () => {
      const history = useHistory();
      history.push('/rtg-music');
   };

   render() {
      return (
         <>
            <Wrapper>
               <Container>
                  <Fade left>
                     <Logo />
                  </Fade>
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
                        <Fade top cascade>
                           <li>
                              <Link to='/program'>Program</Link>
                           </li>
                           <li>
                              <Link to='/marketing'>Marketing</Link>
                           </li>
                           <li>
                              <Link to='/kontakt'>Kontakt</Link>
                           </li>
                        </Fade>
                        <Fade right>
                           <li>
                              <RTGMusicBTN   
                              text='RTG Music'
                              component={Link}
                              to='/rtg-music' />   
                           </li>
                        </Fade>
                     </ul>
                  </Navigation>
               </Container>
            </Wrapper>
            )}
         </>
      );
   }
}

export default Navbar;
