import React from "react";
import NavBar from "./components/shared/NavBar";
import IndexPage from "./components/pages/IndexPage";

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
