import React, { useEffect } from 'react';
import MaterialTable, { Icons } from 'material-table';
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
import { Button, Dialog, DialogTitle, DialogContent, Typography, DialogActions, withStyles, IconButton, DialogContentText, TextField } from '@material-ui/core';
import Beenhere from '@material-ui/icons/Beenhere';
import ArrowBack from '@material-ui/icons/ArrowBack'
import CheckoutPopup from './CheckoutPopup';
import { booleanLiteral } from '@babel/types';


export default function MaterialsTable(props: any) {
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

  const {handleUserUIViewChange } = props;
  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'date' },
      { title: 'Employee ID', field: 'ID' },
      { title: 'Tool Name', field: 'toolName' },
      { title: 'Job Number', field: 'jobNumber' },
      { title: 'Quantity', field: 'qty' },
      { title: 'Checked in', field: 'checkedIn', type: Boolean}
    ],
    data: [
      { date: '10/25/2019', ID: 'testing employee',
        toolName: 'Hammer', jobNumber: '611167-B',  qty: 2,
        checkedIn: false }

    ],
  });

  const [open, setOpen] = React.useState(false);
  const [qty, setQty] = React.useState(0)

  const handleClickOpen = (open: boolean) => {
    setOpen(open);
  };

  const updateQty = (qty: number) => {
    setQty(qty)
  }

  const updateDataInput = (newData: {
    matName: string;
    qty: number;
    availabilty: boolean;
    }, oldData: any) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setQty(oldData.qty)
        console.log(qty)
        const data = [...state.data];
        console.log(data[data.indexOf(oldData)])
        // setState({ ...state, data });
      }, 600);
    })
  


  return (
    <div style={{width: "100%"}}>
      <MaterialTable
        icons={tableIcons}
        title="Check out log"
        columns={[
            { title: 'Date', field: 'date' },
            { title: 'Employee ID', field: 'ID' },
            { title: 'Tool Name', field: 'toolName' },
            { title: 'Job Number', field: 'jobNumber' },
            { title: 'Quantity', field: 'qty' },
            { title: 'Checked in', field: 'checkedIn', type: 'boolean'}
        ]}
        data={state.data}
        editable={{
          onRowAdd: (newData: {
            date: string;
            ID: string;
            toolName: string;
            jobNumber: string;
            qty: number;
            checkedIn: boolean;
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
            date: string;
            ID: string;
            toolName: string;
            jobNumber: string;
            qty: number;
            checkedIn: boolean;
          }, oldData: any) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: (oldData: any) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            }),
        }}
      />


    </div>
  );
}