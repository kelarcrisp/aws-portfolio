import React, { useState, useEffect } from "react";
import "./App.css";
import NavHeader from "./Shared/NavHeader/NavHeader";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideProjects from "./Components/SideProjects/SideProjects";
import About from "./Components/About/About";
import ContactForm from "./Components/ContactMe/ContactMeForm";
import MiniDrawer from "./Shared/SideDrawer/SideDrawer";
import { ThemeContext } from "./Shared/contexts/ThemeContext";
import LandingPageSvg from "./Components/landingPageSvg/LandingPageSvg";
const App = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowHomeScreen(true);
    }, 2800);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <ThemeContext.Provider>
          {/* <NavHeader /> */}
          {/* <MiniDrawer /> */}
          <Route
            path="/"
            exact
            component={showHomeScreen ? HomePage : LandingPageSvg}
          />
          {/* <Route path='/Projects' component={SideProjects} />
            <Route path='/About' component={About} />
            <Route path='/ContactForm' component={ContactForm} /> */}
          {/* <Route path='/' render={() => <div>page not found!</div>
          } /> */}
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
