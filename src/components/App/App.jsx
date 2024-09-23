import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";
import { OnSavedNewsContext } from "../../utils/Context/OnSavedNewsContext";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "Scott Chappell" });
  const [isLoading, setIsLoading] = useState(false);
  const [isOnSavedNews, setIsOnSavedNews] = useState(false);

  return (
    <div className="app">
      <AuthContext.Provider value={isLoggedIn}>
        <UserContext.Provider value={userInfo}>
          <OnSavedNewsContext.Provider value={isOnSavedNews}>
            <Header Navigation={Navigation} />
            <Routes>
              <Route path="/" element={<Main SearchBox={SearchBox} />} />
              <Route path="/saved-news" element={<SavedNews />} />
            </Routes>
            <Preloader isLoading={isLoading} />
            <About />
            <Footer />
          </OnSavedNewsContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
