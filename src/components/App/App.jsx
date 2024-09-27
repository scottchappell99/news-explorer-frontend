import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

import { AuthContext } from "../../utils/Context/AuthContext";
import { UserContext } from "../../utils/Context/UserContext";
import { ActivePageContext } from "../../utils/Context/ActivePageContext";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "Scott Chappell" });
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setisEmptySearch] = useState(false);
  const [isCardsRendered, setIsRendered] = useState(true);
  const [activePopup, setActivePopup] = useState("");
  const [isActivePageMain, setIsActivePageMain] = useState(true);
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!activePopup) return;
    const handleEscPress = (evt) => {
      evt.key === "Escape" && closePopup();
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [activePopup]);

  useEffect(() => {
    if (!location) return;
    const handleChangeActivePage = () => {
      location.pathname === "/" && setIsActivePageMain(true);
      location.pathname === "/saved-news" && setIsActivePageMain(false);
    };
    window.addEventListener("click", handleChangeActivePage);
  }, [location]);

  const handleSignInPopup = () => {
    setIsHamburgerMenuActive(false);
    setActivePopup("sign-in");
  };

  const closePopup = () => {
    setActivePopup("");
  };

  const handleOutsideClick = (evt) => {
    evt.target.id === activePopup && closePopup();
  };

  const handleChangePopup = () => {
    activePopup === "sign-in" && setActivePopup("sign-up");
    activePopup === "sign-up" && setActivePopup("sign-in");
  };

  const handleActivePageChange = () => {
    isActivePageMain && setIsActivePageMain(false);
    !isActivePageMain && setIsActivePageMain(true);
  };

  const handleHamburgerMenuClick = () => {
    setIsHamburgerMenuActive(!isHamburgerMenuActive);
  };

  return (
    <div className="app">
      <AuthContext.Provider value={isLoggedIn}>
        <UserContext.Provider value={userInfo}>
          <ActivePageContext.Provider value={isActivePageMain}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      Navigation={Navigation}
                      openPopup={handleSignInPopup}
                      handleHamburgerMenuClick={handleHamburgerMenuClick}
                      isHamburgerMenuActive={isHamburgerMenuActive}
                    />
                    <Main SearchBox={SearchBox} />
                    <Preloader isLoading={isLoading} />
                    <NotFound isEmptySearch={isEmptySearch} />
                    <NewsCardList isCardsRendered={isCardsRendered} />
                    <About />
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <>
                    <SavedNewsHeader
                      Navigation={Navigation}
                      openPopup={handleSignInPopup}
                      handleHamburgerMenuClick={handleHamburgerMenuClick}
                      isHamburgerMenuActive={isHamburgerMenuActive}
                    />
                    <SavedNews />
                  </>
                }
              />
            </Routes>
            <Footer />
            <SignInPopup
              activePopup={activePopup}
              closePopup={closePopup}
              handleOutsideClick={handleOutsideClick}
              handleChangePopup={handleChangePopup}
              isOpen={activePopup === "sign-in"}
            />
            <SignUpPopup
              activePopup={activePopup}
              closePopup={closePopup}
              handleOutsideClick={handleOutsideClick}
              handleChangePopup={handleChangePopup}
              isOpen={activePopup === "sign-up"}
            />
          </ActivePageContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
