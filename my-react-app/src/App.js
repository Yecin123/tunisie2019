import React from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from "./List";

import Product from "./product";

function App() {
  return (
    <Router basename="/">
      <Route exact component={List} path="/list" />
      <Route exact component={Product} path="/products/:id" />
   </Router>
  );
}

export default App;
