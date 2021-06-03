import React from 'react';

import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';


import useStyles from './useStyles';
 
type CartContainerProps = {
    open: boolean;
    onClose: (open: boolean) => void;
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
};


const CartContainer: React.FC<CartContainerProps> = ({ open, onClose, children }) => {
    const classes = useStyles();

    return (
        <Drawer 
            open={open}
            anchor="right"
            onClose={onClose}
        >
            <Grid 
                container 
                justify='center'
                direction='column'
                alignItems='center'
                className={classes.root}
            >
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Drawer>
    )
};


export default CartContainer;