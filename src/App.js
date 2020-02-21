import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';

import GlobalStyles from './styles/Global';

import IndexPage from './pages/IndexPage';
import ProgramPage from './pages/ProgramPage';
import MarketingPage from './pages/MarketingPage';
import ContactPage from './pages/ContactPage';
import OnlineRTG from './pages/OnlineRTG';
import FourZeroFourPage from './pages/404Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
   state = {
      navbarOpen: false,
   };

   drawerToggleClickHandler = () => {
      this.setState(prevState => {
         return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
   };

   backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false });
   };

   render() {
      return (
         <Router>
            <GlobalStyles />
            <Navbar />

            <Switch>
               <Route exact path='/' component={IndexPage}></Route>
               <Route path='/program' component={ProgramPage}></Route>
               <Route path='/marketing' component={MarketingPage}></Route>
               <Route path='/kontakt' component={ContactPage}></Route>
               <Route path='/onlinertg' component={OnlineRTG}></Route>
            </Switch>
         </Router>
      );
   }
}

export default App;
