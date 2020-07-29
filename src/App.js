import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopComponent from './Components/Pages/shop/shopComponent';
import Header from './Components/Header/header';
import SigninSignup from './Components/Sign-In-Sign-Up/signin-signup';
import { auth } from './firebase/firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopComponent} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </div>
    )
  }
}

export default App;
