import React from 'react';
import { Container, Typography, makeStyles, Divider, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import './App.css';

const useStyles = makeStyles({
  containerClass: {
    backgroundColor: 'white',
    backgroundImage: 'linear-gradient(1,1,1)',
    height: '500px',
    boxShadow: '5px 5px 5px #777777',
    alignContent: 'center'
  },
  companyName: {
    marginTop: '16px',
    marginBottom: '16px',
    fontWeight: 600
  },
  inputSpacing: {
    marginBottom: "20px"
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <Container className={classes.containerClass} maxWidth="sm">
          <Typography className={classes.companyName} variant="h4"> Company Name </Typography>
          <Divider />

        <div style={{marginTop: "20px"}}>
          <LockIcon />
          <Typography variant="h6" style={{marginBottom: "6px"}}> Sign In </Typography>
          
          <div className={classes.inputSpacing}>
            <TextField 
            variant="outlined" 
            label="username or employee ID"
            required 
            style={{width: "350px"}} />
          </div>

          <div>
            <TextField 
            variant="outlined"
            type='password' 
            label="password"
            required 
            style={{width: "350px"}} />
          </div>

          <div>
            <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                color="default"
                value="Remember me"
                inputProps={{
                  'aria-label': 'checkbox with default color',
                }}
              />
            }
            label="Remember me"
            />
          </div>

        </div>

        </Container>
      </header>
    </div>
  );
}

export default App;
