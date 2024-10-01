import { useEffect, useState } from "react";
import { Routes, Route, useLocation, json } from "react-router-dom";

import { newsAPIKey } from "../../utils/constants";
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
import { getNews, filterNews } from "../../utils/newsApi";
import { saveArticle, unsaveArticle } from "../../utils/api";

import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { ActivePageContext } from "../../context/ActivePageContext";

import "./App.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const [isCardsRendered, setIsCardsRendered] = useState(false);
  const [activePopup, setActivePopup] = useState("");
  const [isActivePageMain, setIsActivePageMain] = useState(true);
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [cardsShown, setCardsShown] = useState(3);
  const [errorMessage, setErrorMessage] = useState("");
  const [userSavedNews, setUserSavedNews] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [savedKeywords, setSavedKeywords] = useState([]);
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

  // const handleActivePageChange = () => {
  //   isActivePageMain && setIsActivePageMain(false);
  //   !isActivePageMain && setIsActivePageMain(true);
  // };

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

  const handleSearchKeywords = (values, resetForm) => {
    setIsLoading(true);
    setIsCardsRendered(false);
    setIsEmptySearch(false);
    getNews(values.search, newsAPIKey)
      .then((rawData) => filterNews(rawData))
      .then((news) => setNewsData(news))
      .then(() => {
        setIsCardsRendered(true);
        setIsEmptySearch(false);
        setCurrentKeyword(values.search);
        setSavedKeywords([...savedKeywords, values.search]);
      })
      .catch((err) => {
        console.error;
        setIsEmptySearch(true);
        setIsCardsRendered(false);
        setErrorMessage(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleShowMoreClick = () => {
    setCardsShown(cardsShown + 3);
  };

  const handleSaveClick = (article, isSaved) => {
    !isSaved
      ? saveArticle(article, currentKeyword)
          .then((savedArticle) => {
            setUserSavedNews([...userSavedNews, savedArticle]);
          })
          .catch(console.error)
      : unsaveArticle(article)
          .then((unsavedArticle) => {
            setUserSavedNews([userSavedNews.filter(unsavedArticle.id)]);
          })
          .catch(console.error);
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
                    <Main
                      SearchBox={SearchBox}
                      handleSearchKeywords={handleSearchKeywords}
                    />
                    <Preloader isLoading={isLoading} />
                    <NotFound
                      isEmptySearch={isEmptySearch}
                      errorMessage={errorMessage}
                    />
                    <NewsCardList
                      isCardsRendered={isCardsRendered}
                      newsData={newsData}
                      cardsShown={cardsShown}
                      handleShowMoreClick={handleShowMoreClick}
                      handleSaveClick={handleSaveClick}
                    />
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
                        savedKeywords={savedKeywords}
                        userSavedNews={userSavedNews}
                      />
                      <SavedNews
                        userSavedNews={userSavedNews}
                        handleSaveClick={handleSaveClick}
                      />
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
