import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';
import Auth from './hoc/auth';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Auth(LandingPage, null)} />
        <Route exact path='/login' component={Auth(LoginPage, true)} />
        <Route exact path='/register' component={Auth(RegisterPage, true)} />
      </Switch>
    </div>
  );
}

export default App;
