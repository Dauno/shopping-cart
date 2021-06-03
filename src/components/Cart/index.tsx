import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CartTotal from '../CartTotal';
import CartProducts from '../CartProducts';
import CartMessages from '../CartMessages';
import CartContainer from '../../containers/Cart';
import CartContext from '../../context/Cart/context';

const Cart: React.FC = () => {
    const { open, isOpen } = useContext(CartContext);

    return (
        <CartContainer 
            open={isOpen}
            onClose={() => open(false)}
        >
            <Grid item xs={12}>
                <Typography gutterBottom variant="h5" align="center">
                    Resumen
                </Typography>
            </Grid>
            <CartProducts />
            <CartMessages />
            <CartTotal />
        </CartContainer>
    )
};


export default Cart;