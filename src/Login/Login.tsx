import React from 'react';
import {
    Button, Container,
    Typography, makeStyles,
    Divider, TextField, Checkbox,
    FormControlLabel, Theme, createStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backgroundStyling: {
            textAlign: 'center',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url('https://software-dev-proj.s3-us-west-1.amazonaws.com/cutting-metal.jpg')`,
        },
        headerClass: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: 'black',
        },
        containerClass: {
            backgroundColor: 'white',
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
        },
        divSpacing: {
            marginTop: '10px'
        },
        button: {
            width: "350px",
            marginLeft: "100px",
            marginRight: "100px"
        },
        forgotPassword: {
            textTransform: 'none',
        }
    }),
);

const Login = (props: any) => {
    const classes = useStyles();

    return (
        <div className={classes.backgroundStyling}>
            <header className={classes.headerClass}>
                <Container className={classes.containerClass} maxWidth="sm">
                    <img src={`https://software-dev-proj.s3-us-west-1.amazonaws.com/Maverick_Manufacturing_Logo.png`} style={{width: "400px"}} />
                    <Divider />
                        {console.log(props)}
                    <div style={{ marginTop: "10px" }}>
                        <LockIcon />
                        <Typography variant="h6" style={{ marginBottom: "6px" }}> Sign In </Typography>

                        <div className={classes.inputSpacing}>
                            <TextField
                                variant="outlined"
                                label="username or employee ID"
                                required
                                style={{ width: "350px" }} />
                        </div>

                        <div className={classes.divSpacing}>
                            <TextField
                                variant="outlined"
                                type='password'
                                label="password"
                                required
                                style={{ width: "350px" }} />
                        </div>

                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
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

                        <div className={classes.divSpacing}>
                            <Button variant='contained' className={classes.button}>
                                Sign In
                            </Button>

                            <Button className={classes.forgotPassword} >
                                <Link to='/resetpassword' style={{textDecoration: 'none'}}> Forgot Password </Link>
                            </Button>
                                

                        </div>


                    </div>

                </Container>
            </header>
        </div>
    )
}

export default Login;