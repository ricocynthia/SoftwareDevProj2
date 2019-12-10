import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Build from '@material-ui/icons/Build';
import Store from '@material-ui/icons/Store';
import Work from '@material-ui/icons/Work';
import Assignment from '@material-ui/icons/Assignment';
import { withRouter } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import SelectUIView from './SelectUIView';
import { Grid, Button } from '@material-ui/core';
import { useFormControl } from '@material-ui/core/FormControl';
import ToolsList from '../Inventory/ToolsList';
import Projects from '../Projects/Projects';
import MaterialsTable from '../Inventory/Materialstable';
import SettingsIcon from '@material-ui/icons/Settings';


const drawerWidth = 150;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#c6cfd2',
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#d2cdc6'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(10),
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    logOutButton: {
      marginBottom: '10px',
      textTransform: 'capitalize',
      color: 'white',
      border: '1px solid white'
    },
  }),
  
);

function SideDrawer(props: any) {

  const classes = useStyles();
  const { userUIView, handleUserUIViewChange } = props
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };


  const onClickUpdateView = (text: String, index: number, event: any) => {
    handleListItemClick(event, index)

    const userCategoryView = text
    handleUserUIViewChange(userCategoryView)
  }


  // Handling all the different UI view to display
  const handleUserUIView = (userUIView: string) => {
    if(userUIView === 'Projects'){
      return <Projects userUIView={userUIView} handleUserUIViewChange={handleUserUIViewChange} />
    }
    else if(userUIView === 'Tools'){
      return <ToolsList handleUserUIViewChange={handleUserUIViewChange} />
    }
    else if(userUIView === 'Materials'){
      return <MaterialsTable handleUserUIViewChange={handleUserUIViewChange} />
    }
    else 
      return <SelectUIView userUIView={userUIView} handleUserUIViewChange={handleUserUIViewChange} />
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} style={{textAlign: "center", cursor: 'pointer'}} onClick={() => handleUserUIViewChange("Home")} >
  
          <SettingsIcon fontSize="large" style={{width: "140px", height: "100px", color: "#8f8070", marginBottom: "0px"}} />
          <Typography variant="subtitle1" gutterBottom style={{ marginTop: "0px", fontWeight: 600}}> Shop Flow </Typography>
        
        </div>
        <Divider />
        <List>
          {['Tools', 'Materials', 'Projects'].map((text, index) => (
            <ListItem 
              button 
              onClick={(event) => onClickUpdateView(text, index, event)} 
              selected={selectedIndex === index}
              key={text} 
              style={{textAlign: "center"}}>
              <ListItemText primary={text}  />
            </ListItem>

          ))}

        </List>
            <Button 
              style={{marginTop: 10}}
              variant='contained' 
              fullWidth> Log out </Button>
      </Drawer>



      <main className={classes.content}>
        <div className={classes.toolbar} />
        { handleUserUIView(userUIView) }
      </main>

    </div>
  );
}

export default withRouter(SideDrawer)
