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

// Hook to resize
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}
