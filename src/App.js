import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/Global';

//components
import Navbar from './components/navBar/navbar.component';

//pages
import IndexPage from './pages/indexPage/index.page';
import RTGMusicPage from './pages/RTGMusicPage/RTGMusicPage.component';

const App = () => {
   return (
      <Router>
         <GlobalStyles />
         <Navbar />
         <Switch>
            <Route exact path='/' component={IndexPage}></Route>
            <Route exact path='/rtg-music' component={RTGMusicPage}></Route>
            {/* <Route exact path='/RadioTG' component={RadioTgPage}></Route>
               <Route path='/program' component={ProgramPage}></Route>
               <Route path='/marketing' component={MarketingPage}></Route>
               <Route path='/kontakt' component={ContactPage}></Route>
               <Route path='/onlinertg' component={OnlineRTG}></Route>
               <Route path='/emisija' component={ShowPage}></Route> */}
         </Switch>
      </Router>
   );
};

export default App;
