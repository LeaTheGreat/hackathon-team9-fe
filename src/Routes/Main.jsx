import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "../Pages/Register";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import ParentDashboard from "../Pages/ParentDashboard";
import DoctorDashboard from "../Pages/DoctorDashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import SurveyStyle from "../Components/SurveyStyle";
import { AuthProvider } from "../context/AuthContext";
import DoctorRoute from "./DoctorRoute";
import AdminRoute from "./AdminRoute";
import ArticlePage from "../Pages/ArticlePage";

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
          <Route exact path="/article/:id" component={ArticlePage} />
          <Route path="/parent-dash">
            <ParentDashboard />
          </Route>
          <DoctorRoute path="/doctor-dash">
            <DoctorDashboard />
          </DoctorRoute>
          <AdminRoute path="/admin-dash">
            <AdminDashboard />
          </AdminRoute>
          <Route path="/survey">
            <SurveyStyle />
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
