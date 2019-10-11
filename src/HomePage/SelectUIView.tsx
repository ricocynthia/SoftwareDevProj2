import React from 'react';
import { Grid, makeStyles, Theme, createStyles, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 200,
            width: 400,
        },
        control: {
            padding: theme.spacing(2),
        },
        gridInBetweenSpacing: {
            marginTop: 40,
        },
        card: {
            maxWidth: 345,
          },
        media: {
            height: 140,
          },
        
    }),
);

export default function SelectUIView(props: any) {
    const classes = useStyles();
    const { userUIView, handleUserUIViewChange } = props

    const handleCategoryDescriptionTop = (value: number) => {
        if (value == 0) {
            return "Get a closer look at the recent projects operators are working on."
        } else {
            return "See more information about your current inventory supplies and equipment."
        }
    }

    const handleCategoryDescriptionBottom = (value: number) => {
        if (value == 0) {
            return "Check the status of current or incoming orders."
        } else {
            return "Get a closer look at the status of production items."
        }
    }

    const handleViewMoreButtonClick = () => {

    }

    

    return (
        <Grid container className={classes.root} spacing={0} >
            <Grid item lg={12}>
                <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>
                    {[0, 1].map(value => (
                        <Grid key={value} item>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={
                                            value === 0 ? "https://software-dev-proj.s3-us-west-1.amazonaws.com/Projects.jpg" : "https://software-dev-proj.s3-us-west-1.amazonaws.com/Inventory.jpg"
                                        }
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        {value === 0 ? "Projects" : "Inventory"}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {handleCategoryDescriptionTop(value)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" fullWidth>
                                        View More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>
                    {[0, 1].map(value => (
                        <Grid key={value} item>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={
                                            value === 0 ? "https://software-dev-proj.s3-us-west-1.amazonaws.com/Orders.jpg" : "https://software-dev-proj.s3-us-west-1.amazonaws.com/Production.jpg"
                                        }
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        {value === 0 ? "Orders" : "Production"}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {handleCategoryDescriptionBottom(value)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" fullWidth>
                                        View More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}