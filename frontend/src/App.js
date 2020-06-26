import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
