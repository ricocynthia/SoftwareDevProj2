import React from 'react';
import Login from '../Login/Login';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Home from '../HomePage/Home';

function App(props: any) {

  return (
    <Router>
      <Switch>

        <Route exact path='/' component={() => <Login />} /> 
        <Route path='/resetpassword' component={() => <ForgotPassword />} />
        <Route path='/home' component={() => <Home />} />
        
      </Switch>
    </Router>
  );
}

export default App;
