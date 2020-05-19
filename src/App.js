import React, { useState } from 'react';
import './App.css';
import NavHeader from './Shared/NavHeader/NavHeader';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideProjects from './Components/SideProjects/SideProjects'
import About from './Components/About/About';
import ContactForm from './Components/ContactMe/ContactMeForm';
import MiniDrawer from './Shared/SideDrawer/SideDrawer';
import { ThemeContext } from './Shared/contexts/ThemeContext';
const App = () => {

  const [themeColor, setThemeColor] = useState(false)
  return (
    <BrowserRouter>
      <>
        <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
          <NavHeader />
          {/* <MiniDrawer /> */}
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/Projects' component={SideProjects} />
            <Route path='/About' component={About} />
            <Route path='/ContactForm' component={ContactForm} /> */}
          {/* <Route path='/' render={() => <div>page not found!</div>
          } /> */}
        </ThemeContext.Provider>
      </>
    </BrowserRouter>

  );
}

export default App;
