import React from 'react';
import './App.css';
import './Props.css';

import { BrowserRouter, Route, Links } from "react-router-dom"
import HomePage from ".//comps/Home";
import Header from ".//comps/Header"
import Pcc from './comps/Pcc';
import Card from './comps/Card'
import Footer from './comps/Footer'


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Pcc />
      <Card />
      <Footer />
      <Route path="/" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;