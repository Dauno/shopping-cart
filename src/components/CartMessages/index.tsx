import React, { useContext } from 'react';

import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

import CartContext from '../../context/Cart/context';


const CartMessages: React.FC = () => {
    const { cartDiscounts } = useContext(CartContext);

    const renderMessages = (data: any) => data.toApply.map((message: string) => (
        <Grid item xs={12} key={message}>
            <Alert severity="info" key={message}>{message}</Alert>
        </Grid>
    ));

    return (
        <Grid container spacing={1}>
            {renderMessages(cartDiscounts)}
        </Grid>
    );
};


export default CartMessages;