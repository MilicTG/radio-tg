import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import GlobalStyles from './styles/Global';
import SideDrawer from './components/navbar/SideDrawer';

import IndexPage from './pages/IndexPage';
import ProgramPage from './pages/ProgramPage';
import MarketingPage from './pages/MarketingPage';
import ContactPage from './pages/ContactPage';
import OnlineRTG from './pages/OnlineRTG';
import FourZeroFourPage from './pages/404Page';

class App extends Component {
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
