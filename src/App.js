import React from 'react';
import './App.css';
import NavHeader from './Shared/NavHeader/NavHeader';
import HomePage from './Components/HomePage/HomePage';
import { Grid, Paper } from '@material-ui/core'
const App = () => {
  return (
    <div>
      <NavHeader />
      <HomePage />
    </div>

  );
}

export default App;
