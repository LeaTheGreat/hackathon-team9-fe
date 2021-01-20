import React from "react";
import Register from "../Pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import ParentDashboard from "../Pages/ParentDashboard";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Register />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dash">
          <ParentDashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
