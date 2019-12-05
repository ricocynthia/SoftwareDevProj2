import React, { useEffect } from 'react';
import MaterialTable, { Icons, Column } from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Button, makeStyles, Theme, Typography, Box, useTheme, AppBar, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



interface Row {
    scrapID: number;
    material: string;
    qty: number;
    size: string; 
}

interface TableState {
  columns?: Array<Column<Row>>;
  data: Row[];
}

export default function Projects(props: any) {
  const tableIcons: Icons = {
    Add: forwardRef((props, ref: any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref: any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref: any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref: any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref: any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref: any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref: any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref: any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref: any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref: any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref: any) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref: any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref: any) => <ViewColumn {...props} ref={ref} />)
  };

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [scraps, setScraps] = React.useState<TableState>({
    data: [
      { scrapID: 123, material: 'metal', qty: 2, size: '11x15"' },
      { scrapID: 123, material: 'metal', qty: 2, size: '11x15"' }
    ]}
  )
  const [state, setState] = React.useState({
    data: [
      { jobNumber: '611167-B', dueDate: 5, status: "Not Started" }
    ],
  })

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue); 
  };

  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        title="Projects"
        columns={[
          { title: 'Job Number', field: 'jobNumber' },
          { title: 'Due Date', field: 'dueDate' },
          { title: 'Status', field: 'status' },
        ]}
        data={[
          { jobNumber: '611167-B', dueDate: 5, status: "Not Started" }
        ]}
        editable={{
          onRowAdd: (newData: {
            jobNumber: string;
            dueDate: number;
            status: string;
          }) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
            onRowUpdate: (newData: {
              jobNumber: string;
              dueDate: number;
              status: string;
            }, oldData: any) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data[data.indexOf(oldData)] = newData;
                  setState({ ...state, data });
                }, 600);
              }),
        }}
        detailPanel={[
          {
            tooltip: 'Details',
            render: rowData => {
              return (
                <div className={classes.root}>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                    >
                      <Tab label="Part Documentation" {...a11yProps(0)} />
                      <Tab label="Tool List" {...a11yProps(1)} />
                      <Tab label="Scrap" {...a11yProps(2)} />
                      <Tab label="Employee Time" {...a11yProps(3)} />
                    </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <li> Part Number: XXXXXXX </li>
                    <li> Part Qty: XX </li>
                    <li> Material(s): XXX, XXX </li>
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <li> Tool name: XXXXX, Qty: XX</li>
                    <li> Tool name: XXXXX, Qty: XX</li>
                    <li> Tool name: XXXXX, Qty: XX</li>
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                  
                  </TabPanel>
                  <TabPanel value={value} index={3} dir={theme.direction}>
                    Employee Time
                  </TabPanel>
                </div>
              )
            },
          }
        ]}
      />

    </div>
  );
}
