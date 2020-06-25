import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import HomeGuest from './components/HomeGuest';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomeGuest />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
