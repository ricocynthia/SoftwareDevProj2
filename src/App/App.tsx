import React from 'react';
import Login from '../Login/Login';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../HomePage/Home';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    centerItems: {
      textAlign: 'center',
      padding: '400px 0'
    },
    textMargin: {
      marginTop: "8px"
    },
    loaderIcon: {
      color: 'black'
    }
  }),
);



function App(props: any) {

  return (

    <Router>
      <Switch>

        <Route exact path='/' component={() => <Login />} /> 
        <Route path='/home' component={() => <Home />} />
        
      </Switch>
    </Router>

  );
}

export default App;
