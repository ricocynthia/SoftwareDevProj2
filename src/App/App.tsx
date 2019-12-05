import React from 'react';
import Login from '../Login/Login';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../HomePage/Home';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import ApiService from '../ApiService';
import superagent from 'superagent';

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
  const classes = useStyles();
  const apiKey = 'key';

  async function testAPI() {
    const result = await superagent.get('https://csc443-project-main-api.herokuapp.com/material').set('Content-Type', 'application/x-www-form-urlencoded').send({
      key: apiKey,
      query: "{getMaterials{id name type}}"
    })

    console.log(result)
  }

  testAPI()


  // if (loading) {
  //   return (
  //     <div className={classes.centerItems}>
  //       <CircularProgress className={classes.loaderIcon} />

  //       <Typography className={classes.textMargin} variant="h6">
  //         Loading....
  //       </Typography>
  //     </div>
  //   );
  // }

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
