import React, { Component } from "react";
import IndexPage from "./components/pages/IndexPage";
import ArchivePage from "./components/pages/ArchivePage";
import MarketingPage from "./components/pages/MarketingPage";
import ContactPage from "./components/pages/ContactPage";
import FourZeroFourPage from "./components/pages/404Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./components/shared/theme";

class App extends Component {
  render() {
    return (
      <Router>
        <NavContainer>
          <h1>Logo</h1>

          <ul>
            <li>
              <Link to="/">Pocetna</Link>
            </li>
            <li>
              <Link to="/arhiva">Arhiva</Link>
            </li>
            <li>
              <Link to="/marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </NavContainer>

        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
          <Route path="/arhiva">
            <ArchivePage />
          </Route>
          <Route path="/marketing">
            <MarketingPage />
          </Route>
          <Route path="/kontakt">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: ${theme.colorLightBck};
`;

export default App;
