import React from 'react';
import './App.css';
import NavHeader from './Shared/NavHeader/NavHeader';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideProjects from './Components/SideProjects/SideProjects'
import About from './Components/About/About';
import ContactForm from './Components/ContactMe/ContactMeForm';
const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavHeader />

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/Projects' component={SideProjects} />
          <Route path='/About' component={About} />
          <Route path='/ContactForm' component={ContactForm} />
          <Route path='/' render={() => <div>page not found!</div>
          } />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
