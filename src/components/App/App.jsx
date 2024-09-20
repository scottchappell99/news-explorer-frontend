import { useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import About from "../About/About";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header Navigation={Navigation} />
      <Main SearchBox={SearchBox} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
