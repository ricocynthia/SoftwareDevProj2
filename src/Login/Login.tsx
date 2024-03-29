import React from 'react';
import {
    Button, Container,
    Typography, makeStyles,
    Divider, Theme, createStyles, TextField
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { withRouter } from 'react-router-dom';

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
            height: '400px',
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
            width: "250px",
            marginLeft: "100px",
            marginRight: "100px",
            backgroundColor: "#908172"
        },
        signInButton: {
            textDecoration: 'none',
            color: 'black',
            textTransform: 'capitalize'

        }
    }),
);

const Login = (props: any) => {
    const classes = useStyles();
    const { history } = props

    return (
        <div className={classes.backgroundStyling}>
            <header className={classes.headerClass}>
                <Container className={classes.containerClass} maxWidth="sm">
                    <img src={`https://software-dev-proj.s3-us-west-1.amazonaws.com/Maverick_Manufacturing_Logo.png`} style={{ width: "400px" }} />
                    <Divider />
                    <div style={{ marginTop: "10px" }}>
                        <LockIcon />
                        <Typography variant="h6" style={{ marginBottom: "6px" }}> Welcome to ShopFlo! </Typography>
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

                            <div className={classes.divSpacing}>
                                <Button variant='contained' className={classes.button} onClick={() =>                             
                                history.push({
                                pathname: '/home'
                            })}>
                                    Log in
                            </Button>
                            </div>


                        

                    </div>

                </Container>
            </header>
        </div>
    )
}

export default withRouter(Login);