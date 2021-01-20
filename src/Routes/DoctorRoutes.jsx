import React from 'react';
import Register from '../Pages/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import AdminDash from '../Pages/AdminDash';
import { AuthProvider } from '../context/AuthContext';

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
          <Route path="/admin-dash">
            <AdminDash />
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
