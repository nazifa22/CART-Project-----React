import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopComponent from './Components/Pages/shop/shopComponent';
import Header from './Components/Header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
