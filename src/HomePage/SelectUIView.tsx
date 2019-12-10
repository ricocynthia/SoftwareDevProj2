import React from 'react';
import { Grid, makeStyles, Theme, createStyles, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ToolList from '../Inventory/ToolsList';
import MaterialsTable from '../Inventory/Materialstable';
import Projects from '../Projects/Projects';

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
          heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
          },
          secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
          },
        
    }),
);

export default function SelectUIView(props: any) {
    const classes = useStyles();
    const { userUIView, handleUserUIViewChange } = props
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root} >
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Tools List</Typography>
            <Typography className={classes.secondaryHeading}> Expand for more information on tools. </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails >
            <ToolList />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Materials List</Typography>
            <Typography className={classes.secondaryHeading}>
              Expand for more information on materials.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MaterialsTable />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Projects</Typography>
            <Typography className={classes.secondaryHeading}>
              Expand for more details about company projects.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Projects />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>


    )
}