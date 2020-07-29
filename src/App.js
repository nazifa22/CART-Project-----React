import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopComponent from './Components/Pages/shop/shopComponent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
