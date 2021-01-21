import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "../Pages/Register";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import ParentDashboard from "../Pages/ParentDashboard";
import DoctorDashboard from "../Pages/DoctorDashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import SurveyForm from "../Components/SurveyForm";
import { AuthProvider } from "../context/AuthContext";
import DoctorRoute from "./DoctorRoute";
import AdminRoute from "./AdminRoute";

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
            <SurveyForm />
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
