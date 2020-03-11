import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import GlobalStyles from './styles/Global';

//components
import Navbar from './components/navBar/navbar.component';

//pages
import IndexPage from './pages/indexPage/index.page';
import RTGMusicPage from './pages/RTGMusicPage/RTGMusicPage.component';
import ProgramPage from './pages/programPage/program.page';
import MarketingPage from './pages/marketingPage/marketingPage.page';

//showPages
import StrunicaPage from './pages/showPage/showPageStrunica.page';

const App = () => {
   return (
      <Router>
         <GlobalStyles />
         <Navbar />
         <Route
            render={({ location }) => (
               <PageTransition
                  preset='moveToLeftFromRight'
                  transitionKey={location.pathname}
               >
                  <Switch>
                     <Route exact path='/' component={IndexPage}></Route>
                     <Route path='/rtg-music' component={RTGMusicPage}></Route>
                     <Route path='/program' component={ProgramPage}></Route>
                     <Route path='/marketing' component={MarketingPage}></Route>
                     <Route path='/strunica' component={StrunicaPage}></Route>
                  </Switch>
               </PageTransition>
            )}
         />
      </Router>
   );
};

export default App;
