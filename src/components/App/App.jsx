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
import SuccessPopup from "../SuccessPopup/SuccessPopup";
import { registerUser, logInUser, getUserInfo } from "../../utils/auth";

import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { ActivePageContext } from "../../context/ActivePageContext";

import "./App.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setisEmptySearch] = useState(false);
  const [isCardsRendered, setIsRendered] = useState(false);
  const [activePopup, setActivePopup] = useState("");
  const [isActivePageMain, setIsActivePageMain] = useState(true);
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
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

  const openSuccessPopup = () => {
    setActivePopup("success");
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
    activePopup === "success" && setActivePopup("sign-in");
  };

  const handleActivePageChange = () => {
    isActivePageMain && setIsActivePageMain(false);
    !isActivePageMain && setIsActivePageMain(true);
  };

  const handleHamburgerMenuClick = () => {
    setIsHamburgerMenuActive(!isHamburgerMenuActive);
  };

  const handleRegistration = (values, resetForm) => {
    setIsPopupLoading(true);
    registerUser(values)
      .then(closePopup)
      .then(resetForm)
      .catch(console.error)
      .finally(() => {
        setIsPopupLoading(false);
        openSuccessPopup();
      });
  };

  const handleLogIn = (values, resetForm) => {
    setIsPopupLoading(true);
    logInUser(values)
      .then((data) => {
        if (data.token) {
          // setToken(data.token);
          getUserInfo(data.token).then((user) => {
            setUserInfo(user.data);
            setIsLoggedIn(true);
          });
        }
      })
      .then(closePopup)
      .then(resetForm)
      .catch(console.error)
      .finally(() => setIsPopupLoading(false));
  };

  const handleLogOutClick = () => {
    setIsLoggedIn(false);
    setUserInfo({});
    // deleteToken();
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
                      handleLogOutClick={handleLogOutClick}
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <>
                      <SavedNewsHeader
                        Navigation={Navigation}
                        openPopup={handleSignInPopup}
                        handleHamburgerMenuClick={handleHamburgerMenuClick}
                        isHamburgerMenuActive={isHamburgerMenuActive}
                        handleLogOutClick={handleLogOutClick}
                      />
                      <SavedNews />
                    </>
                  </ProtectedRoute>
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
              isPopupLoading={isPopupLoading}
              handleLogIn={handleLogIn}
            />
            <SignUpPopup
              activePopup={activePopup}
              closePopup={closePopup}
              handleOutsideClick={handleOutsideClick}
              handleChangePopup={handleChangePopup}
              isOpen={activePopup === "sign-up"}
              isPopupLoading={isPopupLoading}
              handleRegistration={handleRegistration}
            />
            <SuccessPopup
              activePopup={activePopup}
              closePopup={closePopup}
              handleOutsideClick={handleOutsideClick}
              handleChangePopup={handleChangePopup}
              isOpen={activePopup === "success"}
            />
          </ActivePageContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
