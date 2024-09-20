import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import About from "../About/About";
import Footer from "../Footer/Footer";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "Elise" });

  return (
    <div className="app">
      <AuthContext.Provider value={isLoggedIn}>
        <UserContext.Provider value={userInfo}>
          <Header Navigation={Navigation} />
          <Routes>
            <Route path="/" element={<Main SearchBox={SearchBox} />} />
            {/* <Route path='/saved-news' element={} /> */}
          </Routes>
          <About />
          <Footer />
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
