import React from "react";
import NavBar from "./components/shared/NavBar";
import IndexPage from "./components/pages/IndexPage";
import ArchivePage from "./components/pages/ArchivePage";
import MarketingPage from "./components/pages/MarketingPage";
import ContactPage from "./components/pages/ContactPage";
import FourZeroFourPage from "./components/pages/404Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Radio stranica</h1>
      <IndexPage />
    </div>
  );
}

export default App;
