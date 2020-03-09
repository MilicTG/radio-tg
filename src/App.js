import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/Global';

//components
import Navbar from './components/navBar/navbar.component';

//pages
import IndexPage from './pages/indexPage/index.page';
import RTGMusicPage from './pages/RTGMusicPage/RTGMusicPage.component';
import ProgramPage from './pages/programPage/program.page';
import MarketingPage from './pages/marketingPage/marketingPage.page';

const App = () => {
   return (
      <Router>
         <GlobalStyles />
         <Navbar />
         <Switch>
            <Route exact path='/' component={IndexPage}></Route>
            <Route exact path='/rtg-music' component={RTGMusicPage}></Route>
            <Route path='/program' component={ProgramPage}></Route>
            <Route path='/marketing' component={MarketingPage}></Route>
         </Switch>
      </Router>
   );
};

export default App;
