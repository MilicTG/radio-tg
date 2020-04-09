import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/Global';

//components
import Navbar from './components/navBar/navbar.component';

//pages
import IndexPage from './pages/indexPage/index.page';
import RTGMusicPage from './pages/RTGMusicPage/RTGMusicPage.page';
import ProgramPage from './pages/programPage/program.page';
import MarketingPage from './pages/marketingPage/marketingPage.page';
import NoticePage from './pages/noticePage/noticePage.page'
import ContactPage from './pages/contactPage/contact.page';

//showPages
import StrunicaPage from './pages/showPage/showPageStrunica.page';
import ZrcaloPage from './pages/showPage/showPageZrcalo.page';

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
            <Route path='/oglasi' component={NoticePage}></Route>
            <Route path='/kontakt' component={ContactPage}></Route>
            {/* <Route path='/strunica' component={StrunicaPage}></Route>
            <Route path='/zrcalo' component={ZrcaloPage}></Route> */}
         </Switch>
      </Router>
   );
};

export default App;
