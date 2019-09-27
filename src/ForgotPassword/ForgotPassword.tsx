import React from 'react';
import {
    Button, Container,
    Typography, makeStyles,
    Divider, TextField, Theme, createStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
            alignContent: 'center',
            position: 'relative'
        },
        companyName: {
            marginTop: '20px',
            marginBottom: '16px',
            fontWeight: 600,
        },
        inputSpacing: {
            marginBottom: "20px",
            marginTop: "10px"
        },
        divSpacing: {
            marginTop: '10px'
        },
        button: {
            width: "350px",
            marginLeft: "100px",
            marginRight: "100px",
            backgroundColor: '#0d3069',
            color: 'white'
        },
        backArrow: {
            position: 'absolute',
            left: 0,
            height: '30px',
            width: '30px',
            marginTop: '5px',
            marginLeft: '10px'
        }
    }),
);

const ForgotPassword = (props: any) => {
    const classes = useStyles();

    return (
        <div className={classes.backgroundStyling}>
            <header className={classes.headerClass}>
                <Container className={classes.containerClass} maxWidth="sm">
                    <Link to='/'> <ArrowBackIcon className={classes.backArrow} /> </Link>
                    <img src={`https://software-dev-proj.s3-us-west-1.amazonaws.com/Maverick_Manufacturing_Logo.png`} style={{width: "400px"}} />
                    <Divider />

                    <div style={{ marginTop: "20px" }}>
                        <LockIcon />
                        <Typography variant="h6"> Forgot password? </Typography>
                        <Typography variant='caption'> We just need your phone number to send you a temporary password. </Typography>

                        <div className={classes.inputSpacing}>
                            <TextField
                                variant="outlined"
                                label="phone number"
                                required
                                style={{ width: "350px" }} />
                        </div>

                        <div className={classes.divSpacing}>
                            <Button variant='contained' className={classes.button}>
                                Reset Password
                            </Button>
                        </div>

                    </div>

                </Container>
            </header>
        </div>
    );

}

export default ForgotPassword;