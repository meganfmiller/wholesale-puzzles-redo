import React from "react";
import { Switch, Route } from "react-router-dom";

import About from './components/About/About';
import Home from './components/Home/Home.js';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
import FilteredResults from './components/Results/FilteredResults';
import NewResults from './components/Results/NewResults';

export default (
    <Switch>
    <Route component={ About } path="/about" />
    <Route component={ Home } path="/" exact />
    <Route component={ Cart } path="/cart" />
    <Route component={ Contact } path="/contact" />
    <Route component={ NewResults } path="/newresults" />
    <Route component={ FilteredResults } path="/results" />
    <Route component={ Product } path="/resultz/:item" />
  </Switch>
)