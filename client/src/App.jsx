import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import RecommendPage from './components/views/RecommendPage/RecommendPage';
import MovieDetailPage from './components/views/MovieDetailPage/MovieDetailPage';
import FavoritePage from './components/views/FavoritePage/FavoritePage';
import NavBar from './components/views/NavBar/NavBar';
import Auth from './hoc/auth';

function App() {
  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Auth(LandingPage, null)} />
          <Route exact path='/login' component={Auth(LoginPage, false)} />
          <Route exact path='/register' component={Auth(RegisterPage, false)} />
          <Route exact path='/recommend/:genreId' component={Auth(RecommendPage, null)} />
          <Route exact path='/movie/:movieId' component={Auth(MovieDetailPage, null)} />
          <Route exact path='/movie/:movieId' component={Auth(MovieDetailPage, null)} />
          <Route exact path='/favorite' component={Auth(FavoritePage, true)} />
      </Switch>
    </div>
  );
}

export default App;
