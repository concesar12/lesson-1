import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/header/header.component';
import ShopPage from './components/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>

    </div>
  )
}


export default App;
