import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";

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
      <>
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
      </>
    </BrowserRouter>
  );
};

export default App;
