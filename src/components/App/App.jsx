import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "Scott Chappell" });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="app">
      <AuthContext.Provider value={isLoggedIn}>
        <UserContext.Provider value={userInfo}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header Navigation={Navigation} />
                  <Main SearchBox={SearchBox} />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <>
                  <SavedNewsHeader Navigation={Navigation} />
                  <SavedNews />
                </>
              }
            />
          </Routes>
          <Preloader isLoading={isLoading} />
          <NewsCardList />
          <About />
          <Footer />
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
