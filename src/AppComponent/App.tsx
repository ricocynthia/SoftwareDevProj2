import React from 'react';
import Login from '../Login/Login';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

function App() {

  return (
    <Router>
      <Switch>

        <Route exact path='/' component={() => <Login />} /> 
        <Route path='/resetPassword' component={() => <ForgotPassword />} />
        
      </Switch>
    </Router>
  );
}

export default App;
