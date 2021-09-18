import React from 'react';
import Catalog from './Catalog';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header.js';
import './App.css';
import Collection from './Collection/Collection';
import Signup from './Signup/Signup';

const Cart = () => (
  <div>
    <h1>Cart</h1>
  </div>
);

export default function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Catalog} />
        <Route exact path='/shop' component={Collection} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
    
  );
};
