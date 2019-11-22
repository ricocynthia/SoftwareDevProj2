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


    return (
        <Grid container className={classes.root} spacing={0} >
            <Grid item lg={12}>
                <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>

                        <Grid key={"Inventory"} item>
                            <Card className={classes.card}>
                                <CardActionArea onClick={() => handleUserUIViewChange("Inventory")}>
                                    <CardMedia
                                        className={classes.media}
                                        image={"https://software-dev-proj.s3-us-west-1.amazonaws.com/Inventory.jpg"}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Inventory
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            See more information about your current inventory, supplies, and equipment.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" fullWidth onClick={() => handleUserUIViewChange("Inventory")}>
                                        View More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid key={"Projects"} item>
                            <Card className={classes.card}>
                                <CardActionArea onClick={() => handleUserUIViewChange("Projects")}>
                                    <CardMedia
                                        className={classes.media}
                                        image={"https://software-dev-proj.s3-us-west-1.amazonaws.com/Projects.jpg"}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Projects
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Get a closer look at the details of current projects employees are working on.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" fullWidth onClick={() => handleUserUIViewChange("Projects")}>
                                        View More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
   
                </Grid>
            </Grid>
        </Grid>
    )
}