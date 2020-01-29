import React, { Component } from "react";

import NavBar from "./components/navbar/NavBar";

import GlobalStyles from "./styles/Global";

import IndexPage from "./pages/IndexPage";
import ProgramPage from "./pages/ProgramPage";
import MarketingPage from "./pages/MarketingPage";
import ContactPage from "./pages/ContactPage";
import OnlineRTG from "./pages/OnlineRTG";
import FourZeroFourPage from "./pages/404Page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlineBtn from "./components/buttons/OnlineBtn";

class App extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <Router>
        <GlobalStyles />
        <NavBar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route path="/program" component={ProgramPage}></Route>
          <Route path="/marketing" component={MarketingPage}></Route>
          <Route path="/kontakt" component={ContactPage}></Route>
          <Route path="/onlinertg" component={OnlineRTG}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
