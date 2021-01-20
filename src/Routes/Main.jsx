import React from "react";
import Register from "../Pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import SurveyForm from '../Components/SurveyForm';
import ParentDashboard from "../Pages/ParentDashboard";
import { AuthProvider } from "../context/AuthContext";

const Main = () => {
  return (
    <AuthProvider>
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
          <Route path="/survey">
          <SurveyForm/>
        </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Main;
