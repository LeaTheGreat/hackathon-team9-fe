import React from 'react';
import Register from '../Pages/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import SurveyForm from '../Components/SurveyForm'

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
        <Route path="/survey">
          <SurveyForm/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
