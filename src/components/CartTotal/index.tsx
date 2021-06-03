import React, { useContext } from 'react';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import CartContext from '../../context/Cart/context';


const CartTotal: React.FC = () => {
    const { cartDiscounts, subTotal } = useContext(CartContext);

    const renderDiscount = (data: any) => data.applied.map((discount: any) => (
        <ListItem key={`cart-${discount.message}${discount.discount}`}>
            <ListItemText 
                secondary={discount.message} 
            />
            <ListItemSecondaryAction>
                <Typography variant="body1" color="textSecondary">
                    -${discount.discount}
                </Typography>
            </ListItemSecondaryAction>
        </ListItem>
    ));

    return (
        <Grid item xs={12}>
            <List dense>
                <ListItem key={`cart-subtotal`}>
                    <ListItemText primary={(
                        <Typography variant="subtitle1">
                            Subtotal de productos
                        </Typography>
                    )} />
                    <ListItemSecondaryAction>
                        <Typography variant="body1" color="textSecondary" component="p">
                            ${subTotal}
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                {cartDiscounts.totalApplied ? (
                    <ListItem key={`cart-discount`}>
                        <ListItemText primary={(
                            <Typography variant="subtitle1">
                                Descuento por marca
                            </Typography>
                        )} />
                        <ListItemSecondaryAction>
                            <Typography variant="body1" color="textSecondary" component="p">
                                -${cartDiscounts.totalApplied}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                ) : null}
                {renderDiscount(cartDiscounts)}
                <ListItem key={`cart-total`}>
                    <ListItemText primary={(
                        <Typography variant="subtitle1">
                           Total a pagar
                        </Typography>
                    )} />
                    <ListItemSecondaryAction>
                        <Typography variant="body1" color="textSecondary" component="p">
                            ${subTotal - cartDiscounts.totalApplied}
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Grid>
    );
};


export default CartTotal;