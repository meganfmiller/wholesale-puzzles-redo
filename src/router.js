import React from "react";
import { Switch, Route } from "react-router-dom";

import About from './components/About/About';
import Home from './components/Home/Home.js';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
import Results from './components/Results/Results';

export default (
    <Switch>
    <Route component={ About } path="/about" />
    <Route component={ Home } path="/" exact />
    <Route component={ Cart } path="/cart" />
    <Route component={ Contact } path="/contact" />
    <Route component={ Results } path="/results" />
    {/* <Route component={ Product } path="/results/:item" /> */}
  </Switch>
)