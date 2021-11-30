import './App.css'
import React from 'react'
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;