import React, {useState, useEffect} from 'react';
import Catalog from './Catalog';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header.js';
import './App.css';
import Collection from './Collection/Collection';
import Signup from './Signup/Signup';
import {auth} from './Auth/Firebase.Utils';

const Cart = () => (
  <div>
    <h1>Cart</h1>
  </div>
);

export default function App() {
  const [currentUser, setCurrentUser] = useState({currentUser: null});

  useEffect(() => {
    //auth.subscribe
    const unsubscribeAuthStateChanged = auth.onAuthStateChanged( user => setCurrentUser(user));
    unsubscribeAuthStateChanged();
    console.log('this is user - ',  currentUser);
  });

  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <Switch>
        <Route exact path='/' component={Catalog} />
        <Route exact path='/shop' component={Collection} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
    
  );
};
