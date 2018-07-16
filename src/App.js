import React, { Component } from 'react';
import './App.css';
import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="row text-center">
      <div className="jumbotron">
          <h1 className="display-4">Everyday</h1>
          <p className="lead">Shop for your needs</p>
        </div>
      </div>
      <div className="row">
      <Grocery />
      <ShoppingBag />
      <Stats />
      </div>
    </div>
    );
  }
}

export default App;
