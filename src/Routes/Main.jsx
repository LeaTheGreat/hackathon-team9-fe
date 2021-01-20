import React from 'react';
import Register from '../Pages/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../Pages/SignUp';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
