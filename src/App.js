import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopComponent from './Components/Pages/shop/shopComponent';
import Header from './Components/Header/header';
import SigninSignup from './Components/Sign-In-Sign-Up/signin-signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopComponent} />
        <Route path='/signin' component={SigninSignup} />
      </Switch>
    </div>
  );
}

export default App;
