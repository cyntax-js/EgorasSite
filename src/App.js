import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Home/NavBar/Header.jsx";
import Landing from "./components/Home/Landing/Landing";
import Footer from "./components/Home/Footer/Footer.jsx";
import LoanDetails from "./components/LoanDetails/LoanDetails.jsx";

import "./App.css";

function App() {
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
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
