import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// components
import Header from "./components/Home/NavBar/Header.jsx";
import Landing from "./components/Home/Landing/Landing";
import Footer from "./components/Home/Footer/Footer.jsx";
import LoanDetails from "./components/LoanDetails/LoanDetails.jsx";
import Privacy from "./components/PrivacyPolicy/Privacy.jsx";
import About from "./components/About/About.jsx";

import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/loan-details">
            <LoanDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
