import React, { Component } from "react";
import IndexPage from "./components/pages/IndexPage";
import ArchivePage from "./components/pages/ArchivePage";
import MarketingPage from "./components/pages/MarketingPage";
import ContactPage from "./components/pages/ContactPage";
import FourZeroFourPage from "./components/pages/404Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./components/shared/theme";
import { device } from "./components/shared/responsive";
import Logo from "./assets/RTG - Logo small@2x.png";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar>
          <NavContainer>
            <Link to='/'>
              <img src={Logo} alt='logo' />
            </Link>

            <ul>
              <li>
                <Link to='/'>Pocetna</Link>
              </li>
              <li>
                <Link to='/arhiva'>Arhiva</Link>
              </li>
              <li>
                <Link to='/marketing'>Marketing</Link>
              </li>
              <li>
                <Link to='/kontakt'>Kontakt</Link>
              </li>
            </ul>
          </NavContainer>
        </NavBar>
        <Switch>
          <Route exact path='/' component={IndexPage}></Route>
          <Route path='/arhiva' component={ArchivePage}></Route>
          <Route path='/marketing' component={MarketingPage}></Route>
          <Route path='/kontakt' component={ContactPage}></Route>
        </Switch>
      </Router>
    );
  }
}

const NavBar = styled.nav`
  width: 100%;
  height: 80px;
  background: ${theme.colorLightBck};
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const NavContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 45px;
  }
  ul {
    display: inherit;
    flex-direction: row;
    li {
      padding: 0 0 0 70px;
      a {
        color: ${theme.colorFont};
        font-size: 20px;
        font-weight: 600;
        :hover {
          border-bottom: solid 2px black;
        }
      }
    }
  }
  @media ${device.laptop} {
    max-width: 1200px;
  }
`;

export default App;
