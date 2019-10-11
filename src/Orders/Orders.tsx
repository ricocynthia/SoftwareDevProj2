import React from 'react';
import OrdersTable from './OrdersTable';
import { Typography } from '@material-ui/core';
import PlaceOrder from './PlaceOrder';

export default function Orders(props: any) {
  const { userUIView, handleUserUIViewChange } = props
  const onClickUpdateView = (text: String) => {
    const userCategoryView = text
    console.log("current pg: " + userCategoryView)
    handleUserUIViewChange(userCategoryView)
  }

  return (
    <div>
      <Typography variant="button" onClick={() => onClickUpdateView("placeOrder")}>
        Place an order
      </Typography>

      <Typography>
        Current Orders:
      </Typography>

      <OrdersTable />
      


    </div>
  );
}