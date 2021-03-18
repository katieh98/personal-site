import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar"
import Header from "./components/Header"
import About from "./components/About"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Socials from "./components/Socials"


export default function App() {

  return (
    <div className="App">
    <Header />
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/About" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
    <Socials />
    <Footer />
    </div>
  );
}
