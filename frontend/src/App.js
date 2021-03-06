import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StateContext from './StateContext'
import DispatchContext from './DispatchContext'
import { useImmerReducer } from 'use-immer'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import AddRecipe from './components/AddRecipe'
import ViewRecipe from './components/ViewRecipe'
import AllRecipes from './components/AllRecipes'
import ViewAllCategories from './components/ViewAllCategories'
import Profile from './components/Profile';

import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  const initialState = {
    loggedIn: Boolean( localStorage.getItem( 'recipeBookToken' ) ),
    user: {
      token: localStorage.getItem( 'recipeBookToken' ),
      username: localStorage.getItem( 'recipeBookUsername' ),
      email: localStorage.getItem( 'recipeBookEmail' )
    },
  }

  function appReducer( draft, action ) {
    switch ( action.type ) {
      case 'login':
        draft.loggedIn = true
        draft.user = action.data
        return;
      case 'logout':
        draft.loggedIn = false
        return;
    }
  }

  const [ state, dispatch ] = useImmerReducer( appReducer, initialState )

  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
        <BrowserRouter>
          <Header />
          <Switch Switch >
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/addRecipe'>
              <AddRecipe />
            </Route>
            <Route path='/viewRecipe/:id'>
              <ViewRecipe />
            </Route>
            <Route path="/allRecipes">
              <AllRecipes />
            </Route>
            <Route path="/viewAllCategories">
              <ViewAllCategories />
            </Route>
            <Route path="/myProfile/:username">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
